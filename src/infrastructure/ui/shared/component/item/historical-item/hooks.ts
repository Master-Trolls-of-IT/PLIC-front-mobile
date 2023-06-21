import { useMemo, useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import ComponentStyle from '~/infrastructure/ui/shared/component/item/historical-item/historical-item-style';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';

const useHistoricalItemData = (isFavourite: boolean, score: number) => {
    const [isExpended, setIsExpended] = useState(false);

    const ItemHeight = useSharedValue(100);
    const scorePercentage = score / 100;

    const scoreColor = getColorFromPercentage(score);
    const HistoricalItemStyle = ComponentStyle(isExpended, scoreColor);

    const animatedItemStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(ItemHeight.value * (isExpended ? 4 : 1), { duration: 500 })
        };
    });

    const onPress = () => {
        setIsExpended((prevState) => !prevState);
    };

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    const customInterBold = useCustomFontInterBold();

    return {
        isExpended,
        HistoricalItemStyle,
        onPress,
        animatedItemStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        customInterBold
    };
};

export default useHistoricalItemData;

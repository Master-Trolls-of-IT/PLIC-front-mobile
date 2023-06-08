import { useMemo, useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import ComponentStyle from '~/infrastructure/ui/shared/component/card/historical-card/historical-card-style';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';

const useHistoricalCardData = (isFavourite: boolean, score: number) => {
    const [isExpended, setIsExpended] = useState(false);

    const cardHeight = useSharedValue(100);
    const scorePercentage = score / 100;

    const scoreColor = getColorFromPercentage(score);
    const HistoricalCardStyle = ComponentStyle(isExpended, scoreColor);

    const animatedCardStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(cardHeight.value * (isExpended ? 4 : 1), { duration: 500 })
        };
    });

    const onPress = () => {
        setIsExpended((prevState) => !prevState);
    };

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite.svg')
            : require('~/domain/entities/assets/icon/unfilled-favourite.svg');
    }, [isFavourite]);

    const customInterBold = useCustomFontInterBold();

    return {
        isExpended,
        HistoricalCardStyle,
        onPress,
        animatedCardStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        customInterBold
    };
};

export default useHistoricalCardData;

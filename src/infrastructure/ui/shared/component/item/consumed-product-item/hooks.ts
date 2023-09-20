import { useMemo, useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';
import { ConsumedProductItemDataProps } from '~/domain/interfaces/props/search-list/consumed-product-item-data-props';

const useConsumedProductItemData = ({ consumedQuantity, isFavourite, score }: ConsumedProductItemDataProps) => {
    const [itemId, setItemId] = useState('');
    const { deleteConsumedProduct } = useConsumedProductPageService();
    const [isExpended, setIsExpended] = useState(false);

    const itemHeight = useSharedValue(100);
    const scorePercentage = score / 100;

    const scoreColor = getColorFromPercentage(score);

    const animatedItemStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(itemHeight.value * (isExpended ? 4.7 : 1), { duration: 500 })
        };
    });

    const round = (value: number): number => {
        const newValue: number = value * (consumedQuantity / 100);
        return Number(newValue.toFixed(2));
    };

    const onPress = () => {
        setIsExpended((prevState) => !prevState);
    };

    const onPressDeleteConsumedProduct = (id: string) => {
        void deleteConsumedProduct(id);
    };
    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    return {
        itemId: { input: itemId, dispatch: setItemId },
        isExpended,
        onPress,
        animatedItemStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        onPressDeleteConsumedProduct,
        round
    };
};

export default useConsumedProductItemData;

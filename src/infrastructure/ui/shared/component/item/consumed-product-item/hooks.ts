import { useCallback, useMemo, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';
import { ConsumedProductItemDataProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-data-props';
import { useStore } from '~/infrastructure/controllers/store';

const useConsumedProductItemData = ({ consumedQuantity, isFavourite, score }: ConsumedProductItemDataProps) => {
    const {
        DataStore: { setConsumedProducts, consumedProducts, toggleFavoriteConsumedProducts }
    } = useStore();

    const { deleteConsumedProduct } = useConsumedProductPageService();

    const [itemId, setItemId] = useState('');
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

    const onPressProduct = () => {
        setIsExpended((prevState) => !prevState);
    };

    const onPressDeleteConsumedProduct = useCallback(
        (id: string) => {
            const deleteProduct = async () => {
                const newConsumedProductItems = await deleteConsumedProduct(id);
                setConsumedProducts(newConsumedProductItems ?? consumedProducts);
            };
            void deleteProduct();
            setIsExpended(false);
        },
        [consumedProducts, deleteConsumedProduct, setConsumedProducts]
    );

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    return {
        itemId: { input: itemId, dispatch: setItemId },
        isExpended,
        onPressProduct,
        animatedItemStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        onPressDeleteConsumedProduct,
        round,
        toggleFavoriteConsumedProducts
    };
};

export default useConsumedProductItemData;

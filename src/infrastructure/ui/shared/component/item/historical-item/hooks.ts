import { useMemo, useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import useScanPageScannedItemService from '~/application/page-service/scan-page-scanned-item-service';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { HistoricalItemDataProps } from '~/domain/interfaces/props/search-list/item/historical-item/historical-item-data-props';
import { useStore } from '~/infrastructure/controllers/store';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';

const useHistoricalItemData = ({ barcode, isFavourite, score }: HistoricalItemDataProps) => {
    const {
        HistoryStore: { toggleFavoriteHistory },
        NavigationStore: { navigate },
        ConsumedProductStore: { consumedProducts }
    } = useStore();

    const { addConsumedProduct: saveConsumedProduct } = useScanPageScannedItemService();
    const { editQuantityConsumedProduct } = useConsumedProductPageService();

    const [isExpended, setIsExpended] = useState(false);
    const [modal, setModal] = useState(false);

    const itemHeight = useSharedValue(100);
    const scorePercentage = score / 100;

    const scoreColor = getColorFromPercentage(score);

    const animatedItemStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(itemHeight.value * (isExpended ? 4.1 : 1), { duration: 500 })
        };
    });

    const onPress = () => {
        setIsExpended((prevState) => !prevState);
    };

    const onPressConsumedProductsButton = () => {
        setModal(true);
    };

    const addQuantity = async (quantity: string) => {
        const productAlreadyExist = consumedProducts.find((product) => product.barcode === barcode);

        if (productAlreadyExist) {
            const newQuantity: number = Number(quantity) + productAlreadyExist.consumedQuantity;
            void editQuantityConsumedProduct(barcode, newQuantity);
        } else {
            await saveConsumedProduct(barcode, quantity);
        }
        navigate(PagesEnum.ConsumedProducts);
    };

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    return {
        isExpended,
        onPress,
        modal,
        setModal,
        animatedItemStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        onPressConsumedProductsButton,
        addQuantity,
        toggleFavoriteHistory
    };
};

export default useHistoricalItemData;

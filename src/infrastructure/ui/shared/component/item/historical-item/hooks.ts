import { useCallback, useMemo, useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import useScanPageScannedItemService from '~/application/page-service/scan-page-scanned-item-service';

const useHistoricalItemData = (isFavourite: boolean, score: number) => {
    const { addConsumedProduct } = useScanPageScannedItemService();
    const [isExpended, setIsExpended] = useState(false);

    const itemHeight = useSharedValue(100);
    const scorePercentage = score / 100;

    const scoreColor = getColorFromPercentage(score);

    const animatedItemStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(itemHeight.value * (isExpended ? 4 : 1), { duration: 500 })
        };
    });

    const onPress = () => {
        setIsExpended((prevState) => !prevState);
    };

    const onPressConsumedProductsButton = useCallback(
        (barcode: string) => {
            // TODO: Voir pourquoi il manque un dispatch
            void addConsumedProduct(barcode);
        },
        [addConsumedProduct]
    );

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    return {
        isExpended,
        onPress,
        animatedItemStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        onPressConsumedProductsButton
    };
};

export default useHistoricalItemData;

import { useMemo, useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import useScanPageScannedItemService from '~/application/page-service/scan-page-scanned-item-service';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { HistoricalItemDataProps } from '~/domain/interfaces/props/search-list/historical-item-data-props';
import { useStore } from '~/infrastructure/controllers/store';

const useHistoricalItemData = ({ barcode, isFavorite, score }: HistoricalItemDataProps) => {
    const {
        DataStore: { toggleFavorite },
        NavigationStore: { navigate },
        LogStore: { error }
    } = useStore();

    const { addConsumedProduct } = useScanPageScannedItemService();

    const [isExpended, setIsExpended] = useState(false);
    const [modal, setModal] = useState(false);
    const [quantity, setQuantity] = useState('100');

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

    const onPressModalButton = async () => {
        setModal(false);
        try {
            await addConsumedProduct(barcode, quantity);
            navigate(PagesEnum.ConsumedProducts);
        } catch (err) {
            if (err instanceof Error) {
                error(
                    'onPressModalButton > historical-item ',
                    'Unknown error while adding consumed Product to database',
                    err.message
                );
            }
        }
    };

    const favouriteIcon = useMemo(() => {
        return isFavorite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavorite]);

    return {
        isExpended,
        onPress,
        quantity,
        setQuantity,
        modal,
        setModal,
        animatedItemStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        onPressConsumedProductsButton,
        onPressModalButton,
        toggleFavorite
    };
};

export default useHistoricalItemData;

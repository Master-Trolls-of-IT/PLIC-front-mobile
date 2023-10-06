import { useEffect, useState } from 'react';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';
import useScanPageScannedItemService from '~/application/page-service/scan-page-scanned-item-service';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import chooseRightEcoScoreValue from '~/infrastructure/ui/shared/helper/choose-right-ecoScore-value';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const useScanPageScannedItemData = (scannedProduct: ProductInfo | undefined, onPressScanAgain: () => void) => {
    const {
        NavigationStore: { navigate },
        LogStore: { error }
    } = useStore();

    const [modal, setModal] = useState(false);
    const [quantity, setQuantity] = useState('100');

    const unfilledFavouriteAsset = require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');
    const { addConsumedProduct } = useScanPageScannedItemService();

    const chooseRightNutriScoreImage = () => {
        switch (scannedProduct?.nutriscore.grade) {
            case 'a':
                return require('~/domain/entities/assets/icon/nutriscore-icon/nutriscore-a.svg');
            case 'b':
                return require('~/domain/entities/assets/icon/nutriscore-icon/nutriscore-b.svg');
            case 'c':
                return require('~/domain/entities/assets/icon/nutriscore-icon/nutriscore-c.svg');
            case 'd':
                return require('~/domain/entities/assets/icon/nutriscore-icon/nutriscore-d.svg');
            case 'e':
                return require('~/domain/entities/assets/icon/nutriscore-icon/nutriscore-e.svg');
        }
    };

    const onPressModalButton = async () => {
        setModal(false);
        try {
            await addConsumedProduct(scannedProduct?.barcode, quantity);
            navigate(PagesEnum.ConsumedProducts);
            onPressScanAgain();
        } catch (err) {
            if (err instanceof Error) {
                error(
                    'onPressModalButton > scanned-item ',
                    'Unknown error while adding consumed Product to database',
                    err.message
                );
            }
        }
    };

    const interBoldText = CustomFontInterBold().text;

    return {
        modal,
        setModal,
        chooseRightNutriScoreImage,
        ecoScore: chooseRightEcoScoreValue(scannedProduct?.ecoscore),
        horizontalScrollLineAsset,
        quantity,
        setQuantity,
        unfilledFavouriteAsset,
        addConsumedProduct,
        onPressModalButton,
        interBoldText
    };
};

export default useScanPageScannedItemData;

import { useState } from 'react';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';
import useScanPageScannedItemService from '~/application/page-service/scan-page-scanned-item-service';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import chooseRightEcoScoreValue from '~/infrastructure/ui/shared/helper/choose-right-ecoScore-value';

const useScanPageScannedItemData = (scannedProduct: ProductInfo | undefined, onPressScanAgain: any) => {
    const {
        NavigationStore: { navigate }
    } = useStore();

    const [modal, setModal] = useState(false);

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

    const onPressModalButton = () => {
        setModal(false);
        navigate(PagesEnum.ConsumedProducts);
        onPressScanAgain(false);
    };

    return {
        modal,
        setModal,
        chooseRightNutriScoreImage,
        ecoScore: chooseRightEcoScoreValue(scannedProduct?.ecoscore),
        horizontalScrollLineAsset,
        unfilledFavouriteAsset,
        addConsumedProduct,
        onPressModalButton
    };
};

export default useScanPageScannedItemData;

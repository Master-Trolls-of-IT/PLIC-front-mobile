import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';

const useScanPageScannedItemData = (scannedProduct: ProductInfo | undefined) => {
    const unfilledFavouriteAsset = require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');

    const ecoScore = scannedProduct?.ecoscore ? parseInt(scannedProduct.ecoscore) : -1;

    const chooseRightEcoScoreImage = () => {
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

    return { chooseRightEcoScoreImage, ecoScore, horizontalScrollLineAsset, unfilledFavouriteAsset };
};

export default useScanPageScannedItemData;

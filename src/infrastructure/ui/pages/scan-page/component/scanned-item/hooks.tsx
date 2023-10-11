import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';
import useScanPageScannedItemService from '~/application/page-service/scan-page-scanned-item-service';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import chooseRightEcoScoreValue from '~/infrastructure/ui/shared/helper/choose-right-ecoScore-value';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericEcoScore from '~/infrastructure/ui/pages/scan-page/component/generic-eco-score/generic-eco-score';
import ScanPageScannedItemStyle from '~/infrastructure/ui/pages/scan-page/component/scanned-item/scan-page-scanned-item-style';

const useScanPageScannedItemData = (scannedProduct: ProductInfo | undefined, onPressScanAgain: () => void) => {
    const {
        NavigationStore: { navigate },
        LogStore: { error }
    } = useStore();

    const [modal, setModal] = useState(false);
    const [quantity, setQuantity] = useState('');

    const unfilledFavouriteAsset = require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');
    const { addConsumedProduct } = useScanPageScannedItemService();

    const ecoScore = chooseRightEcoScoreValue(scannedProduct?.ecoscore);

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
        setQuantity('');
    };

    const interBoldText = CustomFontInterBold().text;

    const showRightEcoScore = (() => {
        if (scannedProduct?.iswater) return <GenericEcoScore ecoScore={100} />;
        else if (ecoScore != 0) return <GenericEcoScore ecoScore={ecoScore} />;
        else
            return (
                <View style={ScanPageScannedItemStyle.ecoScoreContainer}>
                    <Text style={ScanPageScannedItemStyle.ecoScoreText}>Eco-Score indisponible</Text>
                </View>
            );
    })();

    const servingQuantity = scannedProduct?.iswater ? 25 : scannedProduct?.serving ?? 0;

    const onPressAddServing = () => {
        setQuantity(String(Number(quantity) + servingQuantity));
    };

    return {
        modal,
        setModal,
        chooseRightNutriScoreImage,
        horizontalScrollLineAsset,
        quantity,
        servingQuantity,
        setQuantity,
        unfilledFavouriteAsset,
        addConsumedProduct,
        onPressModalButton,
        onPressAddServing,
        interBoldText,
        showRightEcoScore
    };
};

export default useScanPageScannedItemData;

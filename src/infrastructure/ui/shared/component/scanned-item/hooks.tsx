import React, { useState } from 'react';
import { Text, View } from 'react-native';
import chooseRightEcoScoreValue from '~/infrastructure/ui/shared/helper/choose-right-eco-score-value';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericEcoScore from '~/infrastructure/ui/pages/scan-page/component/generic-eco-score/generic-eco-score';
import ScannedItemStyle from '~/infrastructure/ui/shared/component/scanned-item/scanned-item-style';
import { ScannedItemDataProps } from '~/domain/interfaces/props/scanned-item/scanned-item-data-props';

const useScannedItemData = ({ scannedProduct, onPressAddQuantity }: ScannedItemDataProps) => {
    const [modal, setModal] = useState(false);
    const [quantity, setQuantity] = useState('');

    const unfilledFavouriteAsset = require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');

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

    // TODO : Ajout de la quantité d'eau consommée dans le store
    const onPressModalButton = async () => {
        setModal(false);
        void onPressAddQuantity(quantity);
        setQuantity('');
    };

    const interBoldText = CustomFontInterBold().text;

    const showRightEcoScore = (() => {
        if (ecoScore != 0) return <GenericEcoScore ecoScore={ecoScore} />;
        else
            return (
                <View style={ScannedItemStyle.ecoScoreContainer}>
                    <Text style={ScannedItemStyle.ecoScoreText}>Eco-Score indisponible</Text>
                </View>
            );
    })();

    const servingQuantity = scannedProduct?.isWater ? 25 : scannedProduct?.serving ?? 0;

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
        onPressModalButton,
        onPressAddServing,
        interBoldText,
        showRightEcoScore
    };
};

export default useScannedItemData;

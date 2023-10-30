import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericEcoScore from '~/infrastructure/ui/pages/scan-page/component/generic-eco-score/generic-eco-score';
import ScannedItemStyle from '~/infrastructure/ui/shared/component/scanned-item/scanned-item-style';
import { ScannedItemDataProps } from '~/domain/interfaces/props/scanned-item/scanned-item-data-props';

const useScannedItemData = ({ scannedProduct }: ScannedItemDataProps) => {
    const [modal, setModal] = useState(false);

    const unfilledFavouriteAsset = require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');

    const ecoScore = Number(scannedProduct?.ecoscore);

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

    return {
        modal,
        setModal,
        chooseRightNutriScoreImage,
        horizontalScrollLineAsset,
        unfilledFavouriteAsset,
        interBoldText,
        showRightEcoScore
    };
};

export default useScannedItemData;

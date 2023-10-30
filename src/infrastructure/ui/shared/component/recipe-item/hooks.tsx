import { Text, View } from 'react-native';
import React from 'react';
import chooseRightEcoScoreValue from '~/infrastructure/ui/shared/helper/choose-right-eco-score-value';
import { RecipeInfo } from '~/domain/interfaces/props/recipe-item/recipe-item-info';
import GenericEcoScore from '~/infrastructure/ui/pages/scan-page/component/generic-eco-score/generic-eco-score';
import ScannedItemStyle from '~/infrastructure/ui/shared/component/scanned-item/scanned-item-style';

const useRecipeItemData = ({ recipe }: { recipe: RecipeInfo }) => {
    const unfilledFavouriteAsset = require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');

    const ecoScore = chooseRightEcoScoreValue(recipe?.ecoScore);
    const chooseRightNutriScoreImage = () => {
        switch (recipe?.nutriscore.grade) {
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
    const showRightEcoScore = (() => {
        if (ecoScore != 0) return <GenericEcoScore ecoScore={ecoScore} />;
        else
            return (
                <View style={ScannedItemStyle.ecoScoreContainer}>
                    <Text style={ScannedItemStyle.ecoScoreText}>Eco-Score indisponible</Text>
                </View>
            );
    })();

    const onPressGoBack = () => {
        //TODO faire la fonction pour aller en arrière
    };

    return {
        unfilledFavouriteAsset,
        horizontalScrollLineAsset,
        ecoScore,
        chooseRightNutriScoreImage,
        onPressGoBack,
        showRightEcoScore
    };
};

export default useRecipeItemData;

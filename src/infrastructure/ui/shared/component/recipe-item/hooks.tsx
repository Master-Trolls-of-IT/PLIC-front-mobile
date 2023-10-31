import { Dimensions, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import chooseRightEcoScoreValue from '~/infrastructure/ui/shared/helper/choose-right-eco-score-value';
import { RecipeInfo } from '~/domain/interfaces/props/recipe-item/recipe-item-info';
import GenericEcoScore from '~/infrastructure/ui/pages/scan-page/component/generic-eco-score/generic-eco-score';
import ScannedItemStyle from '~/infrastructure/ui/shared/component/scanned-item/scanned-item-style';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

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

    const scoreStyle = useMemo(() => {
        switch (true) {
            case recipe.score < 33:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicRedWidget };
            case recipe.score < 66:
                return { ...MealItemStyle.score, color: ColorEnum.MealPageOrange };
            default:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicDarkGreen };
        }
    }, [recipe.score]);
    const deleteButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicRedIcon,
            borderRadius: 20,
            width: 220 * (Dimensions.get('screen').width / 400),
            height: 45
        },
        text: {
            color: ColorEnum.ClassicGrey,
            fontSize: 18
        }
    };
    const editButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicGreen,
            borderRadius: 20,
            width: 220 * (Dimensions.get('screen').width / 400),
            height: 45
        },
        text: {
            color: ColorEnum.ClassicGrey,
            fontSize: 18
        }
    };
    const sendReview = () => {};
    return {
        unfilledFavouriteAsset,
        horizontalScrollLineAsset,
        ecoScore,
        chooseRightNutriScoreImage,
        showRightEcoScore,
        scoreStyle,
        sendReview,
        deleteButtonStyle,
        editButtonStyle
    };
};

export default useRecipeItemData;

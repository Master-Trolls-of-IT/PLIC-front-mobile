import { Dimensions, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { RecipeItemDataProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-data-props';

const useRecipeItemData = ({ score }: RecipeItemDataProps) => {
    const unfilledFavouriteAsset = require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');

    const scoreStyle = useMemo(() => {
        switch (true) {
            case score < 33:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicRedWidget };
            case score < 66:
                return { ...MealItemStyle.score, color: ColorEnum.MealPageOrange };
            default:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicDarkGreen };
        }
    }, [score]);
    const deleteButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicRedIcon,
            borderRadius: 20,
            width: 180 * (Dimensions.get('screen').width / 400),
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
            width: 180 * (Dimensions.get('screen').width / 400),
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
        scoreStyle,
        sendReview,
        deleteButtonStyle,
        editButtonStyle
    };
};

export default useRecipeItemData;

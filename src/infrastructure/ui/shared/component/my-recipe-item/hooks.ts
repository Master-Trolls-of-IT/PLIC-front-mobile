import { useMemo, useState } from 'react';
import { Dimensions } from 'react-native';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { ActiveRecipeItemDataProps } from '~/domain/interfaces/props/recipe-item/active-recipe-item-data-props';

const useMyRecipeItemData = ({ activeRecipe }: ActiveRecipeItemDataProps) => {
    const [deleteConfirmationModal, setDeleteConfirmationModal] = useState<boolean>(false);
    const [, setRecipeIdToDelete] = useState<string | null>(null);

    const onDeleteRecipeModalPress = (recipeId: string) => {
        setRecipeIdToDelete(recipeId);
        setDeleteConfirmationModal(true);
    };

    const onPressCancelDeleteModal = () => {
        setRecipeIdToDelete('');
        setDeleteConfirmationModal(false);
    };

    const onDeleteConfirm = (recipeId: string) => {
        setRecipeIdToDelete(recipeId);
        setDeleteConfirmationModal(false);
    };

    const unfilledFavouriteAsset = require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');

    const scoreStyle = useMemo(() => {
        switch (true) {
            case activeRecipe?.score && activeRecipe?.score < 33:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicRedWidget };
            case activeRecipe?.score && activeRecipe?.score < 66:
                return { ...MealItemStyle.score, color: ColorEnum.MealPageOrange };
            default:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicDarkGreen };
        }
    }, [activeRecipe?.score]);
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
    const sendReview = () => {
        //TODO
    };

    return {
        deleteConfirmationModal,
        setDeleteConfirmationModal,
        onDeleteRecipeModalPress,
        onPressCancelDeleteModal,
        onDeleteConfirm,
        unfilledFavouriteAsset,
        horizontalScrollLineAsset,
        scoreStyle,
        sendReview,
        deleteButtonStyle,
        editButtonStyle
    };
};

export default useMyRecipeItemData;

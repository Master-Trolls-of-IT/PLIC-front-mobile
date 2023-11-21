import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '~/infrastructure/controllers/store';
import { ActiveRecipeInfo } from '~/domain/interfaces/props/recipe-item/active-recipe-info';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useRecipePageData = () => {
    const {
        NavigationStore: { navigate },
        RecipeStore: { recipeList, activeRecipe, setActiveRecipe }
    } = useStore();

    const onPressViewDetail = (recipe: ActiveRecipeInfo) => {
        setActiveRecipe(recipe);
    };

    const onPressGoBack = async () => {
        setActiveRecipe(undefined);
    };

    const toggleFavourite = () => {
        //TODO Faire la fonction favourite
    };

    const onPressCreateRecipe = () => {
        //TODO Faire ca
    };

    const onPressShowMyRecipes = async () => {
        navigate(PagesEnum.RecipePage);
    };
    return {
        onPressViewDetail,
        activeRecipe,
        recipeList,
        toggleFavourite,
        onPressGoBack,
        onPressShowMyRecipes,
        onPressCreateRecipe
    };
};

export default useRecipePageData;

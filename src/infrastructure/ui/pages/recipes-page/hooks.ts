import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { ActiveRecipeInfo } from '~/domain/interfaces/props/recipe-item/active-recipe-info';

const useRecipePageData = () => {
    const {
        RecipeStore: { recipeList, activeRecipe, setActiveRecipe }
    } = useStore();

    const [errorResponse, setErrorResponse] = useState('');

    const onPressViewDetail = (recipe: ActiveRecipeInfo) => {
        setActiveRecipe(recipe);
    };

    const onPressGoBack = async () => {
        setActiveRecipe(undefined);
        setErrorResponse('');
    };

    const toggleFavourite = () => {
        //TODO Faire la fonction favourite
    };

    const onPressCreateRecipe = () => {
        //TODO Faire ca
    };

    const onPressShowMyRecipes = () => {
        //TODO
    };
    return {
        onPressViewDetail,
        activeRecipe,
        recipeList,
        toggleFavourite,
        errorResponse,
        onPressGoBack,
        onPressShowMyRecipes,
        onPressCreateRecipe
    };
};

export default useRecipePageData;

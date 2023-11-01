import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { RecipeInfo } from '~/domain/interfaces/props/recipe-item/recipe-item-info';

const useRecipePageData = () => {
    const {
        RecipeStore: { recipeList }
    } = useStore();

    const [isRecipeActive, setIsRecipeActive] = useState(false);
    const [activeRecipe, setActiveRecipe] = useState<RecipeInfo | undefined>();
    const [errorResponse, setErrorResponse] = useState('');

    const onPressViewDetail = (recipe: RecipeInfo) => {
        setActiveRecipe(recipe);
        setIsRecipeActive(true);
    };

    const onPressGoBack = async () => {
        setIsRecipeActive(false);
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
        isRecipeActive,
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

import { useState } from 'react';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';
import { useStore } from '~/infrastructure/controllers/store';
import { RecipeInfo } from '~/domain/interfaces/props/recipe-item/recipe-item-props';

const useRecipePageData = (navigate: NavigateProps) => {
    const {
        RecipeStore: { recipeList }
    } = useStore();

    const [isRecipeActive, setIsRecipeActive] = useState(true);
    const [activeRecipe, setActiveRecipe] = useState<RecipeInfo | undefined>(undefined);
    const onPressViewDetail = ({ data }: { data: RecipeInfo }) => {
        setActiveRecipe(data);
        setIsRecipeActive(true);
    };
    const onPressConsumeMeal = async (quantity: string) => {
        //TODO Ajouter les recettes aux aliments consommés (Fonctions Front + back à faire)
        //await addRecipe(recipe);
    };
    const toggleFavourite = () => {
        //TODO Faire la fonction favourite
    };
    return {
        isRecipeActive,
        onPressConsumeMeal,
        onPressViewDetail,
        activeRecipe,
        recipeList,
        toggleFavourite
    };
};

export default useRecipePageData;

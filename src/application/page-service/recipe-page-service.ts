import { AxiosError } from 'axios';
import { useCallback } from 'react';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { RecipeData } from '~/domain/interfaces/services/recipe-data';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';

const useRecipePageService = () => {
    const {
        LogsStore: { error }
    } = useStore();
    const saveRecipe = async (recipeData: RecipeData): Promise<RecipeItemProps> => {
        try {
            const response = await APIServices.POST<RecipeItemProps, RecipeData>('/recipe', recipeData);
            return response.data as RecipeItemProps;
        } catch (err) {
            error('useRecipePageService', 'AddRecipe : Caught an exception.', (err as AxiosError).message);
            return {} as RecipeItemProps;
        }
    };

    const getAllRecipes = useCallback(async (): Promise<RecipeItemProps[]> => {
        try {
            const response = await APIServices.GET<RecipeItemProps[]>(`/recipe`);
            return (response.data ?? []) as RecipeItemProps[];
        } catch (err) {
            error('useRecipePageService', 'GetRecipes: Caught an exception.', (err as AxiosError).message);
            return [];
        }
    }, [error]);

    const getUserRecipes = useCallback(
        async (email: string): Promise<RecipeItemProps[]> => {
            try {
                const response = await APIServices.GET<RecipeItemProps[]>(`/recipe/${email}`);
                return (response.data ?? []) as RecipeItemProps[];
            } catch (err) {
                error('useRecipePageService', 'GetRecipes: Caught an exception.', (err as AxiosError).message);
                return [];
            }
        },
        [error]
    );

    const deleteRecipe = useCallback(
        async (recipeID: string) => {
            try {
                await APIServices.DELETE(`/recipe/${recipeID}`);
            } catch (err) {
                error('useRecipePageService', 'deleteRecipe: Caught an exception.', (err as AxiosError).message);
            }
        },
        [error]
    );

    const updateRecipe = useCallback(
        async (recipeID: string, recipeData: RecipeData) => {
            try {
                await APIServices.PUT(`/recipe/${recipeID}`, recipeData);
            } catch (err) {
                error('useRecipePageService', 'updateRecipe: Caught an exception.', (err as AxiosError).message);
            }
        },
        [error]
    );

    return { saveRecipe, getAllRecipes, deleteRecipe, getUserRecipes, updateRecipe };
};

export default useRecipePageService;

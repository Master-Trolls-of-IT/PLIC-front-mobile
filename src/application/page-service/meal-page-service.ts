import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { MealData } from '~/domain/interfaces/services/meal-data';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';

const useMealPageService = () => {
    const {
        LogsStore: { error }
    } = useStore();

    const saveMeal = async (mealData: MealData): Promise<MealItemProps> => {
        try {
            const response = await APIServices.POST<MealItemProps, MealData>('/meal', mealData);
            return response.data as MealItemProps;
        } catch (err) {
            error('useMealPageService', 'AddMeal : Caught an exception.', (err as AxiosError).message);
            return {} as MealItemProps;
        }
    };

    const getMeals = useCallback(
        async (email: string): Promise<MealItemProps[]> => {
            try {
                const response = await APIServices.GET<MealItemProps[]>(`/meal/${email}`);
                return (response.data ?? []) as MealItemProps[];
            } catch (err) {
                error('useMealPageService', 'GetMeals: Caught an exception.', (err as AxiosError).message);
                return [];
            }
        },
        [error]
    );

    return { saveMeal, getMeals };
};

export default useMealPageService;

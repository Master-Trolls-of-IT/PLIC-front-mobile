import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { MealData } from '~/domain/interfaces/services/meal-data';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';

const useMealPageService = () => {
    const {
        NavigationStore: { navigate },
        LogsStore: { error }
    } = useStore();

    const addMeal = async (mealData: MealData) => {
        try {
            APIServices.POST('/meal', mealData).then((response) => {
                if (response.status === 200) {
                    navigate(PagesEnum.MealPage);
                }
            });
        } catch (err) {
            error('useMealPageService', 'AddMeal : Caught an exception.', (err as AxiosError).message);
        }
    };

    const getMeals = useCallback(async (email: string): Promise<MealItemProps[]> => {
        try {
            console.log(111);
            const response = await APIServices.GET<MealItemProps[]>(`/meal/${email}`);
            return response.data as MealItemProps[];
        } catch (err) {
            error('useMealPageService', 'GetMeals: Caught an exception.', (err as AxiosError).message);
            return [];
        }
    }, []);

    return { addMeal, getMeals };
};

export default useMealPageService;

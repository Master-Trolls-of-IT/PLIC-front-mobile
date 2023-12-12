import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { MealData } from '~/domain/interfaces/services/meal-data';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import useMapConsumedProductResponse from '~/infrastructure/ui/shared/helper/useMapConsumedProductResponse';
import { ConsumedProduct } from '~/domain/interfaces/services/consumed-product';
import MealItem from '~/infrastructure/ui/shared/component/item/meal-item/meal-item';

const useMealPageService = () => {
    const {
        LogsStore: { error }
    } = useStore();

    const { mapResponse } = useMapConsumedProductResponse();
    const isEmpty = (obj: any) => {
        return Object.keys(obj).length === 0;
    };

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
                console.log([] as MealItemProps[]);
                return (isEmpty(response.data) ? [] : (response.data as MealItemProps[])) as MealItemProps[];
            } catch (err) {
                error('useMealPageService', 'GetMeals: Caught an exception.', (err as AxiosError).message);
                return [];
            }
        },
        [error]
    );

    const deleteMeal = useCallback(
        async (mealID: string) => {
            try {
                await APIServices.DELETE(`/meal/${mealID}`);
            } catch (err) {
                error('useMealPageService', 'deleteMeal: Caught an exception.', (err as AxiosError).message);
            }
        },
        [error]
    );

    const consumeMeal = useCallback(
        async (meal: MealItemProps) => {
            try {
                const response = await APIServices.POST<ConsumedProduct[], MealItemProps>('/meal/consumed', meal);
                return mapResponse(response.data) as ConsumedProductItemProps[];
            } catch (err) {
                error('useMealPageService', 'consumeMeal: Caught an exception.', (err as AxiosError).message);
                return null;
            }
        },
        [error, mapResponse]
    );

    return { saveMeal, getMeals, deleteMeal, consumeMeal };
};

export default useMealPageService;

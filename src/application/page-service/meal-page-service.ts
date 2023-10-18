import { AxiosError } from 'axios';
import { MealData } from '~/domain/interfaces/services/meal-data';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useMealPageService = () => {
    const {
        NavigationStore: { navigate },
        LogStore: { error }
    } = useStore();

    const addMeal = async (mealData: MealData) => {
        try {
            APIServices.POST('/meal', mealData).then((response) => {
                if (response.status === 200) {
                    navigate(PagesEnum.MealPage);
                }
            });
        } catch (err) {
            error('useMealPageService', 'Caught an exception', (err as AxiosError).message);
        }
    };

    return { addMeal };
};

export default useMealPageService;

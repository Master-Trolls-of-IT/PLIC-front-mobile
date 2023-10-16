import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';
import { useStore } from '~/infrastructure/controllers/store';
import { mealItemTags } from '~/domain/entities/constants/meal-page-meal-tags';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useMealPageData = () => {
    const {
        NavigationStore: { navigate },
        MealStore: { mealList }
    } = useStore();

    const onPressCreateMeal = () => {
        navigate(PagesEnum.CreateMealPage);
    };

    return {
        mealList,
        onPressCreateMeal
    };
};

export default useMealPageData;

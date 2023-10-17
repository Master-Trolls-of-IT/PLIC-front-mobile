import { useStore } from '~/infrastructure/controllers/store';
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

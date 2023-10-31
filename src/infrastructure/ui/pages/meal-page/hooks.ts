import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import useMealPageService from '~/application/page-service/meal-page-service';
import useEffectOnce from '~/infrastructure/ui/shared/helper/use-effect-once';

const useMealPageData = () => {
    const {
        NavigationStore: { navigate },
        MealStore: { mealList, setMealList },
        UserStore: { userData }
    } = useStore();

    const { getMeals } = useMealPageService();
    useEffectOnce(() => {
        getMeals(userData.email).then((mealItemProps) => {
            setMealList(mealItemProps);
        });
    });

    const onPressCreateMeal = () => {
        navigate(PagesEnum.CreateMealPage);
    };

    return {
        mealList,
        onPressCreateMeal
    };
};

export default useMealPageData;

import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useRecipePageData = () => {
    const {
        NavigationStore: { navigate },
        // TODO : what about that ??
        MealStore: { mealList }
    } = useStore();

    const onPressCreateRecipe = () => {
        navigate(PagesEnum.CreateRecipePage);
    };

    return {
        mealList,
        onPressCreateRecipe
    };
};

export default useRecipePageData;

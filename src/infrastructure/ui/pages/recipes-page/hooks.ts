import { useStore } from '~/infrastructure/controllers/store';
import { ActiveRecipeInfo } from '~/domain/interfaces/props/recipe-item/active-recipe-info';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import useRecipePageService from '~/application/page-service/recipe-page-service';
import useEffectOnce from '~/infrastructure/ui/shared/helper/use-effect-once';

const useRecipePageData = () => {
    const {
        NavigationStore: { navigate },
        RecipeStore: { recipeList, activeRecipe, setActiveRecipe, setRecipeList }
    } = useStore();
    const { getAllRecipes } = useRecipePageService();
    useEffectOnce(() => {
        getAllRecipes().then((recipeItemProps) => {
            setRecipeList(recipeItemProps);
        });
    });

    const onPressViewDetail = (recipe: ActiveRecipeInfo) => {
        setActiveRecipe(recipe);
    };

    const onPressGoBack = async () => {
        setActiveRecipe(undefined);
    };

    const toggleFavourite = () => {
        //TODO Faire la fonction favourite
    };

    const onPressCreateRecipe = () => {
        navigate(PagesEnum.CreateRecipePage);
    };

    const onPressShowMyRecipes = async () => {
        navigate(PagesEnum.RecipePage);
    };
    return {
        onPressViewDetail,
        activeRecipe,
        recipeList,
        toggleFavourite,
        onPressGoBack,
        onPressShowMyRecipes,
        onPressCreateRecipe
    };
};

export default useRecipePageData;

import { useStore } from '~/infrastructure/controllers/store';
import { ActiveRecipeInfo } from '~/domain/interfaces/props/recipe-item/active-recipe-info';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useMyRecipePageData = () => {
    const {
        NavigationStore: { navigate, goBack },
        RecipeStore: { recipeList, activeRecipe, setActiveRecipe },
        UserStore: { userData }
    } = useStore();

    const onPressViewDetail = (recipe: ActiveRecipeInfo) => {
        setActiveRecipe(recipe);
    };
    const onPressGoBack = async () => {
        setActiveRecipe(undefined);
    };

    const myRecipesList = recipeList.filter((recipe) => recipe.recipeItem.author === userData?.username);
    const toggleFavourite = () => {
        //TODO Faire la fonction favourite
    };

    const onPressCreateRecipe = () => {
        //TODO Faire ca
    };

    return {
        onPressViewDetail,
        activeRecipe,
        myRecipesList,
        toggleFavourite,
        onPressGoBack,
        onPressCreateRecipe,
        goBack
    };
};

export default useMyRecipePageData;

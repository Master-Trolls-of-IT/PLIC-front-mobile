import { ActiveRecipeInfo } from '~/domain/interfaces/props/recipe-item/active-recipe-info';

export type ActiveRecipeItemProps = {
    activeRecipe: ActiveRecipeInfo | undefined;
    toggleFavourite: () => void;
    goBack: () => void;
};

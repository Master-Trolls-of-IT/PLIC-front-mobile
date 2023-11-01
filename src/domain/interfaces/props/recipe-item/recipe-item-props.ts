import { RecipeInfo } from '~/domain/interfaces/props/recipe-item/recipe-item-info';

export type RecipeItemProps = {
    recipe: RecipeInfo;
    toggleFavourite: () => void;
    goBack: () => void;
};

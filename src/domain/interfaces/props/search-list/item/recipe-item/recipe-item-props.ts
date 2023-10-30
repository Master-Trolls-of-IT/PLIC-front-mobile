import { ProductNutrients } from '~/domain/interfaces/props/nutrients/product-nutrients';

export type RecipeItemProps = {
    id: string;
    name: string;
    score: number;
    ingredients: string[];
    recipe: string[];
    kcal: number;
    image?: string;
    author: string;
    style?: object;
    isFavourite: boolean;
};

import { RecipeItemTag } from '~/domain/interfaces/props/tags/recipe-item-tag';

export type ActiveRecipeInfo = {
    id: string;
    title: string;
    rating: number;
    duration: number;
    difficulty: string;
    score: number;
    ingredients: string[];
    author: string;
    steps: string[];
    tags: RecipeItemTag[];
    isFavourite: boolean;
    kcal: number;
    image?: string;
    style?: object;
};

import { RecipeItemTag } from '~/domain/interfaces/props/tags/recipe-item-tag';

export type RecipeInfo = {
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
    ecoScore: string;
    nutriscore: NutriScore;
    tags: RecipeItemTag[];
};

type NutriScore = {
    score: number;
    grade: string;
};

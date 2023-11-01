import { MealItemTag } from '~/domain/interfaces/props/tags/meal-item-tag';

export type ActiveRecipeInfo = {
    id: string;
    title: string;
    rating: number;
    numberOfRatings: number;
    duration: number;
    difficulty: string;
    score: number;
    ingredients: string[];
    author: string;
    steps: string[];
    tags: MealItemTag[];
    isFavourite: boolean;
    image?: string;
    kcal: number;
    style?: object;
};

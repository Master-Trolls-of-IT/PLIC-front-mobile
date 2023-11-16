import { MealItemTag } from '~/domain/interfaces/props/tags/meal-item-tag';

export type RecipeItemInfo = {
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
    kcal: number;
    image?: string;
};

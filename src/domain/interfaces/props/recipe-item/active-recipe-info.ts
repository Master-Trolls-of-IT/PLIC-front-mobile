import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';

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
    tags: ItemTag[];
    kcal: number;
    image?: string;
    style?: object;
};

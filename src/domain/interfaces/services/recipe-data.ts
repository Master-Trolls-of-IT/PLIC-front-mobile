import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';

export type RecipeData = {
    title: string;
    duration: number;
    email: string;
    ingredients: string[];
    steps: string[];
    tags: ItemTag[];
    difficulty: string;
};

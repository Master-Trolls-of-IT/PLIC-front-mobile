import {RecipeItemTag} from "~/domain/interfaces/props/tags/recipe-item-tag";

export type RecipeData = {
    title: string;
    duration: number;
    email: string;
    ingredients: string[];
    tags: RecipeItemTag[];
};
import { MealItemTag } from '~/domain/interfaces/props/meal-item-tag';

export type MealItemProps = {
    title: string;
    score: number;
    numberOfProducts: number;
    ingredients: string[];
    mealTags: MealItemTag[];
    isFavourite: boolean;
    style?: object;
};

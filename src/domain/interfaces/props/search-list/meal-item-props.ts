import { MealItemTag } from '~/domain/interfaces/props/meal-item-tag';

export type MealItemProps = {
    id: string;
    title: string;
    score: number;
    numberOfProducts: number;
    ingredients: string[];
    mealTags: MealItemTag[];
    isFavourite: boolean;
    style?: object;
};

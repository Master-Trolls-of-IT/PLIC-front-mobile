import { MealItemTag } from '~/domain/interfaces/props/tags/meal-item-tag';
import { ProductInfo } from '~/domain/interfaces/props/nutrients/product-nutrients';

export type MealItemProps = {
    id: string;
    title: string;
    email: string;
    score: number;
    numberOfProducts: number;
    products: ProductInfo[];
    tags: MealItemTag[];
    isFavourite: boolean;
    style?: object;
};

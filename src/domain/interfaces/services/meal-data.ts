import { MealItemTag } from '~/domain/interfaces/props/tags/meal-item-tag';

export type MealData = {
    title: string;
    email: string;
    products: ProductQuantity[];
    tags: MealItemTag[];
};

export type ProductQuantity = {
    barcode: string;
    quantity: string;
};

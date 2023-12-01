import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';

export type MealData = {
    title: string;
    email: string;
    products: ProductQuantity[];
    tags: ItemTag[];
};

export type ProductQuantity = {
    barcode: string;
    quantity: string;
};

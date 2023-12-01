import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';
import { ProductInfo } from '~/domain/interfaces/props/nutrients/product-nutrients';

export type MealItemProps = {
    id: string;
    title: string;
    email: string;
    score: number;
    numberOfProducts: number;
    products: ProductInfo[];
    tags: ItemTag[];
    isFavourite: boolean;
    style?: object;
};

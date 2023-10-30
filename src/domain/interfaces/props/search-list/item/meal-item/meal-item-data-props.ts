import { ProductInfo } from '~/domain/interfaces/props/nutrients/product-nutrients';

export type MealItemDataProps = {
    id: string;
    isFavourite: boolean;
    score: number;
    products: ProductInfo[];
};

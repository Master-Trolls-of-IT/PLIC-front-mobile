import { ProductNutrients } from '~/domain/interfaces/props/nutrients/product-nutrients';

export type MealProductsItemProps = {
    id: string;
    barcode: string;
    name: string;
    brand: string;
    score: number;
    consumedQuantity: string;
    image?: string;
    data: ProductNutrients;
    style?: object;
    serving: number;
    iswater: boolean;
};

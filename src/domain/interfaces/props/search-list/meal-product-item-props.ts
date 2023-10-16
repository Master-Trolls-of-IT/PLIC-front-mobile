import { ProductNutrients } from '~/domain/interfaces/services/product-nutrients';

export type MealProductItemProps = {
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
};

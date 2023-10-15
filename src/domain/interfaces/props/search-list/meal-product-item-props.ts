import { ProductNutrients } from '~/domain/interfaces/services/product-nutrients';

export type MealProductItemProps = {
    id: string;
    name: string;
    brand: string;
    score: number;
    consumedQuantity: number;
    image?: string;
    data: ProductNutrients;
    style?: object;
};

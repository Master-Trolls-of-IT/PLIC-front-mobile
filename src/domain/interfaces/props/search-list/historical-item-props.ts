import { ProductNutrients } from '~/domain/interfaces/services/product-nutrients';

export type HistoricalItemProps = {
    id: string;
    barcode: string;
    name: string;
    brand: string;
    score: number;
    image?: string;
    isFavourite: boolean;
    data: ProductNutrients;
    style?: object;
};

import { ProductNutrients } from '~/domain/interfaces/services/product-nutrients';

export type HistoricalItemProps = {
    barcode: string;
    name: string;
    brand: string;
    score: number;
    image?: string;
    isFavourite: boolean;
    toggleFavourite: () => void;
    data: ProductNutrients;
    style?: object;
};

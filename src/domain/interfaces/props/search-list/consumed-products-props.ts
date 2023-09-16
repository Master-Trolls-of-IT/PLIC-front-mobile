import { ProductNutrients } from '~/domain/interfaces/services/product-nutrients';

export type ConsumedProductItemProps = {
    id: string;
    name: string;
    description: string;
    score: number;
    image?: string;
    isFavourite: boolean;
    toggleFavourite: () => void;
    data: ProductNutrients;
    style?: object;
};
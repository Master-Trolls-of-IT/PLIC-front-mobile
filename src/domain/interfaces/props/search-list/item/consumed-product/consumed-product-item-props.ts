import { ProductNutrients } from '~/domain/interfaces/props/nutrients/product-nutrients';

export type ConsumedProductItemProps = {
    id: string;
    name: string;
    barcode: string;
    brand: string;
    score: number;
    consumedQuantity: number;
    image?: string;
    isFavourite: boolean;
    toggleFavourite: () => void;
    data: ProductNutrients;
    isWater: boolean;
    serving: number;
    style?: object;
};

import { AllNutritionalIntakes } from '~/domain/interfaces/props/all-nutritional-intakes';

export type HistoricalItemProps = {
    name: string;
    description: string;
    score: number;
    image?: string;
    isFavourite: boolean;
    toggleFavourite: () => void;
    data: AllNutritionalIntakes;
    style?: object;
};

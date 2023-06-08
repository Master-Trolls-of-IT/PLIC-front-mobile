import { AllNutritionalIntakes } from '~/domain/interfaces/props/all-nutritional-intakes';

export type HistoricalCardProps = {
    name: string;
    description: string;
    score: number;
    image?: File;
    isFavourite: boolean;
    toggleFavourite: () => void;
    data: AllNutritionalIntakes;
};

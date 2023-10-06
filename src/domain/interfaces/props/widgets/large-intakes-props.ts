import { NutrientData } from '~/domain/interfaces/props/nutrient-data';

export type LargeIntakesProps = {
    energy: NutrientData;
    firstNutrient: NutrientData;
    secondNutrient: NutrientData;
    thirdNutrient: NutrientData;
};

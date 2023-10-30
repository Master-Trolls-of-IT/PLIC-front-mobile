import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients/nutrients-enum';

export type NutrientData = {
    nutrientType: NutrientsEnum;
    earned: number;
    goal: number;
};

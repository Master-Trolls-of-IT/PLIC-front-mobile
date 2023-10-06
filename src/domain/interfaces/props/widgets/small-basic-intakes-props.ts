import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';

export type SmallBasicIntakesProps = {
    nutrientType: NutrientsEnum;
    earned: number;
    goal: number;
};

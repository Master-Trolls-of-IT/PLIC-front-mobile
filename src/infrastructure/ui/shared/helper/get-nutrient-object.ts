import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';

const getNutrientObject = (
    nutrient: NutrientsEnum,
    dailyNutrientsEarned: DailyNutrientsType,
    dailyNutrientsGoal: DailyNutrientsType
): NutrientData => {
    switch (nutrient) {
        case NutrientsEnum.Lipid:
            return {
                nutrientType: NutrientsEnum.Lipid,
                earned: dailyNutrientsEarned.lipid,
                goal: dailyNutrientsGoal.lipid
            };
        case NutrientsEnum.Fiber:
            return {
                nutrientType: NutrientsEnum.Fiber,
                earned: dailyNutrientsEarned.fiber,
                goal: dailyNutrientsGoal.fiber
            };
        case NutrientsEnum.FattyAcid:
            return {
                nutrientType: NutrientsEnum.FattyAcid,
                earned: dailyNutrientsEarned.fattyAcid,
                goal: dailyNutrientsGoal.fattyAcid
            };
        case NutrientsEnum.Salt:
            return {
                nutrientType: NutrientsEnum.Salt,
                earned: dailyNutrientsEarned.salt,
                goal: dailyNutrientsGoal.salt
            };
        case NutrientsEnum.Carbohydrate:
            return {
                nutrientType: NutrientsEnum.Carbohydrate,
                earned: dailyNutrientsEarned.carbohydrate,
                goal: dailyNutrientsGoal.carbohydrate
            };
        case NutrientsEnum.Sugar:
            return {
                nutrientType: NutrientsEnum.Sugar,
                earned: dailyNutrientsEarned.sugar,
                goal: dailyNutrientsGoal.sugar
            };
        case NutrientsEnum.Protein:
            return {
                nutrientType: NutrientsEnum.Protein,
                earned: dailyNutrientsEarned.protein,
                goal: dailyNutrientsGoal.protein
            };
    }
};

export default getNutrientObject;

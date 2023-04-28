import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { NutrientsUnitEnum } from '~/domain/interfaces/enum/nutrients-unit-enum';

const GetUnitFromNutrient = (nutrientType: NutrientsEnum) => {
    switch (nutrientType) {
        case NutrientsEnum.Energy:
            return NutrientsUnitEnum.KiloCalorie;
        default:
            return NutrientsUnitEnum.Gramme;
    }
};

export default GetUnitFromNutrient;

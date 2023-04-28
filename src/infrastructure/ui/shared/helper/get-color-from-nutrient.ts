import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';

const GetColorFromNutrient = (nutrientType: NutrientsEnum) => {
    switch (nutrientType) {
        case NutrientsEnum.Sugar:
        case NutrientsEnum.Carbohydrate:
            return '#FF000099';
        case NutrientsEnum.FattyAcid:
            return '#E0E42099';
        case NutrientsEnum.Lipid:
            return '#0F900C99';
        case NutrientsEnum.Salt:
        case NutrientsEnum.Protein:
            return '#05128399';
        case NutrientsEnum.Energy:
        case NutrientsEnum.Fiber:
        default:
            return '#0F900C99';
    }
};

export default GetColorFromNutrient;

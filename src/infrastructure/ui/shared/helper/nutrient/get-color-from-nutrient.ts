import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients/nutrients-enum';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GetColorFromNutrient = (nutrientType: NutrientsEnum) => {
    switch (nutrientType) {
        case NutrientsEnum.Sugar:
        case NutrientsEnum.Carbohydrate:
            return ColorEnum.SlightlyOpaqueDarkRed;
        case NutrientsEnum.FattyAcid:
            return ColorEnum.ClassicYellowWidget;
        case NutrientsEnum.Lipid:
            return ColorEnum.SlightlyOpaqueDarkGreen;
        case NutrientsEnum.Salt:
        case NutrientsEnum.Protein:
            return ColorEnum.SlightlyOpaqueBlue;
        case NutrientsEnum.Energy:
        case NutrientsEnum.Fiber:
        default:
            return ColorEnum.SlightlyOpaqueDarkGreen;
    }
};

export default GetColorFromNutrient;

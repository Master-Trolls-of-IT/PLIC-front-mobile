import { useEffect, useState } from 'react';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { NutrientsUnitEnum } from '~/domain/interfaces/enum/nutrients-unit-enum';
import GetColorFromNutrient from '~/infrastructure/ui/shared/helper/get-color-from-nutrient';
import GetUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';
import SmallBasicIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-basic/small-basic-intakes-style';

const useSmallBasicIntakesData = (nutrientType: NutrientsEnum) => {
    const [unit, setUnit] = useState(NutrientsUnitEnum.Gramme);
    const [color, setColor] = useState('#0F900C99');

    useEffect(() => {
        setUnit(GetUnitFromNutrient(nutrientType));
        setColor(GetColorFromNutrient(nutrientType));
    }, [nutrientType]);

    const pageStyle = SmallBasicIntakesStyle(color);

    return {
        unit,
        color,
        pageStyle
    };
};

export default useSmallBasicIntakesData;

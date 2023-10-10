import { useEffect, useState } from 'react';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { NutrientsUnitEnum } from '~/domain/interfaces/enum/nutrients-unit-enum';
import GetColorFromNutrient from '~/infrastructure/ui/shared/helper/get-color-from-nutrient';
import GetUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';
import SmallBasicIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-basic/small-basic-intakes-style';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import getNutrientObject from '~/infrastructure/ui/shared/helper/get-nutrient-object';
import { useStore } from '~/infrastructure/controllers/store';

const useSmallBasicIntakesData = (nutrientType: NutrientsEnum) => {
    const [unit, setUnit] = useState(NutrientsUnitEnum.Gramme);
    const [color, setColor] = useState(ColorEnum.SlightlyOpaqueDarkGreen);
    const {
        DataStore: { dailyNutrientsEarned, dailyNutrientsGoal }
    } = useStore();

    const nutrientObject = getNutrientObject(nutrientType, dailyNutrientsEarned, dailyNutrientsGoal);

    useEffect(() => {
        setUnit(GetUnitFromNutrient(nutrientType));
        setColor(GetColorFromNutrient(nutrientType));
    }, [nutrientType]);

    const pageStyle = SmallBasicIntakesStyle(color);

    return {
        unit,
        color,
        pageStyle,
        nutrientObject
    };
};

export default useSmallBasicIntakesData;

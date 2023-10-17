import { useEffect, useState } from 'react';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients/nutrients-enum';
import { NutrientsUnitEnum } from '~/domain/interfaces/enum/nutrients/nutrients-unit-enum';
import GetColorFromNutrient from '~/infrastructure/ui/shared/helper/nutrient/get-color-from-nutrient';
import GetUnitFromNutrient from '~/infrastructure/ui/shared/helper/nutrient/get-unit-from-nutrient';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import getNutrientObject from '~/infrastructure/ui/shared/helper/nutrient/get-nutrient-object';
import { useStore } from '~/infrastructure/controllers/store';

const useWidgetSmallSingleIntakesData = (nutrientType: NutrientsEnum) => {
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

    const nutrientName = nutrientType == NutrientsEnum.FattyAcid ? 'A.G.S.' : nutrientType;

    return {
        unit,
        color,
        nutrientObject,
        nutrientName
    };
};

export default useWidgetSmallSingleIntakesData;

import { useMemo, useState } from 'react';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { useStore } from '~/infrastructure/controllers/store';
import getNutrientObject from '~/infrastructure/ui/shared/helper/get-nutrient-object';

const useSmallMultipleData = (
    firstNutrient: NutrientsEnum,
    secondNutrient: NutrientsEnum,
    thirdNutrient: NutrientsEnum
) => {
    const {
        DataStore: { dailyNutrientsGoal, dailyNutrientsEarned }
    } = useStore();

    const firstNutrientObject = getNutrientObject(firstNutrient, dailyNutrientsEarned, dailyNutrientsGoal);
    const secondNutrientObject = getNutrientObject(secondNutrient, dailyNutrientsEarned, dailyNutrientsGoal);
    const thirdNutrientObject = getNutrientObject(thirdNutrient, dailyNutrientsEarned, dailyNutrientsGoal);

    const [firstPercentage, setFirstPercentage] = useState(firstNutrientObject.earned / firstNutrientObject.goal);
    const [secondPercentage, setSecondPercentage] = useState(secondNutrientObject.earned / secondNutrientObject.goal);
    const [thirdPercentage, setThirdPercentage] = useState(thirdNutrientObject.earned / thirdNutrientObject.goal);

    useMemo(
        () =>
            setFirstPercentage(
                firstNutrientObject.earned / (firstNutrientObject.goal === 0 ? 1 : firstNutrientObject.goal)
            ),
        [firstNutrientObject.earned, firstNutrientObject.goal]
    );

    useMemo(
        () =>
            setSecondPercentage(
                secondNutrientObject.earned / (secondNutrientObject.goal === 0 ? 1 : secondNutrientObject.goal)
            ),
        [secondNutrientObject.earned, secondNutrientObject.goal]
    );

    useMemo(
        () =>
            setThirdPercentage(
                thirdNutrientObject.earned / (thirdNutrientObject.goal === 0 ? 1 : thirdNutrientObject.goal)
            ),
        [thirdNutrientObject.earned, thirdNutrientObject.goal]
    );

    return {
        firstPercentage,
        secondPercentage,
        thirdPercentage,
        firstNutrientObject,
        secondNutrientObject,
        thirdNutrientObject
    };
};

export default useSmallMultipleData;

import { useMemo, useState } from 'react';
import GetColorByPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { useStore } from '~/infrastructure/controllers/store';
import getNutrientObject from '~/infrastructure/ui/shared/helper/get-nutrient-object';

const useWidgetLargeIntakesData = (
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
    const energy = getNutrientObject(NutrientsEnum.Energy, dailyNutrientsEarned, dailyNutrientsGoal);

    const [firstPercentage, setFirstPercentage] = useState(firstNutrientObject.earned / firstNutrientObject.goal);
    const [secondPercentage, setSecondPercentage] = useState(secondNutrientObject.earned / secondNutrientObject.goal);
    const [thirdPercentage, setThirdPercentage] = useState(thirdNutrientObject.earned / thirdNutrientObject.goal);
    const [energyColor, setEnergyColor] = useState(GetColorByPercentage((energy.earned * 100) / energy.goal));

    const energyPercentage = (energy.earned * 100) / (energy.goal === 0 ? 1 : energy.goal);

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

    useMemo(() => {
        setEnergyColor(GetColorByPercentage(energyPercentage));
    }, [energyPercentage]);

    return {
        energyColor,
        energyPercentage,
        firstPercentage,
        secondPercentage,
        thirdPercentage,
        energy,
        firstNutrientObject,
        secondNutrientObject,
        thirdNutrientObject
    };
};

export default useWidgetLargeIntakesData;

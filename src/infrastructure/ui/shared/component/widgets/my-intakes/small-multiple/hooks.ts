import { useMemo, useState } from 'react';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';

const useSmallMultipleData = (
    firstNutrient: NutrientData,
    secondNutrient: NutrientData,
    thirdNutrient: NutrientData
) => {
    const [firstPercentage, setFirstPercentage] = useState(firstNutrient.earned / firstNutrient.goal);
    const [secondPercentage, setSecondPercentage] = useState(secondNutrient.earned / secondNutrient.goal);
    const [thirdPercentage, setThirdPercentage] = useState(thirdNutrient.earned / thirdNutrient.goal);

    useMemo(
        () => setFirstPercentage(firstNutrient.earned / firstNutrient.goal),
        [firstNutrient.earned, firstNutrient.goal]
    );

    useMemo(
        () => setSecondPercentage(secondNutrient.earned / secondNutrient.goal),
        [secondNutrient.earned, secondNutrient.goal]
    );

    useMemo(
        () => setThirdPercentage(thirdNutrient.earned / thirdNutrient.goal),
        [thirdNutrient.earned, thirdNutrient.goal]
    );

    return { firstPercentage, secondPercentage, thirdPercentage };
};

export default useSmallMultipleData;

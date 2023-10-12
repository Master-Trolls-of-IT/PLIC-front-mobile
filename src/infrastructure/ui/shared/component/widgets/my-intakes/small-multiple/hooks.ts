import { useMemo, useState } from 'react';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';

const useWidgetSmallMultipleData = (
    firstNutrient: NutrientData,
    secondNutrient: NutrientData,
    thirdNutrient: NutrientData
) => {
    const [firstPercentage, setFirstPercentage] = useState(
        firstNutrient.earned / (firstNutrient.goal === 0 ? 1 : firstNutrient.goal)
    );
    const [secondPercentage, setSecondPercentage] = useState(
        secondNutrient.earned / (secondNutrient.goal === 0 ? 1 : secondNutrient.goal)
    );
    const [thirdPercentage, setThirdPercentage] = useState(
        thirdNutrient.earned / (thirdNutrient.goal === 0 ? 1 : thirdNutrient.goal)
    );

    useMemo(
        () => setFirstPercentage(firstNutrient.earned / (firstNutrient.goal === 0 ? 1 : firstNutrient.goal)),
        [firstNutrient.earned, firstNutrient.goal]
    );

    useMemo(
        () => setSecondPercentage(secondNutrient.earned / (secondNutrient.goal === 0 ? 1 : secondNutrient.goal)),
        [secondNutrient.earned, secondNutrient.goal]
    );

    useMemo(
        () => setThirdPercentage(thirdNutrient.earned / (thirdNutrient.goal === 0 ? 1 : thirdNutrient.goal)),
        [thirdNutrient.earned, thirdNutrient.goal]
    );

    return { firstPercentage, secondPercentage, thirdPercentage };
};

export default useWidgetSmallMultipleData;

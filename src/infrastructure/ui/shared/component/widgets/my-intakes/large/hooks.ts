import { useMemo, useState } from 'react';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import GetColorByPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';

const useLargeIntakesData = (
    energy: NutrientData,
    firstNutrient: NutrientData,
    secondNutrient: NutrientData,
    thirdNutrient: NutrientData
) => {
    const [firstPercentage, setFirstPercentage] = useState(firstNutrient.earned / firstNutrient.goal);
    const [secondPercentage, setSecondPercentage] = useState(secondNutrient.earned / secondNutrient.goal);
    const [thirdPercentage, setThirdPercentage] = useState(thirdNutrient.earned / thirdNutrient.goal);
    const [energyColor, setEnergyColor] = useState(GetColorByPercentage((energy.earned * 100) / energy.goal));

    const energyPercentage = (energy.earned * 100) / (energy.goal === 0 ? 1 : energy.goal);

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

    useMemo(() => {
        setEnergyColor(GetColorByPercentage(energyPercentage));
    }, [energyPercentage]);

    return { energyColor, energyPercentage, firstPercentage, secondPercentage, thirdPercentage };
};

export default useLargeIntakesData;

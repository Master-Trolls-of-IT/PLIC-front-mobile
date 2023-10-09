import { useMemo, useState } from 'react';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import GetColorByPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';

const useWidgetCalorieData = (energy: NutrientData) => {
    const [energyColor, setEnergyColor] = useState(GetColorByPercentage((energy.earned * 100) / energy.goal));
    const energyPercentage = (energy.earned * 100) / (energy.goal === 0 ? 1 : energy.goal);

    useMemo(() => {
        setEnergyColor(GetColorByPercentage(energyPercentage));
    }, [energyPercentage]);

    return {
        energyColor,
        energyPercentage
    };
};
export default useWidgetCalorieData;

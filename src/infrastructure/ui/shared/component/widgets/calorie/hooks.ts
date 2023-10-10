import { useMemo, useState } from 'react';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import GetColorByPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import { useStore } from '~/infrastructure/controllers/store';

const useWidgetCalorieData = () => {
    const {
        DataStore: { dayEnergy }
    } = useStore();

    const [energyColor, setEnergyColor] = useState(GetColorByPercentage((dayEnergy.earned * 100) / dayEnergy.goal));
    const energyPercentage = (dayEnergy.earned * 100) / (dayEnergy.goal === 0 ? 1 : dayEnergy.goal);

    useMemo(() => {
        setEnergyColor(GetColorByPercentage(energyPercentage));
    }, [energyPercentage]);

    return {
        energyColor,
        energyPercentage,
        earned: dayEnergy.earned,
        goal: dayEnergy.goal
    };
};
export default useWidgetCalorieData;

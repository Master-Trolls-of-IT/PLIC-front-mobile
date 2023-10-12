import { useMemo, useState } from 'react';
import GetColorByPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import { useStore } from '~/infrastructure/controllers/store';

const useWidgetEnergyData = () => {
    const {
        DataStore: {
            dayEnergy,
            dailyNutrientsGoal: { energy: energyGoal }
        }
    } = useStore();

    const [energyColor, setEnergyColor] = useState(GetColorByPercentage((dayEnergy * 100) / energyGoal));
    const energyPercentage = (dayEnergy * 100) / (energyGoal === 0 ? 1 : energyGoal);

    useMemo(() => {
        setEnergyColor(GetColorByPercentage(energyPercentage));
    }, [energyPercentage]);

    return {
        energyColor,
        energyPercentage,
        earned: dayEnergy,
        goal: energyGoal
    };
};
export default useWidgetEnergyData;

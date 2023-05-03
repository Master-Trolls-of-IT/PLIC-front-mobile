import { useMemo, useState } from 'react';
import SmallMultipleIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/small-multiple-intakes-style.';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import getColorFromNutrient from '~/infrastructure/ui/shared/helper/get-color-from-nutrient';

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

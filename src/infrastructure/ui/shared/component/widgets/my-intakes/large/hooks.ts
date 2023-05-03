import LargeIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes-style.';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import getColorFromNutrient from '~/infrastructure/ui/shared/helper/get-color-from-nutrient';

const useLargeIntakesData = (nutrient1: NutrientData, nutrient2: NutrientData, nutrient3: NutrientData) => {
    const pageStyle = LargeIntakesStyle(
        getColorFromNutrient(nutrient1.nutrientType),
        getColorFromNutrient(nutrient2.nutrientType),
        getColorFromNutrient(nutrient3.nutrientType)
    );

    return { pageStyle };
};

export default useLargeIntakesData;

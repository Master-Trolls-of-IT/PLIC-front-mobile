import SmallMultipleIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/small-multiple-intakes-style.';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import getColorFromNutrient from '~/infrastructure/ui/shared/helper/get-color-from-nutrient';

const useSmallMultipleData = (nutrient1: NutrientData, nutrient2: NutrientData, nutrient3: NutrientData) => {
    const color1 = getColorFromNutrient(nutrient1.nutrientType);
    const color2 = getColorFromNutrient(nutrient2.nutrientType);
    const color3 = getColorFromNutrient(nutrient3.nutrientType);
    const pageStyle = SmallMultipleIntakesStyle(color1, color2, color3);

    return { pageStyle };
};

export default useSmallMultipleData;

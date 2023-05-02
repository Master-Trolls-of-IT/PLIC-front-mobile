import { useEffect, useState } from 'react';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { NutrientsUnitEnum } from '~/domain/interfaces/enum/nutrients-unit-enum';
import GetColorFromNutrient from '~/infrastructure/ui/shared/helper/get-color-from-nutrient';
import GetUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';
import SmallBasicIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-basic/small-basic-intakes-style.';
import EcoScoreStyle from './widget-ecoscore-style';

const useEcoScoreData = () => {
    const [color, setColor] = useState('#84CF3D99');

    const pageStyle = EcoScoreStyle(color);

    return {
        color,
        pageStyle
    };
};

export default useEcoScoreData;

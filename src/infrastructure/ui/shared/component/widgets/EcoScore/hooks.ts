import { useState } from 'react';
import EcoScoreStyle from './widget-ecoscore-style';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
const colorSelector = (percentage: number): string => {
    let color: ColorEnum;
    if (0 <= percentage && percentage < 25) {
        color = ColorEnum.ClassicRedWidget;
    } else if (25 <= percentage && percentage < 50) {
        color = ColorEnum.ClassicOrangeWidget;
    } else if (50 <= percentage && percentage < 75) {
        color = ColorEnum.ClassicYellowWidget;
    } else if (75 <= percentage && percentage <= 100) {
        color = ColorEnum.ClassicGreen;
    } else {
        throw new Error('Percentage range should be between 0 and 100 !');
    }
    return color;
};

const useEcoScoreData = (percentage: number) => {
    //TODO : retrieve percentage and pass it to colorSelector function
    const [color, setColor] = useState(colorSelector(percentage));
    const pageStyle = EcoScoreStyle(color);

    return {
        color,
        pageStyle
    };
};

export default useEcoScoreData;

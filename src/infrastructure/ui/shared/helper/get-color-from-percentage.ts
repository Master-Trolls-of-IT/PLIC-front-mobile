import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GetColorByPercentage = (percentage: number): string => {
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

export default GetColorByPercentage;

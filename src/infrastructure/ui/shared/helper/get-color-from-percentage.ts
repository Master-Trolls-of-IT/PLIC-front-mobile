import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GetColorByPercentage = (percentage: number): ColorEnum => {
    switch (true) {
        case percentage < 25:
            return ColorEnum.ClassicRedWidget;
        case percentage < 50:
            return ColorEnum.ClassicOrangeWidget;
        case percentage < 75:
            return ColorEnum.ClassicYellowWidget;
        case percentage < 110:
            return ColorEnum.ClassicGreen;
        default:
            return ColorEnum.ClassicRedWidget;
    }
};

export default GetColorByPercentage;

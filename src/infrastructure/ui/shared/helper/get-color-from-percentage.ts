import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GetColorByPercentage = (percentage: number): ColorEnum => {
    switch (true) {
        case percentage < 25:
            return ColorEnum.ClassicRedWidget;
        case percentage < 50:
            return ColorEnum.ClassicOrangeWidget;
        case percentage < 75:
            return ColorEnum.ClassicYellowWidget;
        default:
            return ColorEnum.ClassicGreen;
    }
};

export default GetColorByPercentage;

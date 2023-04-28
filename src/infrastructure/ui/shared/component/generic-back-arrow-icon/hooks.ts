import { Dimensions } from 'react-native';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useGenericBackArrowIconData = (navigation: any, previousPage: PagesEnum) => {
    const asset = require('~/domain/entities/assets/icon/icon-back-arrow.svg');

    const newHeight: number = Dimensions.get('screen').height / 18;
    const newWidth: number = Dimensions.get('screen').width;

    const onPressBackArrow = () => {
        navigation.navigate(previousPage);
    };

    return { asset, newHeight, newWidth, onPressBackArrow };
};

export default useGenericBackArrowIconData;

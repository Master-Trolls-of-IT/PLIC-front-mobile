import { Dimensions } from 'react-native';

const useGenericBackArrowIconData = (navigation: any) => {
    const asset = require('~/domain/entities/assets/icon/icon-back-arrow.svg');

    const newHeight: number = Dimensions.get('screen').height / 18;
    const newWidth: number = Dimensions.get('screen').width;

    const onPressBackArrow = () => {
        navigation.goBack();
    };

    return { asset, newHeight, newWidth, onPressBackArrow };
};

export default useGenericBackArrowIconData;

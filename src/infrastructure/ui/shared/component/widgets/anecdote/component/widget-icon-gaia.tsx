import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

const WidgetIconGaia = () => {
    const asset = require('~/domain/entities/assets/logo/icon-widget-gaia.svg');
    const newWidth = Dimensions.get('screen').width / 10;
    const newHeight = Dimensions.get('screen').width / 10;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth}></CustomSvg>;
};

export default WidgetIconGaia;

import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const StartUpPageLargeClassicLogo = () => {
    const asset = require('~/domain/entities/assets/logo/logo-large-classic.svg');

    const newHeight: number = Dimensions.get('screen').height / 4;
    const newWidth: number = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default StartUpPageLargeClassicLogo;

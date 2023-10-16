import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

const StartUpPageBlobsBottom = () => {
    const asset = require('~/domain/entities/assets/startup-page/startup-page-blobs-bottom.svg');

    const newHeight: number = Dimensions.get('screen').height / 4;
    const newWidth: number = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default StartUpPageBlobsBottom;

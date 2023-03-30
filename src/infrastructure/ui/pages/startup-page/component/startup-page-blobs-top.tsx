import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/pages/shared/custom-svg';

const StartupPageBlobsTop = () => {
    const asset = require('~/domain/entities/assets/startup-page/startup-page-blobs-top.svg');

    const newHeight: number = Dimensions.get('screen').height / 4;
    const newWidth: number = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default StartupPageBlobsTop;

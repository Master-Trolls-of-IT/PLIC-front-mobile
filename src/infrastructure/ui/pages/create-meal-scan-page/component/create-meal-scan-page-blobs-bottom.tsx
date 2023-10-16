import { Dimensions } from 'react-native';
import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const CreateMealScanPageBlobsBottom = () => {
    const asset = require('~/domain/entities/assets/login-page/login-page-blobs-bottom.svg');

    const newHeight = Dimensions.get('screen').height / 4;
    const newWidth = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default CreateMealScanPageBlobsBottom;

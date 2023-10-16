import { Dimensions } from 'react-native';
import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

const CreateMealScanPageBlobsTop = () => {
    const asset = require('~/domain/entities/assets/scan-page/scan-page-blobs-top.svg');

    const newHeight: number = Dimensions.get('screen').height / 4;
    const newWidth: number = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default CreateMealScanPageBlobsTop;

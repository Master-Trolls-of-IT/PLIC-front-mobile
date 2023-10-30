import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

const MealPageBlobsTop = () => {
    const asset = require('~/domain/entities/assets/historical-page/historical-page-blobs-top.svg');

    const newHeight: number = Dimensions.get('screen').height / 4;
    const newWidth: number = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} style={{ position: 'absolute' }} height={newHeight} width={newWidth} />;
};

export default MealPageBlobsTop;

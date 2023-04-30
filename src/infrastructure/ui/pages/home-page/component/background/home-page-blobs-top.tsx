import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import React from 'react';

const HomePageBlobsTop = () => {
    const asset = require('~/domain/entities/assets/home-page/home-page-blobs.svg');

    const newWidth = Dimensions.get('screen').width;
    const newHeight = Dimensions.get('screen').height / 5;
    return <CustomSvg asset={asset} height={newHeight} width={newWidth}></CustomSvg>;
};

export default HomePageBlobsTop;

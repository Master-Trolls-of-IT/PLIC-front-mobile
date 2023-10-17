import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

const HomePageBlobsTop = () => {
    const asset = require('~/domain/entities/assets/home-page/home-page-blobs-top.svg');

    const newWidth = Dimensions.get('screen').width;
    const newHeight = Dimensions.get('screen').height / 5;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default HomePageBlobsTop;

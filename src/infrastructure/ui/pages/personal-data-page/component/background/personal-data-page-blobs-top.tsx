import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const PersonalDataPageBlobsTop = () => {
    const asset = require('~/domain/entities/assets/sign-up-page/sign-up-page-blobs-top.svg');

    const newHeight: number = Dimensions.get('screen').height / 4;
    const newWidth: number = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default PersonalDataPageBlobsTop;

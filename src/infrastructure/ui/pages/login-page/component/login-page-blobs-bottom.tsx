import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/pages/shared/custom-svg';

const LoginPageBlobsBottom = () => {
    const asset = require('~/domain/entities/assets/login-page/login-page-blobs-bottom.svg');

    const newHeight = Dimensions.get('screen').height / 4;
    const newWidth = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default LoginPageBlobsBottom;

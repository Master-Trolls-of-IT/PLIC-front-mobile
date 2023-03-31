import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/pages/shared/component/custom-svg';

const LoginPageBlobsTop = () => {
    const asset = require('~/domain/entities/assets/login-page/login-page-blobs-top.svg');

    const newHeight: number = Dimensions.get('screen').height / 4;
    const newWidth: number = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default LoginPageBlobsTop;

import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/pages/shared/custom-svg';
import loginPageStyle from '~/infrastructure/ui/pages/login-page/login-page-style';

const LoginPageTreeClassicLogo = () => {
    const asset = require('~/domain/entities/assets/logo/tree-classic-logo.svg');

    const newHeight = Dimensions.get('screen').height / 2.5;
    const newWidth = Dimensions.get('screen').height / 3;

    return <CustomSvg asset={asset} style={loginPageStyle.tree} width={newWidth} height={newHeight} />;
};

export default LoginPageTreeClassicLogo;

import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import PersonalDataPageStyle from '~/infrastructure/ui/pages/personal-data-page/personal-data-page-style';

const PersonalDataPageTreeClassicLogo = () => {
    const asset = require('~/domain/entities/assets/logo/tree-classic-logo.svg');

    const newHeight = Dimensions.get('screen').height / 2.4;
    const newWidth = Dimensions.get('screen').height / 3;

    return <CustomSvg asset={asset} style={PersonalDataPageStyle.tree} width={newWidth} height={newHeight} />;
};

export default PersonalDataPageTreeClassicLogo;

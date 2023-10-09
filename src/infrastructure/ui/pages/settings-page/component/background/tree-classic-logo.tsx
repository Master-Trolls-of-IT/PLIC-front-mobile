import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import SettingsPageStyle from '~/infrastructure/ui/pages/settings-page/settings-page-style';

const SettingsPageTreeClassicLogo = () => {
    const asset = require('~/domain/entities/assets/logo/tree-classic-logo.svg');

    const newHeight = Dimensions.get('screen').height / 2.4;
    const newWidth = Dimensions.get('screen').height / 3;

    return <CustomSvg asset={asset} style={SettingsPageStyle.tree} width={newWidth} height={newHeight} />;
};

export default SettingsPageTreeClassicLogo;

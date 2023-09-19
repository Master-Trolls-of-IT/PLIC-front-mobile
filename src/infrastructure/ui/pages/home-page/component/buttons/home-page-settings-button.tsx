import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import { HomePageContext } from '~/infrastructure/ui/pages/home-page/context';

const HomePageSettingsButton = () => {
    const asset = require('~/domain/entities/assets/home-page/home-page-settings.svg');
    const { handleOpenSettings } = useContext(HomePageContext);
    return (
        <TouchableOpacity onPress={handleOpenSettings}>
            <CustomSvg asset={asset} height={40} width={40} />
        </TouchableOpacity>
    );
};

export default HomePageSettingsButton;

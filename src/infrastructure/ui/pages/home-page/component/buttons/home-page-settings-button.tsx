import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const HomePageSettingsButton = () => {
    const asset = require('~/domain/entities/assets/home-page/home-page-settings.svg');
    const {
        NavigationStore: { navigate }
    } = useStore();
    return (
        <TouchableOpacity onPress={() => navigate(PagesEnum.SettingsPage)}>
            <CustomSvg asset={asset} height={40} width={40} />
        </TouchableOpacity>
    );
};

export default HomePageSettingsButton;

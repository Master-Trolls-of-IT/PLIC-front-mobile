import React from 'react';
import { TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useHomePageButtonsData from '~/infrastructure/ui/pages/home-page/component/buttons/hooks';

const HomePageSettingsButton = () => {
    const { settingsButtonAsset, handleSettingsButtonPress } = useHomePageButtonsData();
    return (
        <TouchableOpacity onPress={handleSettingsButtonPress}>
            <CustomSvg asset={settingsButtonAsset} height={40} width={40} />
        </TouchableOpacity>
    );
};

export default observer(HomePageSettingsButton);

import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useHomePageButtonsData from '~/infrastructure/ui/pages/home-page/component/buttons/hooks';

const HomePageNotificationButton = () => {
    const { notificationButtonAsset, handleNotificationButtonPress } = useHomePageButtonsData();
    return (
        <TouchableOpacity onPress={handleNotificationButtonPress}>
            <CustomSvg asset={notificationButtonAsset} height={40} width={40} />
        </TouchableOpacity>
    );
};

export default HomePageNotificationButton;

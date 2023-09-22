import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useHomePageButtonsData = () => {
    const {
        NavigationStore: { navigate }
    } = useStore();

    const settingsButtonAsset = require('~/domain/entities/assets/home-page/home-page-settings.svg');
    const notificationButtonAsset = require('~/domain/entities/assets/home-page/home-page-notifications.svg');

    const handleSettingsButtonPress = () => navigate(PagesEnum.SettingsPage);
    const handleNotificationButtonPress = () => {};

    return {
        settingsButtonAsset,
        notificationButtonAsset,
        handleSettingsButtonPress,
        handleNotificationButtonPress
    };
};

export default useHomePageButtonsData;

import {useCallback, useState} from 'react';
import {ColorEnum} from '~/domain/interfaces/enum/color-enum';
import {useStore} from '~/infrastructure/controllers/store';
import {PagesEnum} from '~/domain/interfaces/enum/pages-enum';

const useSettingsPageData = () => {
    const {
        NavigationStore: { navigate }
    } = useStore();

    const [validateDeleteAccount1, setValidateDeleteAccount1] = useState(false);
    const [validateDeleteAccount2, setValidateDeleteAccount2] = useState(false);

    const [inputPasswordString, setInputPassword] = useState('');

    const onDeleteAccountPress = () => {
        setValidateDeleteAccount1(prevState => !prevState);
    }

    const onDeleteAccountModalPress = () => {
        setValidateDeleteAccount2(prevState => !prevState);
        setValidateDeleteAccount1(prevState => !prevState);

    }

    const onDeleteConfirm = () => {
        navigateToStartPage();
    }

    const onGoSettings = () => {
        setValidateDeleteAccount1(false);
        setValidateDeleteAccount2(false);
        navigateToSettingsPage();
    }


    const logoutButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicBrown,
            borderRadius: 20,
            width: 180,
            height: 45,
            marginTop: 25
        },
        text: {
            color: ColorEnum.ClassicBeige,
            fontSize: 18,
            fontWeight: 700
        }
    };

    const deleteButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicRedIcon,
            borderRadius: 20,
            width: 220,
            height: 45
        },
        text: {
            color: ColorEnum.ClassicGrey,
            fontSize: 18,
            fontWeight: 700
        }
    };

    const arrowLinkAsset = require('~/domain/entities/assets/home-page/arrow-link.svg');

    const navigateToPersonalDataPage = useCallback(() => {
        navigate(PagesEnum.PersonalDataPage);
    }, [navigate]);

    const navigateToWidgetPage = useCallback(() => {
        navigate(PagesEnum.WidgetPage);
    }, [navigate]);

    const navigateToStartPage = useCallback(() => {
        navigate(PagesEnum.LoginPage);
    }, [navigate]);

    const navigateToSettingsPage = useCallback(()=> {
        navigate(PagesEnum.SettingsPage);
    }, [navigate]);

    return {
        logoutButtonStyle,
        deleteButtonStyle,
        arrowLinkAsset,
        navigateToPersonalDataPage,
        navigateToWidgetPage,
        validateDeleteAccount1,
        validateDeleteAccount2,
        setValidateDeleteAccount1,
        setValidateDeleteAccount2,
        onDeleteAccountPress,
        onDeleteAccountModalPress,
        onDeleteConfirm,
        onGoSettings,
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword },
    };
};

export default useSettingsPageData;

import { useCallback, useState } from 'react';
import { Dimensions } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { LoginData } from '~/domain/interfaces/services/login';
import passwordHashing from '~/infrastructure/controllers/password-hashing';
import APIServices from '~/infrastructure/controllers/services/api';
import { UserData } from '~/domain/interfaces/services/user-data';

const useSettingsPageData = () => {
    const {
        NavigationStore: { navigate },
        UserStore: { userData }
    } = useStore();

    const [deletePasswordModal, setDeletePasswordModal] = useState(false);
    const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

    const [inputPasswordString, setInputPassword] = useState('');

    const [loader, setLoader] = useState(false);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigateToPersonalDataPage = useCallback(() => {
        navigate(PagesEnum.PersonalDataPage);
    }, [navigate]);

    const navigateToWidgetPage = useCallback(() => {
        navigate(PagesEnum.WidgetPage);
    }, [navigate]);

    const navigateToStartPage = useCallback(() => {
        navigate(PagesEnum.LoginPage);
    }, [navigate]);

    const onDeleteAccountPress = () => {
        setDeletePasswordModal((prevState) => !prevState);
    };

    const resetAllError = () => {
        setError(false);
        setErrorMessage('');
    };

    const onDeleteAccountModalPress = useCallback(async () => {
        resetAllError();
        setLoader(true);
        if (isValidInput(inputPasswordString, InputEnum.Password)) {
            const data: LoginData = {
                email: userData.Email.toLowerCase(),
                password: passwordHashing(inputPasswordString)
            };
            try {
                await APIServices.POST<UserData, LoginData>('/checkuser', data);
                setDeleteConfirmationModal(true);
                setDeletePasswordModal(false);
            } catch (e) {
                setError(true);
                setErrorMessage('Le mot de passe est incorrect');
            }
        } else {
            setError(true);
            setErrorMessage('Le champ mot de passe est invalide');
        }
        setLoader(false);
    }, [inputPasswordString, userData.Email]);

    const onDeleteConfirm = async () => {
        try {
            await APIServices.DELETE(`/users/${userData.Id}`);
            setDeleteConfirmationModal(false);
            setDeletePasswordModal(false);
            navigateToStartPage();
        } catch (e) {
            setError(true);
            setErrorMessage('Veuillez réessayer plus tard');
        }
    };

    const onPressCancelDeleteModal = () => {
        setDeletePasswordModal(false);
        setDeleteConfirmationModal(false);
        setInputPassword('');
    };

    const logoutButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicBrown,
            borderRadius: 20,
            width: 180 * (Dimensions.get('screen').width / 400),
            height: 45,
            marginTop: 25
        },
        text: {
            color: ColorEnum.ClassicBeige,
            fontSize: 18
        }
    };

    const deleteButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicRedIcon,
            borderRadius: 20,
            width: 220 * (Dimensions.get('screen').width / 400),
            height: 45
        },
        text: {
            color: ColorEnum.ClassicGrey,
            fontSize: 18
        }
    };

    const arrowLinkAsset = require('~/domain/entities/assets/home-page/arrow-link.svg');

    return {
        logoutButtonStyle,
        deleteButtonStyle,
        arrowLinkAsset,
        navigateToPersonalDataPage,
        navigateToWidgetPage,
        deletePasswordModal,
        deleteConfirmationModal,
        setDeletePasswordModal,
        setDeleteConfirmationModal,
        onDeleteAccountPress,
        onDeleteAccountModalPress,
        onDeleteConfirm,
        onPressCancelDeleteModal,
        loader,
        error,
        errorMessage,
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword }
    };
};

export default useSettingsPageData;

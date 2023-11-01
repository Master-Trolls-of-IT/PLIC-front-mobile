import { useCallback, useState } from 'react';
import { Dimensions } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import useLoginPageService from '~/application/page-service/login-page-service';

const useSettingsPageData = () => {
    const {
        NavigationStore: { navigate, resetNavigation },
        UserStore: { userData }
    } = useStore();

    const { deleteUser, checkUser } = useLoginPageService();

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
        checkUser(userData.email.toLowerCase(), inputPasswordString)
            .then(() => {
                setDeleteConfirmationModal(true);
                setDeletePasswordModal(false);
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(() => {
                    if (err instanceof Error) {
                        if (err.message === 'invalid password') return 'Le mot de passe est incorrect';
                    }
                    return 'Le mot de passe est incorrect';
                });
            });
    }, [checkUser, inputPasswordString, userData.email]);

    const onDeleteConfirm = async () => {
        deleteUser(userData.id)
            .then(() => {
                setDeleteConfirmationModal(false);
                setDeletePasswordModal(false);
                resetNavigation();
            })
            .catch(() => {
                setError(true);
                setErrorMessage('Veuillez réessayer plus tard');
            });
    };

    const onPressCancelDeleteModal = () => {
        setDeletePasswordModal(false);
        setDeleteConfirmationModal(false);
        setInputPassword('');
    };

    const onPressLogout = () => {
        resetNavigation();
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
        onPressLogout,
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword }
    };
};

export default useSettingsPageData;

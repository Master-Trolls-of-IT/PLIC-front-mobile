import {useCallback, useState} from 'react';
import {ColorEnum} from '~/domain/interfaces/enum/color-enum';
import {useStore} from '~/infrastructure/controllers/store';
import {PagesEnum} from '~/domain/interfaces/enum/pages-enum';
import {isValidInput} from "~/infrastructure/ui/shared/helper/is-valid-input";
import {InputEnum} from "~/domain/interfaces/enum/input-type-enum";
import {LoginData} from "~/domain/interfaces/services/login";
import passwordHashing from "~/infrastructure/controllers/password-hashing";
import APIServices from "~/infrastructure/controllers/services/api";
import {UserData} from "~/domain/interfaces/services/user-data";
import formatTimpstampToDate from "~/infrastructure/ui/shared/helper/format-timpstamp-to-date";
import DataStore from "~/infrastructure/controllers/store/root-store/data-store";
import LoginStore from "~/infrastructure/controllers/store/root-store/login-store";

const useSettingsPageData = () => {
    const {
        NavigationStore: { navigate },
        LoginStore: {userData}
    } = useStore();

    const [validateDeleteAccount1, setValidateDeleteAccount1] = useState(false);
    const [validateDeleteAccount2, setValidateDeleteAccount2] = useState(false);

    const [inputPasswordString, setInputPassword] = useState('');

    const [loader, setLoader] = useState(false);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onDeleteAccountPress = () => {
        setValidateDeleteAccount1(prevState => !prevState);
    }

    const resetAllError = () => {
        setError(false);
        setErrorMessage('');
    };

    const onDeleteAccountModalPress = useCallback(async() => {
        resetAllError();
        setLoader(true);
        if (isValidInput(inputPasswordString, InputEnum.Password)) {
            const data: LoginData = {
                email: userData.Email.toLowerCase(),
                password: passwordHashing(inputPasswordString)
            };
            try {
                const response = await APIServices.POST<UserData, LoginData>('/checkuser', data);
                if (response.status === 202) {
                    setValidateDeleteAccount2(true);
                    setValidateDeleteAccount1(false);
                } else {
                    setError(true);
                    setErrorMessage('Invalid Password, please try again')
                }
            } catch (e) {
                setError(true);
                setErrorMessage('Veuillez réessayer plus tard')
                console.log(e)
            }
        } else {
            setError(true);
            setErrorMessage('Invalid password format');
        }
        setLoader(false);



    }, [inputPasswordString]);

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
        loader,
        error,
        errorMessage,
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword },
    };
};

export default useSettingsPageData;

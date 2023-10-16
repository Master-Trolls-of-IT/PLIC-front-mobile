import { useCallback, useState } from 'react';
import { LoginData } from '~/domain/interfaces/services/login';
import APIServices from '~/infrastructure/controllers/services/api';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import passwordHashing from '~/infrastructure/controllers/password-hashing';
import { useStore } from '~/infrastructure/controllers/store';
import useLoginPageService from '~/application/page-service/login-page-service';
import { UserData } from '~/domain/interfaces/services/user-data';
import formatTimestampToDate from '~/infrastructure/ui/shared/helper/format-timestamp-to-date';

const useLoginPageData = () => {
    const [inputEmailString, setInputEmail] = useState('');
    const [inputPasswordString, setInputPassword] = useState('');
    const [errorOnLogin, setErrorOnLogin] = useState(false);
    const [errorOnServer, setErrorOnServer] = useState(false);
    const [loader, setLoader] = useState(false);

    const {
        LoginStore: { setRefreshToken, setAccessToken, setUserData },
        LogStore: { warn },
        NavigationStore: { navigate }
    } = useStore();
    const { RefreshTokenGen } = useLoginPageService();

    const resetAllError = () => {
        setErrorOnLogin(false);
        setErrorOnServer(false);
    };

    const onPressSignUp = () => {
        resetAllError();
        navigate(PagesEnum.SignUpPage);
    };

    const onPressLogin = useCallback(async () => {
        resetAllError();
        setLoader(true);
        if (isValidInput(inputEmailString, InputEnum.Email) && isValidInput(inputPasswordString, InputEnum.Password)) {
            const data: LoginData = {
                email: inputEmailString.toLowerCase(),
                password: passwordHashing(inputPasswordString)
            };

            try {
                const response = await APIServices.POST<UserData, LoginData>('/login', data);

                if (response.status === 202) {
                    const refreshToken = await RefreshTokenGen(inputPasswordString);
                    const accessToken = await RefreshTokenGen(inputPasswordString);

                    if (refreshToken != '' && accessToken != '') {
                        setRefreshToken(refreshToken);
                        setAccessToken(accessToken);
                    } else {
                        warn('useLoginPageData', 'Received an empty access or refresh token', '');
                    }
                    const userDataCopy = response.data;

                    userDataCopy.Birthdate = formatTimestampToDate(userDataCopy.Birthdate);
                    setUserData(userDataCopy);
                    navigate(PagesEnum.HomePage);
                } else {
                    setErrorOnServer(true);
                }
            } catch {
                setErrorOnLogin(true);
            }
        } else {
            setErrorOnLogin(true);
        }
        setLoader(false);
    }, [
        RefreshTokenGen,
        inputEmailString,
        inputPasswordString,
        navigate,
        setAccessToken,
        setRefreshToken,
        setUserData,
        warn
    ]);

    const selectRightErrorMessage = () => {
        if (errorOnLogin) return "L'e-mail ou le mot de passe est incorrect.";
        else return 'Erreur pendant la connexion à la base de données';
    };

    return {
        inputEmail: { input: inputEmailString, dispatch: setInputEmail },
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword },
        errorEnabled: errorOnLogin || errorOnServer,
        onPressSignUp,
        onPressLogin,
        selectRightErrorMessage,
        loader
    };
};
export default useLoginPageData;

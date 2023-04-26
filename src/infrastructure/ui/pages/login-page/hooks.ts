import { useState } from 'react';
import { LoginData } from '~/domain/interfaces/services/login';
import APIService from '~/infrastructure/controllers/services';
import RefreshTokenGen from '~/infrastructure/ui/pages/login-page/services';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';

const useLoginPageData = (navigation: any) => {
    const [inputEmailString, setInputEmail] = useState('');
    const [inputPasswordString, setInputPassword] = useState('');
    const [errorOnLogin, setErrorOnLogin] = useState(false);
    const [errorOnDataBase, setErrorOnDataBase] = useState(false);

    const onPressSignUp = () => {
        navigation.navigate('SignUpPage');
    };

    const onPressLogin = async () => {
        if (
            isValidInput(inputEmailString, InputTypeEnum.Email) &&
            isValidInput(inputPasswordString, InputTypeEnum.Password)
        ) {
            //Envoyer la data JSON au back ici
            const data: LoginData = {
                email: inputEmailString,
                password: inputPasswordString
            };
            try {
                const response = await APIService.POST(process.env.APP_API_ENDPOINT + '/login', JSON.stringify(data));
                if (response.status === 202) {
                    // We need to create an access and a refresh token here and save it in the local storage
                    const refreshToken = await RefreshTokenGen(inputPasswordString);
                    const accessToken = await RefreshTokenGen(inputPasswordString);
                    if (refreshToken != '' && accessToken != '') {
                        localStorage.setItem('refreshToken', refreshToken);
                        localStorage.setItem('accessToken', accessToken);
                    } else {
                        // Gérer l'erreur des tokens ici
                    }
                    navigation.navigate('HomePage');
                } else {
                    console.log(response);
                    setErrorOnDataBase(true);
                }
            } catch (error) {
                console.log(error);
                setErrorOnDataBase(true);
            }
        } else {
            setErrorOnLogin(true);
        }
    };

    return {
        inputEmail: { input: inputEmailString, dispatch: setInputEmail },
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword },
        errorOnLogin,
        onPressSignUp,
        onPressLogin,
        errorOnDataBase
    };
};
export default useLoginPageData;

import { useState } from 'react';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import { LoginData } from '~/domain/interfaces/loginAndSignUp/login';

const useLoginPageData = (navigation: any) => {
    const [inputEmailString, setInputEmail] = useState('');
    const [inputPasswordString, setInputPassword] = useState('');
    const [errorOnLogin, setErrorOnLogin] = useState(false);

    const onPressSignUp = () => {
        navigation.navigate('SignUpPage');
    };

    const onPressLogin = () => {
        if (
            isValidateInput(inputEmailString, InputTypeEnum.Email) &&
            isValidateInput(inputPasswordString, InputTypeEnum.Password)
        ) {
            //Envoyer la data JSON au back ici
            const data: LoginData = {
                email: inputEmailString,
                password: inputPasswordString
            };
            //Ajouter l'appel de fonction au back ici
            // Si l'envoi de data au back se passe bien, passer à la navigation
            navigation.navigate('HomePage');
        } else {
            setErrorOnLogin(true);
        }
    };

    return {
        inputEmail: { input: inputEmailString, dispatch: setInputEmail },
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword },
        errorOnLogin,
        onPressSignUp,
        onPressLogin
    };
};
export default useLoginPageData;

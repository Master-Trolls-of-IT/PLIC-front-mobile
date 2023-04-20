import { useState } from 'react';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';

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
        )
            navigation.navigate('HomePage');
        else {
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

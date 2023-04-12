import { useState } from 'react';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import { LoginData } from '~/domain/interfaces/loginAndSignUp/login';
import APIService from '~/infrastructure/controllers/services';

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
            isValidateInput(inputEmailString, InputTypeEnum.Email) &&
            isValidateInput(inputPasswordString, InputTypeEnum.Password)
        ) {
            //Envoyer la data JSON au back ici
            const data: LoginData = {
                email: inputEmailString,
                password: inputPasswordString
            };
            try {
                const response = await APIService.POST(
                    'https://plic-back-qp6wugltyq-ew.a.run.app/login',
                    JSON.stringify(data)
                );
                if (response.status === 202) {
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

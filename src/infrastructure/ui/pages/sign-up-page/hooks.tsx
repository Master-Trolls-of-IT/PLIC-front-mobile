import { useState } from 'react';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';

const useSignUpPageData = (navigation: any) => {
    const [inputEmailString, setInputEmail] = useState('');
    const [inputPasswordString, setInputPassword] = useState('');
    const [inputGenreString, setInputGenre] = useState('');
    const [inputNameString, setInputName] = useState('');
    const [inputSizeString, setInputSize] = useState('');
    const [inputWeightString, setInputWeight] = useState('');
    const [inputAgeString, setInputAge] = useState('');
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
        inputGenre: { input: inputGenreString, dispatch: setInputGenre },
        inputName: { input: inputNameString, dispatch: setInputName },
        inputSize: { input: inputSizeString, dispatch: setInputSize },
        inputWeight: { input: inputWeightString, dispatch: setInputWeight },
        inputAge: { input: inputAgeString, dispatch: setInputAge },
        errorOnLogin,
        onPressSignUp,
        onPressLogin
    };
};
export default useSignUpPageData;

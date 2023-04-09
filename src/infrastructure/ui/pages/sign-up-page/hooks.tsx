import { useState } from 'react';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';

const useSignUpPageData = (navigation: any) => {
    const [inputBirthdateString, setInputBirthdate] = useState('');
    const [inputEmailString, setInputEmail] = useState('');
    const [inputPasswordString, setInputPassword] = useState('');
    const [inputNameString, setInputName] = useState('');
    const [inputSizeString, setInputSize] = useState('');
    const [inputWeightString, setInputWeight] = useState('');
    const [inputAgeString, setInputAge] = useState('');
    const [errorOnLogin, setErrorOnLogin] = useState(false);
    const [inputSportActivityString, setInputSportActivity] = useState('');
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
        inputBirthdate: { input: inputBirthdateString, dispatch: setInputBirthdate },
        inputEmail: { input: inputEmailString, dispatch: setInputEmail },
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword },
        inputName: { input: inputNameString, dispatch: setInputName },
        inputSize: { input: inputSizeString, dispatch: setInputSize },
        inputWeight: { input: inputWeightString, dispatch: setInputWeight },
        inputAge: { input: inputAgeString, dispatch: setInputAge },
        inputSportActivity: { input: inputSportActivityString, dispatch: setInputSportActivity },
        errorOnLogin,
        onPressSignUp,
        onPressLogin
    };
};
export default useSignUpPageData;

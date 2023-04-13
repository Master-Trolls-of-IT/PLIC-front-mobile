import { useState } from 'react';

const useSignUpPageData = (navigation: any) => {
    const [inputBirthdateString, setInputBirthdate] = useState('');
    const [inputEmailString, setInputEmail] = useState('');
    const [inputPasswordString, setInputPassword] = useState('');
    const [inputNameString, setInputName] = useState('');
    const [inputSizeString, setInputSize] = useState('');
    const [inputWeightString, setInputWeight] = useState('');
    const [inputAgeString, setInputAge] = useState('');
    const [inputGenderString, setInputGender] = useState<{ label: string; value: string }>({ label: '', value: '' });
    const [errorOnLogin, setErrorOnLogin] = useState(false);
    const [inputSportActivityString, setInputSportActivity] = useState('');

    const onPressGoBack = () => {
        navigation.navigate('LoginPage');
    };

    const onPressValidate = () => {
        navigation.navigate('HomePage');
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
        inputGender: { input: inputGenderString, dispatch: setInputGender },
        errorOnLogin,
        onPressGoBack,
        onPressValidate
    };
};
export default useSignUpPageData;

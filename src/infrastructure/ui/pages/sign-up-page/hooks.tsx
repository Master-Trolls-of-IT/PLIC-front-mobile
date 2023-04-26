import { useState } from 'react';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';
import { SignUpData } from '~/domain/interfaces/loginAndSignUp/signUp';
import APIService from '~/infrastructure/controllers/services';
import PasswordHashing from '~/infrastructure/controllers/password-hashing';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';

const useSignUpPageData = (navigation: any) => {
    const [inputBirthdateString, setInputBirthdate] = useState('');
    const [inputEmailString, setInputEmail] = useState('');
    const [inputPasswordString, setInputPassword] = useState('');
    const [inputValidPasswordString, setValidPassword] = useState('');
    const [inputNameString, setInputName] = useState('');
    const [inputHeightString, setInputHeight] = useState('');
    const [inputWeightString, setInputWeight] = useState('');
    const [inputGenderString, setInputGender] = useState<{ label: string; value: string }>({ label: '', value: '' });
    const [inputSportActivityString, setInputSportActivity] = useState('');
    const [errorOnSignUp, setErrorOnSignUp] = useState(false);
    const [errorOnDataBase, setErrorOnDataBase] = useState(false);

    const onPressGoBack = () => {
        navigation.navigate('LoginPage');
    };

    const onPressValidate = () => {
        const post = async () => {
            if (
                isValidInput(inputBirthdateString, InputTypeEnum.Birthdate) &&
                isValidInput(inputNameString, InputTypeEnum.Name) &&
                inputWeightString != '' &&
                inputHeightString != '' &&
                inputSportActivityString != '' &&
                isValidInput(inputEmailString, InputTypeEnum.Email) &&
                isValidInput(inputPasswordString, InputTypeEnum.Password) &&
                isValidInput(inputValidPasswordString, InputTypeEnum.Password) &&
                inputPasswordString == inputValidPasswordString
            ) {
                const data: SignUpData = {
                    Email: inputEmailString,
                    Username: inputEmailString,
                    Password: PasswordHashing(inputPasswordString),
                    Birthdate: inputBirthdateString,
                    Weight: +inputWeightString,
                    Height: +inputHeightString,
                    Gender: +inputGenderString,
                    Pseudo: inputNameString,
                    Rights: 0,
                    Sportiveness: +inputSportActivityString,
                    BasalMetabolism: 0
                };

                try {
                    const response = await APIService.POST('/register', data);
                    console.log(response.status);
                    if (response.status === 200) {
                        navigation.navigate('HomePage');
                    } else {
                        // TODO : Ajout du logger
                        setErrorOnDataBase(true);
                    }
                } catch (e) {
                    // TODO : Ajout du logger
                    setErrorOnDataBase(true);
                }
            } else {
                setErrorOnSignUp(true);
            }
        };
        void post();
    };

    return {
        errorOnSignUp,
        errorOnDataBase,
        inputBirthdate: { input: inputBirthdateString, dispatch: setInputBirthdate },
        inputEmail: { input: inputEmailString, dispatch: setInputEmail },
        inputGender: { input: inputGenderString, dispatch: setInputGender },
        inputName: { input: inputNameString, dispatch: setInputName },
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword },
        inputHeight: { input: inputHeightString, dispatch: setInputHeight },
        inputSportActivity: { input: inputSportActivityString, dispatch: setInputSportActivity },
        inputValidPassword: { input: inputValidPasswordString, dispatch: setValidPassword },
        inputWeight: { input: inputWeightString, dispatch: setInputWeight },
        onPressGoBack,
        onPressValidate
    };
};
export default useSignUpPageData;

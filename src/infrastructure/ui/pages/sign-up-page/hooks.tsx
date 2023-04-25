import { useState } from 'react';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';
import { SignUpData } from '~/domain/interfaces/loginAndSignUp/signUp';
import APIService from '~/infrastructure/controllers/services';
import PasswordHashing from '~/infrastructure/controllers/password-hashing';

const useSignUpPageData = (navigation: any) => {
    const [inputBirthdateString, setInputBirthdate] = useState('');
    const [inputEmailString, setInputEmail] = useState('');
    const [inputPasswordString, setInputPassword] = useState('');
    const [inputNameString, setInputName] = useState('');
    const [inputSizeString, setInputSize] = useState('');
    const [inputWeightString, setInputWeight] = useState('');
    const [inputAgeString, setInputAge] = useState('');
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
                isValidateInput(inputEmailString, InputTypeEnum.Email) &&
                isValidateInput(inputPasswordString, InputTypeEnum.Password)
            ) {
                const data: SignUpData = {
                    Email: inputEmailString,
                    Username: inputEmailString,
                    Password: PasswordHashing(inputPasswordString),
                    Birthdate: inputBirthdateString,
                    Weight: +inputWeightString,
                    Height: +inputSizeString,
                    Gender: +inputGenderString,
                    Pseudo: inputNameString,
                    Rights: 0,
                    Sportiveness: +inputSportActivityString,
                    BasalMetabolism: 0
                };

                // Send data here ( Need to know how to get Rights and Basal Metabolism )
                // and the body is the data
                // and the method is POST
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
        inputBirthdate: { input: inputBirthdateString, dispatch: setInputBirthdate },
        inputEmail: { input: inputEmailString, dispatch: setInputEmail },
        inputPassword: { input: inputPasswordString, dispatch: setInputPassword },
        inputName: { input: inputNameString, dispatch: setInputName },
        inputSize: { input: inputSizeString, dispatch: setInputSize },
        inputWeight: { input: inputWeightString, dispatch: setInputWeight },
        inputAge: { input: inputAgeString, dispatch: setInputAge },
        inputSportActivity: { input: inputSportActivityString, dispatch: setInputSportActivity },
        inputGender: { input: inputGenderString, dispatch: setInputGender },
        errorOnSignUp,
        errorOnDataBase,
        onPressGoBack,
        onPressValidate
    };
};
export default useSignUpPageData;

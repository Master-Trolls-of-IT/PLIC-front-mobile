import { useState } from 'react';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import { SignUpData } from '~/domain/interfaces/loginAndSignUp/signUp';

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
        if (
            isValidateInput(inputEmailString, InputTypeEnum.Email) &&
            isValidateInput(inputPasswordString, InputTypeEnum.Password)
        ) {
            const data: SignUpData = {
                Email: inputEmailString,
                Username: inputEmailString,
                Password: inputPasswordString,
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
            // here is the api address: https://plic-back-qp6wugltyq-ew.a.run.app/
            // and the body is the data
            // and the method is POST
            fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((response) => {
                    if (response.status === 200) {
                        navigation.navigate('HomePage');
                    } else {
                        console.log(response);
                        setErrorOnDataBase(true);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setErrorOnDataBase(true);
                });
        } else {
            setErrorOnSignUp(true);
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
        inputGender: { input: inputGenderString, dispatch: setInputGender },
        errorOnSignUp,
        errorOnDataBase,
        onPressGoBack,
        onPressValidate
    };
};
export default useSignUpPageData;

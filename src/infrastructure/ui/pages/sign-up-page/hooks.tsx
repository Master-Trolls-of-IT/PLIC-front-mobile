import { useState } from 'react';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import PasswordHashing from '~/infrastructure/controllers/password-hashing';
import { SignUpData } from '~/domain/interfaces/services/sign-up';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';
import useSignUpPageService from '~/application/page-service/sign-up-page-service';

const useSignUpPageData = (navigate: NavigateProps, goBack: () => void) => {
    const { SignUp } = useSignUpPageService();

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

    const checkAllInputs =
        isValidInput(inputBirthdateString, InputEnum.Birthdate) &&
        isValidInput(inputNameString, InputEnum.Name) &&
        inputWeightString != '' &&
        inputHeightString != '' &&
        inputSportActivityString != '' &&
        isValidInput(inputEmailString, InputEnum.Email) &&
        isValidInput(inputPasswordString, InputEnum.Password) &&
        isValidInput(inputValidPasswordString, InputEnum.Password) &&
        inputPasswordString == inputValidPasswordString;

    const onPressGoBack = goBack;

    const onPressValidate = () => {
        const post = async () => {
            if (checkAllInputs) {
                const data: SignUpData = {
                    Email: inputEmailString.toLowerCase(),
                    Username: inputEmailString,
                    Password: PasswordHashing(inputPasswordString),
                    Birthdate: inputBirthdateString,
                    Weight: +inputWeightString,
                    Height: +inputHeightString,
                    Gender: +inputGenderString.value,
                    Pseudo: inputNameString,
                    Rights: 0,
                    Sportiveness: +inputSportActivityString,
                    BasalMetabolism: 0
                };

                await SignUp(data, setErrorOnDataBase);
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

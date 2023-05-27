import { useState } from 'react';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import PasswordHashing from '~/infrastructure/controllers/password-hashing';
import { SignUpData } from '~/domain/interfaces/services/sign-up';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';
import useSignUpPageService from '~/application/page-service/sign-up-page-service';
import GetBasalMetabolism from '~/infrastructure/ui/shared/helper/get-basal-metabolism';

const useSignUpPageData = (navigate: NavigateProps, goBack: () => void) => {
    const { SignUp } = useSignUpPageService();

    const [inputBirthdateString, setInputBirthdate] = useState('');
    const [inputEmailString, setInputEmail] = useState('');
    const [inputPasswordString, setInputPassword] = useState('');
    const [inputValidPasswordString, setValidPassword] = useState('');
    const [inputNameString, setInputName] = useState('');
    const [inputHeightString, setInputHeight] = useState('');
    const [inputWeightString, setInputWeight] = useState('');
    const [inputGenderString, setInputGender] = useState<{ label: string; value: string }>({
        label: 'Homme',
        value: '0'
    });
    const [inputSportActivityString, setInputSportActivity] = useState('');
    const [errorOnSignUp, setErrorOnSignUp] = useState(false);
    const [errorOnServer, setErrorOnServer] = useState(false);
    const [errorOnEmailAlreadyExists, setErrorOnEmailAlreadyExists] = useState(false);
    const [loader, setLoader] = useState(false);

    const basalMetabolism = GetBasalMetabolism(
        parseInt(inputGenderString.value),
        parseInt(inputWeightString),
        parseInt(inputHeightString),
        inputBirthdateString,
        parseInt(inputSportActivityString)
    );

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

    const resetAllError = () => {
        setErrorOnSignUp(false);
        setErrorOnServer(false);
        setErrorOnEmailAlreadyExists(false);
    };

    const onPressGoBack = () => {
        goBack();
        resetAllError();
    };

    const onPressValidate = () => {
        resetAllError();

        const post = async () => {
            setLoader(true);
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
                    BasalMetabolism: basalMetabolism
                };

                await SignUp(data, setErrorOnServer, setErrorOnEmailAlreadyExists);
            } else {
                setErrorOnSignUp(true);
            }
            setLoader(false);
        };
        void post();
    };

    const selectRightErrorMessage = () => {
        if (errorOnSignUp) return 'Un champ est invalide ou les mots de passe ne sont pas identiques';
        else if (errorOnEmailAlreadyExists) return 'Cet e-mail est déjà utilisé';
        else return 'Erreur de connexion au serveur';
    };

    return {
        errorEnabled: errorOnSignUp || errorOnServer || errorOnEmailAlreadyExists,
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
        onPressValidate,
        selectRightErrorMessage,
        loader
    };
};
export default useSignUpPageData;

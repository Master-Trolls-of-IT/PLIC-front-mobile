import { AxiosError } from 'axios';
import { SignUpData } from '~/domain/interfaces/services/sign-up';
import APIServices from '~/infrastructure/controllers/services/api';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { useStore } from '~/infrastructure/controllers/store';
import { UserData } from '~/domain/interfaces/services/user-data';

const useSignUpPageService = () => {
    const {
        NavigationStore: { navigate },
        LoginStore: { setUserData },
        LogStore: { error }
    } = useStore();

    const SignUp = async (
        data: Partial<SignUpData>,
        setErrorOnDataBase: (value: boolean) => void,
        setErrorOnEmailAlreadyExists: (value: boolean) => void
    ) => {
        try {
            const response = await APIServices.POST('/register', data);
            if (response.status === 200) {
                navigate(PagesEnum.HomePage);
                setUserData(data as UserData);
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response?.status == 409) {
                    error('useSignUpPageService', 'Caught an exception', err.message);
                    setErrorOnEmailAlreadyExists(true);
                } else setErrorOnDataBase(true);
            }
            setErrorOnDataBase(true);
        }
    };

    return {
        SignUp
    };
};

export default useSignUpPageService;

import { AxiosError } from 'axios';
import { SignUpData } from '~/domain/interfaces/services/sign-up';
import APIService from '~/infrastructure/controllers/services/api';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { useStore } from '~/infrastructure/controllers/store';
import { UserData } from '~/domain/interfaces/services/user-data';

const useSignUpPageService = () => {
    const {
        NavigationStore: { navigate },
        LoginStore: { setUserData },
        LogStore: { error }
    } = useStore();
    const SignUp = async (data: SignUpData, setErrorOnDataBase: (value: boolean) => void) => {
        try {
            const response = await APIService.POST('/register', data);
            if (response.status === 200) {
                navigate(PagesEnum.HomePage);
                setUserData(data as UserData);
            } else {
                error(
                    'useSignUpPageService',
                    `Sign up failed , received code error : ${response.status}`,
                    response.message
                );
                setErrorOnDataBase(true);
            }
        } catch (err) {
            if (err instanceof AxiosError) error('useSignUpPageService', 'Caught an exception', err.message);
            setErrorOnDataBase(true);
        }
    };

    return {
        SignUp
    };
};

export default useSignUpPageService;

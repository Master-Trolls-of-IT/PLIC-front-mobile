import { SignUpData } from '~/domain/interfaces/services/sign-up';
import APIService from '~/infrastructure/controllers/services/api';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { useStore } from '~/infrastructure/controllers/store';
import { UserData } from '~/domain/interfaces/services/user-data';

const useSingnUpPageService = () => {
    const {
        NavigationStore: { navigate },
        LoginStore: { setUserData }
    } = useStore();
    const SignUp = async (data: SignUpData, setErrorOnDataBase: (value: boolean) => void) => {
        try {
            const response = await APIService.POST('/register', data);
            if (response.status === 200) {
                navigate(PagesEnum.HomePage);
                setUserData(data as UserData);
            } else {
                // TODO : Ajout du logger
                setErrorOnDataBase(true);
            }
        } catch (e) {
            // TODO : Ajout du logger
            setErrorOnDataBase(true);
        }
    };

    return {
        SignUp
    };
};

export default useSingnUpPageService;

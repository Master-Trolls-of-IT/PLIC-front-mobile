import ApiPing from '~/application/utils/api-ping';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';
import { useStore } from '~/infrastructure/controllers/store';

const useStartUpPageService = (timeout: number, navigate: NavigateProps) => {
    const {
        LogStore: { error }
    } = useStore();
    const APIPing = async () => {
        try {
            const resultAPIPing = await ApiPing();
            if (resultAPIPing) navigate(PagesEnum.LoginPage);
        } catch (err) {
            error('useStartUpPageService', 'Could not ping the API ', err.toString());
        }
    };

    setTimeout(() => void APIPing(), timeout);
};

export default useStartUpPageService;

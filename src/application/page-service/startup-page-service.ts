import { AxiosError } from 'axios';
import ApiPing from '~/application/utils/api-ping';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { useStore } from '~/infrastructure/controllers/store';

const useStartUpPageService = (timeout: number) => {
    const {
        LogStore: { error },
        NavigationStore: { navigate }
    } = useStore();

    const APIPing = async () => {
        try {
            const resultAPIPing = await ApiPing();
            if (resultAPIPing) navigate(PagesEnum.LoginPage);
        } catch (err) {
            if (err instanceof AxiosError) error('useStartUpPageService', 'Could not ping the API', err.message);
        }
    };

    setTimeout(() => void APIPing(), timeout);
};

export default useStartUpPageService;

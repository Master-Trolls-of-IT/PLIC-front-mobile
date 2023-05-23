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
            error('useStartUpPageService', 'Could not ping the API ', '');
        }
    };

    setTimeout(() => void APIPing(), timeout);
};

export default useStartUpPageService;

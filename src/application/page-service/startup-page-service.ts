import ApiPing from '~/application/utils/api-ping';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useStartUpPageService = (navigate: (value: string) => void, timeout: number) => {
    const APIPing = async () => {
        const resultAPIPing = await ApiPing();
        if (resultAPIPing) navigate(PagesEnum.LoginPage);
    };

    setTimeout(() => void APIPing(), timeout);
};

export default useStartUpPageService;

import ApiPing from '~/application/utils/api-ping';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';

const useStartUpPageService = (timeout: number, navigate: NavigateProps) => {
    const APIPing = async () => {
        const resultAPIPing = await ApiPing();
        if (resultAPIPing) navigate(PagesEnum.LoginPage);
    };

    setTimeout(() => void APIPing(), timeout);
};

export default useStartUpPageService;

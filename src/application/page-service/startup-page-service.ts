import { AxiosError } from 'axios';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { useStore } from '~/infrastructure/controllers/store';
import APIServices from '~/infrastructure/controllers/services/api';

const useStartUpPageService = () => {
    const APIPing = async () => {
        try {
            const response = await APIServices.GET('/pingwha');
            console.log(response);
            return response.status == 200;
        } catch (err) {
            if (err instanceof AxiosError) error('useStartUpPageService', 'Could not ping the API', err.message);
            return false;
        }
    };

    return {
        APIPing
    };
};

export default useStartUpPageService;

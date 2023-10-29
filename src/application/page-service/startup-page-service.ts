import { AxiosError } from 'axios';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';

const useStartUpPageService = () => {
    const {
        LogsStore: { error }
    } = useStore();
    const APIPing = async () => {
        try {
            const response = await APIServices.GET('/ping');
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

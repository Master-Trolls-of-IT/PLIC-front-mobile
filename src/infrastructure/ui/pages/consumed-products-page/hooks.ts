import { useStore } from '~/infrastructure/controllers/store';
import APIServices from '~/infrastructure/controllers/services/api';

const useConsumedProducts = async () => {
    const {
        NavigationStore: { goBack }
    } = useStore();
    let apiService = APIServices.getInstance();
    let response = await apiService.get('/ping');
    return {
        goBack
    };
};

export default useConsumedProducts;

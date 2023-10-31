import { useStore } from '~/infrastructure/controllers/store';

const useConsumedProductsData = () => {
    const {
        NavigationStore: { goBack },
        ConsumedProductStore: { consumedProducts }
    } = useStore();

    return {
        goBack,
        consumedProducts
    };
};

export default useConsumedProductsData;

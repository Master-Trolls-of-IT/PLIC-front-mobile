import { useEffect } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';

const useConsumedProductsData = () => {
    const {
        NavigationStore: { goBack },
        DataStore: { consumedProducts, setConsumedProducts }
    } = useStore();

    const { getConsumedProducts } = useConsumedProductPageService();

    useEffect(() => {
        let ignore = false;
        setConsumedProducts([]);
        getConsumedProducts().then((result) => {
            if (!ignore) {
                setConsumedProducts(result);
            }
        });
        return () => {
            ignore = true;
        };
    }, [getConsumedProducts, setConsumedProducts]);

    return {
        goBack,
        getConsumedProducts,
        consumedProducts
    };
};

export default useConsumedProductsData;

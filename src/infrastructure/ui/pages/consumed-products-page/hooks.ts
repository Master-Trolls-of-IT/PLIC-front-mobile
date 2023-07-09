import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';

const useConsumedProductsData = () => {
    const {
        NavigationStore: { goBack }
    } = useStore();
    const [consumedProductItems, setConsumedProductItems] = useState([]);

    const { getConsumedProducts } = useConsumedProductPageService(setConsumedProductItems);

    return {
        goBack,
        getConsumedProducts,
        consumedProductItems
    };
};

export default useConsumedProductsData;

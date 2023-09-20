import { useEffect, useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';

const useConsumedProductsData = () => {
    const {
        NavigationStore: { goBack }
    } = useStore();
    const [consumedProductItems, setConsumedProductItems] = useState<ConsumedProductItemProps[]>([]);

    const { getConsumedProducts } = useConsumedProductPageService();

    useEffect(() => {
        let ignore = false;
        setConsumedProductItems([]);
        getConsumedProducts().then((result) => {
            if (!ignore) {
                setConsumedProductItems(result);
            }
        });
        return () => {
            ignore = true;
        };
    }, [getConsumedProducts]);

    return {
        goBack,
        getConsumedProducts,
        consumedProductItems
    };
};

export default useConsumedProductsData;

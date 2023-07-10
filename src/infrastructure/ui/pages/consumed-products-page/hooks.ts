import { useCallback, useEffect, useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';
import useEffectOnce from '~/infrastructure/ui/shared/helper/use-effect-once';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-products-props';

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
    }, []);

    return {
        goBack,
        getConsumedProducts,
        consumedProductItems
    };
};

export default useConsumedProductsData;

import { useStore } from '~/infrastructure/controllers/store';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';
import useEffectOnce from '~/infrastructure/ui/shared/helper/use-effect-once';

const useConsumedProductsData = () => {
    const {
        NavigationStore: { goBack },
        DataStore: { consumedProducts, setConsumedProducts }
    } = useStore();

    const { getConsumedProducts } = useConsumedProductPageService();

    useEffectOnce(() => {
        setConsumedProducts([]);
        getConsumedProducts().then((result) => {
            setConsumedProducts(result);
        });
    });

    return {
        goBack,
        getConsumedProducts,
        consumedProducts
    };
};

export default useConsumedProductsData;

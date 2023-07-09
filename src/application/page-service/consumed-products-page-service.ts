import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-products-props';

const useConsumedProductPageService = (dispatch) => {
    const {
        LoginStore: {
            userData: { Email }
        },
        LogStore: { error }
    } = useStore();
    const getConsumedProducts = async () => {
        try {
            const encodedEmail = encodeURIComponent(Email);
            const response = await APIServices.GET(`product/consumed/${encodedEmail}`);
            const consumedProducts = response.data as ProductInfo[];
            const consumedProductItems = [] as ConsumedProductItemProps[];
            for (const product of consumedProducts) {
                consumedProductItems.push({
                    name: 'Marque',
                    data: product.nutrients,
                    description: product.name,
                    image: product.image_url,
                    score: parseInt(product.ecoscore ?? '0'),
                    isFavourite: false,
                    toggleFavourite: () => {}
                });
            }
            dispatch(consumedProductItems);
        } catch (err: any) {
            error('useConsumedProductPageService', 'Could not retrieve consumed products', err.message);
        }
    };

    return {
        getConsumedProducts
    };
};

export default useConsumedProductPageService;

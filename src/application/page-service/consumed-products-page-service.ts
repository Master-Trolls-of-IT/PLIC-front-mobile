import { useCallback } from 'react';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-products-props';

const useConsumedProductPageService = () => {
    const {
        LoginStore: {
            userData: { Email }
        },
        LogStore: { error }
    } = useStore();
    const getConsumedProducts = useCallback(async () => {
        try {
            const encodedEmail = encodeURIComponent(Email);
            const response = await APIServices.GET(`product/consumed/user/${encodedEmail}`);
            const consumedProducts = response.data as ProductInfo[];
            const consumedProductItems = [] as ConsumedProductItemProps[];
            for (const product of consumedProducts) {
                consumedProductItems.push({
                    id: product.id,
                    name: 'Marque',
                    data: product.nutrients,
                    description: product.name,
                    image: product.image_url,
                    score: parseInt(product.ecoscore ?? '0'),
                    isFavourite: false,
                    toggleFavourite: () => {}
                });
            }
            return consumedProductItems;
        } catch (err: any) {
            error('useConsumedProductPageService', 'Could not retrieve consumed products', err.message);
            return [];
        }
    }, [Email, error]);

    const deleteConsumedProduct = useCallback(
        async (productId: string) => {
            try {
                await APIServices.DELETE(`product/consumed/${productId}/user/${Email}`);
            } catch (err: any) {
                error('useConsumedProductPageService', 'Could not delete consumed product', err.message);
            }
        },
        [error]
    );
    return {
        getConsumedProducts,
        deleteConsumedProduct
    };
};

export default useConsumedProductPageService;

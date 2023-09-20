import { useCallback } from 'react';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';

const useConsumedProductPageService = () => {
    const {
        LoginStore: {
            userData: { Email }
        },
        LogStore: { error }
    } = useStore();

    type ConsumedProduct = { product: ProductInfo; quantity: number };

    const mapResponse = useCallback((consumedProducts: ConsumedProduct[]): ConsumedProductItemProps[] => {
        const consumedProductItems = [] as ConsumedProductItemProps[];
        for (const consumedProduct of consumedProducts) {
            consumedProductItems.push({
                id: consumedProduct.product.id,
                brand: consumedProduct.product.brand,
                data: consumedProduct.product.nutrients,
                consumedQuantity: consumedProduct.quantity ?? 0,
                name: consumedProduct.product.name,
                image: consumedProduct.product.image_url,
                score: parseInt(consumedProduct.product.ecoscore ?? '0'),
                isFavourite: false,
                toggleFavourite: () => {}
            });
        }
        return consumedProductItems;
    }, []);

    const getConsumedProducts = useCallback(async () => {
        try {
            const encodedEmail = encodeURIComponent(Email);
            const response = await APIServices.GET<ConsumedProduct[]>(`product/consumed/user/${encodedEmail}`);
            return mapResponse(response.data);
        } catch (err) {
            if (err instanceof Error) {
                error('useConsumedProductPageService', 'Could not retrieve consumed products', err.message);
            }
            return [];
        }
    }, [mapResponse, Email, error]);

    const deleteConsumedProduct = useCallback(
        async (productId: string) => {
            try {
                const response = await APIServices.DELETE<ConsumedProduct[]>(
                    `product/consumed/${productId}/user/${Email}`
                );
                return mapResponse(response.data);
            } catch (err) {
                if (err instanceof Error) {
                    error('useConsumedProductPageService', 'Could not delete consumed product', err.message);
                }
            }
        },
        [mapResponse, Email, error]
    );
    return {
        getConsumedProducts,
        deleteConsumedProduct
    };
};

export default useConsumedProductPageService;

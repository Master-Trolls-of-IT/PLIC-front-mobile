import { useCallback } from 'react';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-products-props';
import consumedProductItem from "~/infrastructure/ui/shared/component/item/consumed-product-item/consumed-product-item";

const useConsumedProductPageService = () => {
    const {
        LoginStore: {
            userData: { Email }
        },
        LogStore: { error }
    } = useStore();
    const getConsumedProducts = useCallback(async () => {
        try {
            type ConsumedProduct = { product: ProductInfo; quantity: number };
            const encodedEmail = encodeURIComponent(Email);
            const response = await APIServices.GET(`product/consumed/user/${encodedEmail}`);
            const consumedProducts = response.data as ConsumedProduct[];
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
        } catch (err: any) {
            error('useConsumedProductPageService', 'Could not retrieve consumed products', err.message);
            return [];
        }
    }, [Email, error]);

    const deleteConsumedProduct = useCallback(
        async (productId: string) => {
            try {
                const response = await APIServices.DELETE<ConsumedProduct[]>(`product/consumed/${productId}/user/${Email}`);
                type ConsumedProduct = { product: ProductInfo; quantity: number };
                const consumedProducts = response.data as ConsumedProduct[];
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

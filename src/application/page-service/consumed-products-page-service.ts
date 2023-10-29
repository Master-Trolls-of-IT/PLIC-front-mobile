import { useCallback } from 'react';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { ProductInfo } from '~/domain/interfaces/props/nutrients/product-nutrients';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import { EditConsumedProductQuantity } from '~/domain/interfaces/services/edit-consumed-product-quantity';

const useConsumedProductPageService = () => {
    const {
        UserStore: {
            userData: { Email }
        },
        LogsStore: { error }
    } = useStore();

    type ConsumedProduct = { product: ProductInfo; quantity: number };

    const mapResponse = useCallback((consumedProducts: ConsumedProduct[]): ConsumedProductItemProps[] => {
        const consumedProductItems = [] as ConsumedProductItemProps[];
        for (const consumedProduct of consumedProducts) {
            consumedProductItems.push({
                id: consumedProduct.product.id,
                brand: consumedProduct.product.brand,
                barcode: consumedProduct.product.barcode,
                data: consumedProduct.product.nutrients,
                consumedQuantity: consumedProduct.quantity ?? 0,
                name: consumedProduct.product.name,
                image: consumedProduct.product.image_url,
                score: parseInt(consumedProduct.product.ecoscore ?? '0'),
                isWater: consumedProduct.product.isWater,
                serving: consumedProduct.product.serving,
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

    const editQuantityConsumedProduct = useCallback(
        async (barcode: string, quantity: number) => {
            try {
                await APIServices.PATCH<EditConsumedProductQuantity, EditConsumedProductQuantity>(`product/consumed`, {
                    email: Email,
                    barcode: barcode,
                    quantity: quantity
                });
            } catch (err) {
                if (err instanceof Error) {
                    error('useConsumedProductPageService', 'Could not edit consumed product quantity', err.message);
                }
            }
        },
        [Email, error]
    );

    const deleteConsumedProduct = useCallback(
        async (productId: string) => {
            try {
                const response = await APIServices.DELETE<ConsumedProduct[]>(
                    `product/consumed/${productId}/user/${Email}`
                );

                return mapResponse(response.data ?? []);
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
        deleteConsumedProduct,
        editQuantityConsumedProduct
    };
};

export default useConsumedProductPageService;

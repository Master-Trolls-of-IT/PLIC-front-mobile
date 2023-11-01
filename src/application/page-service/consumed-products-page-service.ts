import { useCallback } from 'react';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { EditConsumedProductQuantity } from '~/domain/interfaces/services/edit-consumed-product-quantity';
import useMapConsumedProductResponse from '~/infrastructure/ui/shared/helper/useMapConsumedProductResponse';
import { ConsumedProduct } from '~/domain/interfaces/services/consumed-product';

const useConsumedProductPageService = () => {
    const {
        UserStore: {
            userData: { email }
        },
        LogsStore: { error }
    } = useStore();

    const { mapResponse } = useMapConsumedProductResponse();

    const editQuantityConsumedProduct = useCallback(
        async (barcode: string, quantity: number) => {
            try {
                await APIServices.PATCH<EditConsumedProductQuantity, EditConsumedProductQuantity>(`product/consumed`, {
                    email: email,
                    barcode: barcode,
                    quantity: quantity
                });
            } catch (err) {
                if (err instanceof Error) {
                    error('useConsumedProductPageService', 'Could not edit consumed product quantity', err.message);
                }
            }
        },
        [email, error]
    );

    const deleteConsumedProduct = useCallback(
        async (productId: string) => {
            try {
                const response = await APIServices.DELETE<ConsumedProduct[]>(
                    `product/consumed/${productId}/user/${email}`
                );

                return mapResponse(response.data ?? []);
            } catch (err) {
                if (err instanceof Error) {
                    error('useConsumedProductPageService', 'Could not delete consumed product', err.message);
                }
            }
        },
        [mapResponse, email, error]
    );

    return {
        deleteConsumedProduct,
        editQuantityConsumedProduct
    };
};

export default useConsumedProductPageService;

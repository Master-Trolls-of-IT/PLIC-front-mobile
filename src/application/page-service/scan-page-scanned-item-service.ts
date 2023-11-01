import { AxiosError } from 'axios';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import { NewConsumedProduct } from '~/domain/interfaces/services/add-consumed-product';
import useMapConsumedProductResponse from '~/infrastructure/ui/shared/helper/useMapConsumedProductResponse';
import { ConsumedProduct } from '~/domain/interfaces/services/consumed-product';

const useScanPageScannedItemService = () => {
    const {
        UserStore: {
            userData: { email }
        },
        LogsStore: { error }
    } = useStore();
    const { mapResponse } = useMapConsumedProductResponse();

    const addConsumedProduct = async (barcode: string, quantity: string) => {
        try {
            const response = await APIServices.POST<ConsumedProduct, NewConsumedProduct>('product/consumed', {
                email: email,
                barcode: barcode,
                quantity: quantity
            });
            const consumedProducts: ConsumedProduct[] = [response.data as ConsumedProduct];
            return mapResponse(consumedProducts) as ConsumedProductItemProps[];
        } catch (e) {
            const err = e as AxiosError;
            error('useScanPageScannedItemService', 'Could not add product to consumed products', err.message);
            return null;
        }
    };

    return {
        addConsumedProduct
    };
};

export default useScanPageScannedItemService;

import { AxiosError } from 'axios';
import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';

const useScanPageScannedItemService = () => {
    const {
        UserStore: {
            userData: { Email }
        },
        LogsStore: { error }
    } = useStore();

    const addConsumedProduct = async (barcode: string | undefined, quantity: string) => {
        try {
            await APIServices.POST('product/consumed', { email: Email, barcode: barcode, quantity: quantity }).then(
                (response) => {
                    if (response.status != 200) {
                        error(
                            'useScanPageScannedItemService',
                            'Could not add product to consumed products',
                            response.message
                        );
                    }
                }
            );
        } catch (e) {
            const err = e as AxiosError;
            error('useScanPageScannedItemService', 'Could not add product to consumed products', err.message);
        }
    };

    return {
        addConsumedProduct
    };
};

export default useScanPageScannedItemService;

import APIServices from '~/infrastructure/controllers/services/api';
import { useStore } from '~/infrastructure/controllers/store';

const useScanPageScannedItemService = () => {
    const {
        LoginStore: {
            userData: { Email }
        },
        LogStore: { error }
    } = useStore();
    const addConsumedProduct = (barcode: string) => {
        try {
            APIServices.POST('product/consumed', { email: Email, barcode: barcode }).then((response) => {
                if (response.status != 200) {
                    error(
                        'useScanPageScannedItemService',
                        'Could not add product to consumed products',
                        response.message
                    );
                }
            });
        } catch (err: any) {
            error('useScanPageScannedItemService', 'Could not add product to consumed products', err.message);
        }
    };

    return {
        addConsumedProduct
    };
};

export default useScanPageScannedItemService;

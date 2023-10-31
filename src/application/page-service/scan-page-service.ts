import axios from 'axios';
import uuid from 'react-native-uuid';
import { useStore } from '~/infrastructure/controllers/store';
import { ScanPageServiceProps } from '~/domain/interfaces/services/scan-page-service-props';
import { ProductInfo } from '~/domain/interfaces/props/nutrients/product-nutrients';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/item/historical-item/historical-item-props';

const useScanPageService = () => {
    const {
        LogsStore: { error },
        HistoryStore: { addItem, history }
    } = useStore();

    const isBarCodePresent = (barcode: string): boolean => {
        for (const product of history) {
            if (product.barcode === barcode) return false;
        }
        return true;
    };

    const getProduct = ({ inputBarCode, productDispatch, errorDispatch }: ScanPageServiceProps) =>
        axios
            .get(process.env.APP_API_ENDPOINT + 'product/' + inputBarCode)
            .then((response) => {
                const productInfo = response.data.data as ProductInfo;
                productInfo.barcode = inputBarCode;
                productDispatch(productInfo);

                if (!productInfo?.isWater && isBarCodePresent(productInfo.barcode)) {
                    addItem({
                        id: uuid.v4(),
                        barcode: inputBarCode,
                        name: productInfo?.name,
                        brand: productInfo?.brand,
                        data: productInfo?.nutrients,
                        image: productInfo?.image_url,
                        score: Number(productInfo?.ecoscore),
                        isFavourite: false,
                        serving: productInfo?.serving
                    } as HistoricalItemProps);
                }
            })
            .catch((e) => {
                errorDispatch("Le code barre n'existe pas");
                error('ScanPageService', 'Receive an error while get product on OpenFOODFacts API', e.message);
            });

    return { getProduct };
};

export default useScanPageService;

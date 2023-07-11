import axios from 'axios';
import { useStore } from '~/infrastructure/controllers/store';
import { ScanPageServiceProps } from '~/domain/interfaces/props/scan-page-service-props';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';

const useScanPageService = () => {
    const {
        LogStore: { error },
        DataStore: { addItem }
    } = useStore();

    const getProduct = ({ inputBarCode, productDispatch, errorDispatch }: ScanPageServiceProps) =>
        axios
            .get(process.env.APP_API_ENDPOINT + 'product/' + inputBarCode)
            .then((response) => {
                const productInfo = response.data.data as ProductInfo;
                productInfo.barcode = inputBarCode;
                productDispatch(productInfo);

                addItem({
                    barcode: inputBarCode,
                    name: 'Marque',
                    data: productInfo?.nutrients,
                    description: productInfo?.name,
                    image: productInfo?.image_url,
                    score: parseInt(productInfo?.ecoscore ?? '0'),
                    isFavourite: false,
                    toggleFavourite: () => {}
                } as HistoricalItemProps);
            })
            .catch(() => {
                errorDispatch("Le code barre n'existe pas");
                error('ScanPageService', 'Receive an error while get product on OpenFOODFacts API', '');
            });

    return { getProduct };
};

export default useScanPageService;

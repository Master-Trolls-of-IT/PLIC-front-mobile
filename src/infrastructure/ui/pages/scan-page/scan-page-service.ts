import axios from 'axios';
import { useStore } from '~/infrastructure/controllers/store';
import { ScanPageServiceProps } from '~/domain/interfaces/props/scan-page-service-props';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';

const useScanPageService = () => {
    const {
        LogStore: { error }
    } = useStore();

    function mapToProductInfo(data: any): ProductInfo {
        return data;
    }

    const getProduct = ({ inputBarCode, dispatch }: ScanPageServiceProps) =>
        axios
            .get(process.env.APP_API_ENDPOINT + 'product/' + inputBarCode)
            .then((response) => {
                const productInfo = mapToProductInfo(response.data.data);
                dispatch(productInfo.name);
            })
            .catch(() => {
                dispatch("Le code barre n'existe pas");
                error('ScanPageService', 'Receive an error while get product on OpenFOODFacts API', '');
            });

    return { getProduct };
};

export default useScanPageService;

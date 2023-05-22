import axios from 'axios';
import { useStore } from '~/infrastructure/controllers/store';
import { ScanPageServiceProps } from '~/domain/interfaces/props/scan-page-service-props';

const useScanPageService = () => {
    const {
        LogStore: { error }
    } = useStore();

    const getProduct = ({ inputBarCode, dispatch }: ScanPageServiceProps) =>
        axios
            .get(process.env.OPENFOODFACTS_API_ENDPOINT + inputBarCode)
            .then((response) => {
                const {
                    product: { product_name: productName, product_name_fr: productNameFr }
                } = response.data;

                dispatch(productNameFr ? productNameFr : productName);
            })
            .catch(() => {
                dispatch("Le code barre n'existe pas");
                error('ScanPageService', 'Receive an error while get product on OpenFOODFacts API', '');
            });

    return { getProduct };
};

export default useScanPageService;

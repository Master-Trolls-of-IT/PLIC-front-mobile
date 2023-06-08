import axios from 'axios';
import { useStore } from '~/infrastructure/controllers/store';
import { ScanPageServiceProps } from '~/domain/interfaces/props/scan-page-service-props';

const useScanPageService = () => {
    const {
        LogStore: { error }
    } = useStore();

    function parsingProductNutrients(obj: { [x: string]: any }, obj100g: { [x: string]: any }) {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                parsingProductNutrients(obj[key], obj100g);
            } else if (key.endsWith('100g')) {
                obj100g[key] = obj[key];
            }
        }
    }
    const getProduct = ({ inputBarCode, dispatch }: ScanPageServiceProps) =>
        axios
            .get(process.env.OPENFOODFACTS_API_ENDPOINT + inputBarCode)
            .then((response) => {
                const obj100g = {};
                parsingProductNutrients(response.data, obj100g);
                const {
                    product: { image_url: image }
                } = response.data;
                console.log(obj100g);
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

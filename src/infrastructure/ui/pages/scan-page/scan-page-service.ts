import axios from 'axios';
import { useStore } from '~/infrastructure/controllers/store';
import { ScanPageServiceProps } from '~/domain/interfaces/props/scan-page-service-props';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';

const useScanPageService = () => {
    const {
        LogStore: { error }
    } = useStore();

    function getProductInfo(data: { [x: string]: any }) {
        const rawProductInfo: { [x: string]: any } = {};
        const includedKeys: string[] = [
            'image_url',
            'product_name',
            'product_name_fr',
            'nutriscore_grade',
            'nutriscore_score'
        ];
        function fetchProductInfo(obj: { [x: string]: any }) {
            for (const key in obj) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    fetchProductInfo(obj[key]);
                } else if (key.endsWith('100g') || includedKeys.includes(key)) {
                    rawProductInfo[key] = obj[key];
                }
            }
        }

        function mapToProductInfo(obj: { [x: string]: any }): ProductInfo {
            return {
                name: obj.product_name_fr || obj.product_name,
                nutrients: {
                    energyKj: obj['energy-kj_100g'] || 0,
                    energyKcal: obj['energy-kcal_100g'] || obj.energy_100g || 0,
                    fat: obj.fat_100g || 0,
                    saturatedFat: obj['saturated-fat_100g'] || 0,
                    carbohydrates: obj.carbohydrates_100g || 0,
                    sugar: obj.sugars_100g || 0,
                    fiber: obj.fiber_100g || 0,
                    proteins: obj.proteins_100g || 0,
                    salt: obj.salt_100g || 0
                },
                image_url: obj.image_url || 'N/A',
                nutriscore: {
                    score: obj.nutriscore_score || null,
                    grade: obj.nutriscore_grade || 'N/A'
                }
            };
        }
        fetchProductInfo(data);
        return mapToProductInfo(rawProductInfo);
    }

    const getProduct = ({ inputBarCode, dispatch }: ScanPageServiceProps) =>
        axios
            .get(process.env.OPENFOODFACTS_API_ENDPOINT + inputBarCode)
            .then((response) => {
                const productInfo = getProductInfo(response.data);
                dispatch(productInfo.name);
            })
            .catch(() => {
                dispatch("Le code barre n'existe pas");
                error('ScanPageService', 'Receive an error while get product on OpenFOODFacts API', '');
            });

    return { getProduct };
};

export default useScanPageService;

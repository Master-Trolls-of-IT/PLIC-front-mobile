import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useStore } from '~/infrastructure/controllers/store';
import useScanPageService from '~/application/page-service/scan-page-service';
import { ProductInfo } from '~/domain/interfaces/props/nutrients/product-nutrients';

const useCreateMealScanPageData = () => {
    const {
        MealStore: { addMealProducts },
        NavigationStore: { goBack }
    } = useStore();

    const { getProduct } = useScanPageService();

    const [isScanned, setIsScanned] = useState(false);
    const [hasPermission, setHasPermission] = useState(false);
    const [errorResponse, setErrorResponse] = useState('');
    const [scannedProduct, setScannedProduct] = useState<ProductInfo | undefined>(undefined);
    const [inputBarCode, setInputBarCode] = useState('');

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted');
        })();
    };

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const handleBarCodeScanned = ({ data }: { data: string }) => {
        void getProduct({ inputBarCode: data, productDispatch: setScannedProduct, errorDispatch: setErrorResponse });
        setIsScanned(errorResponse == '');
    };

    const onPressSearchIcon = () => {
        void getProduct({ inputBarCode, productDispatch: setScannedProduct, errorDispatch: setErrorResponse });
        setIsScanned(errorResponse == '');
    };

    // TODO : Ajout de la logique du bouton favori dans la create meal scan page
    const toggleFavourite = () => {};

    const onPressScanAgain = () => {
        setIsScanned(false);
        setErrorResponse('');
    };

    const onPressAddQuantity = (quantity: string) => {
        if (scannedProduct)
            addMealProducts({
                id: scannedProduct.id,
                barcode: scannedProduct.barcode,
                name: scannedProduct?.name,
                brand: scannedProduct?.brand,
                data: scannedProduct?.nutrients,
                image: scannedProduct?.image_url,
                score: Number(scannedProduct?.ecoscore),
                serving: scannedProduct?.serving,
                consumedQuantity: quantity,
                isWater: scannedProduct?.isWater
            });
        setIsScanned(false);
        goBack();
    };

    return {
        goBack,
        isScanned,
        onPressSearchIcon,
        handleBarCodeScanned,
        hasPermission,
        errorResponse,
        toggleFavourite,
        onPressScanAgain,
        onPressAddQuantity,
        scannedProduct,
        inputBarCode,
        setInputBarCode
    };
};

export default useCreateMealScanPageData;

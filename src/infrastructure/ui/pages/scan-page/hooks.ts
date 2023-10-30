import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';
import useScanPageService from '~/application/page-service/scan-page-service';
import { ProductInfo } from '~/domain/interfaces/props/nutrients/product-nutrients';
import useScanPageScannedItemService from '~/application/page-service/scan-page-scanned-item-service';
import { useStore } from '~/infrastructure/controllers/store';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';

const useScanPageData = (navigate: NavigateProps) => {
    const {
        ConsumedProductStore: { consumedProducts }
    } = useStore();

    const { getProduct } = useScanPageService();
    const { addConsumedProduct } = useScanPageScannedItemService();
    const { editQuantityConsumedProduct } = useConsumedProductPageService();

    const [inputBarCode, setInputBarCode] = useState('');
    const [hasPermission, setHasPermission] = useState(false);
    const [isScanned, setIsScanned] = useState(false);
    const [errorResponse, setErrorResponse] = useState('');
    const [scannedProduct, setScannedProduct] = useState<ProductInfo | undefined>(undefined);

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

    const onPressHistoricalButton = () => {
        navigate(PagesEnum.HistoricalPage);
    };

    const onPressConsumedProductsButton = () => {
        navigate(PagesEnum.ConsumedProducts);
    };
    const onPressSearchIcon = () => {
        void getProduct({ inputBarCode, productDispatch: setScannedProduct, errorDispatch: setErrorResponse });
        setIsScanned(errorResponse == '');
    };

    const onPressScanAgain = () => {
        setIsScanned(false);
        setErrorResponse('');
    };

    const onPressAddQuantity = async (quantity: string) => {
        if (scannedProduct && !scannedProduct.isWater) {
            const productAlreadyExist = consumedProducts.find((product) => product.barcode === scannedProduct.barcode);

            if (productAlreadyExist) {
                const newQuantity: number = Number(quantity) + productAlreadyExist.consumedQuantity;
                void editQuantityConsumedProduct(scannedProduct?.barcode, newQuantity);
            } else {
                await addConsumedProduct(scannedProduct?.barcode, quantity);
            }
            navigate(PagesEnum.ConsumedProducts);
        }
        onPressScanAgain();
        setIsScanned(false);
    };

    // TODO : Ajout de la logique du bouton favori dans la scan page
    const toggleFavourite = () => {};

    return {
        handleBarCodeScanned,
        hasPermission,
        isScanned,
        scannedProduct,
        inputBarCode: { input: inputBarCode, dispatch: setInputBarCode },
        inputResponse: { input: errorResponse, dispatch: setErrorResponse },
        onPressHistoricalButton,
        onPressConsumedProductsButton,
        onPressSearchIcon,
        onPressScanAgain,
        toggleFavourite,
        onPressAddQuantity
    };
};

export default useScanPageData;

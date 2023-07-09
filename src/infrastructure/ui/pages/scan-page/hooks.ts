import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';
import useScanPageService from '~/application/page-service/scan-page-service';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';

const useScanPageData = (navigate: NavigateProps) => {
    const [inputBarCode, setInputBarCode] = useState('');
    const [hasPermission, setHasPermission] = useState(false);
    const [isScanned, setIsScanned] = useState(false);
    const [errorResponse, setErrorResponse] = useState('');
    const [scannedProduct, setScannedProduct] = useState<ProductInfo | undefined>(undefined);

    const { getProduct } = useScanPageService();

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
        toggleFavourite
    };
};

export default useScanPageData;

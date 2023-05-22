import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';
import useScanPageService from '~/infrastructure/ui/pages/scan-page/scan-page-service';

const useScanPageData = (navigate: NavigateProps) => {
    const [inputBarCode, setInputBarCode] = useState('');
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [response, setResponse] = useState('');

    const { getProduct } = useScanPageService();

    const reloadCircleAsset = require('~/domain/entities/assets/icon/icon-reload-circle.svg');

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
        setScanned(true);
        void getProduct({ inputBarCode: data, dispatch: setResponse });
    };

    const onPressHistoricalButton = () => {
        navigate(PagesEnum.HistoricalPage);
    };

    const onPressSearchIcon = () => {
        void getProduct({ inputBarCode, dispatch: setResponse });
    };

    const onPressScanAgain = () => {
        setScanned(false);
        setResponse('');
    };

    return {
        handleBarCodeScanned,
        hasPermission,
        reloadCircleAsset,
        scanned,
        inputBarCode: { input: inputBarCode, dispatch: setInputBarCode },
        inputResponse: { input: response, dispatch: setResponse },
        onPressHistoricalButton,
        onPressSearchIcon,
        onPressScanAgain
    };
};

export default useScanPageData;

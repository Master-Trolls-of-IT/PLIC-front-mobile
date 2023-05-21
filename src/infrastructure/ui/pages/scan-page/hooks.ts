import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';

const useScanPageData = (navigate: NavigateProps) => {
    const [inputBarCode, setInputBarCode] = useState('');
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [barCode, setBarCode] = useState('Not yet scanned');

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

    const handleBarCodeScanned = ({ type, data }: any) => {
        setScanned(true);
        setBarCode(data);
    };

    const onPressHistoricalButton = () => {
        navigate(PagesEnum.HistoricalPage);
    };

    const onPressScanAgain = () => {
        setScanned(false);
    };

    return {
        handleBarCodeScanned,
        hasPermission,
        reloadCircleAsset,
        scanned,
        inputBarCode: { input: inputBarCode, dispatch: setInputBarCode },
        onPressHistoricalButton,
        onPressScanAgain
    };
};

export default useScanPageData;

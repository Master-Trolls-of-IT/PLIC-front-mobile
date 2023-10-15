import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScanPageStyle from '~/infrastructure/ui/pages/scan-page/scan-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import ScanPageBlobsTop from '~/infrastructure/ui/pages/scan-page/component/background/scan-page-blobs-top';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useScanPageData from '~/infrastructure/ui/pages/scan-page/hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import GenericInputWithSearchIcon from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon/generic-input-with-search-icon';
import { useStore } from '~/infrastructure/controllers/store';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/texts/generic-error-text/generic-error-message';
import ScanPageScannedItem from '~/infrastructure/ui/pages/scan-page/component/scanned-item/scan-page-scanned-item';

const ScanPage = () => {
    const {
        NavigationStore: { navigate }
    } = useStore();

    const {
        handleBarCodeScanned,
        hasPermission,
        isScanned,
        inputBarCode,
        inputResponse,
        onPressHistoricalButton,
        onPressConsumedProductsButton,
        onPressSearchIcon,
        onPressScanAgain,
        scannedProduct,
        toggleFavourite
    } = useScanPageData(navigate);

    return (
        <KeyboardAwareScrollView nestedScrollEnabled bounces={false}>
            <View style={ScanPageStyle.background}>
                <ScanPageBlobsTop />
            </View>
            <View style={ScanPageStyle.container}>
                <GenericHeaderText
                    firstText={'Scan'}
                    secondText={'Veuillez scanner le code barre de votre produit'}
                    containerStyle={ScanPageStyle.headerContainer}
                />

                <View style={ScanPageStyle.scanContainer}>
                    <View style={ScanPageStyle.firstBoxScan} />
                    <View style={ScanPageStyle.secondBoxScan} />
                    <BarCodeScanner
                        onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned}
                        style={ScanPageStyle.scanBox}
                        renderToHardwareTextureAndroid={false}
                    />
                </View>

                <GenericErrorMessage
                    text={inputResponse.input != '' ? inputResponse.input : 'Accès caméra refusé'}
                    error={!hasPermission || inputResponse.input != ''}
                    style={ScanPageStyle.errorMessageContainer}
                />

                <Text style={{ ...CustomFontInterBold().text, ...ScanPageStyle.text }}>OU</Text>

                <View style={ScanPageStyle.inputContainer}>
                    <GenericInputWithSearchIcon
                        title={'Entrer le numéro du code barre'}
                        placeHolder={'3068320122946'}
                        onPressSearchIcon={onPressSearchIcon}
                        {...inputBarCode}
                    />
                    <GenericButton
                        title={'Historique des produits scannés'}
                        style={{
                            container: ScanPageStyle.buttonContainer,
                            text: ScanPageStyle.buttonText
                        }}
                        onPress={onPressHistoricalButton}
                    />
                    <GenericButton
                        title={'Votre liste des produits consommés'}
                        style={{
                            container: ScanPageStyle.buttonContainer,
                            text: ScanPageStyle.buttonText
                        }}
                        onPress={onPressConsumedProductsButton}
                    />
                </View>
            </View>

            {isScanned && (
                <ScanPageScannedItem
                    scannedProduct={scannedProduct}
                    toggleFavourite={toggleFavourite}
                    onPressScanAgain={onPressScanAgain}
                />
            )}
        </KeyboardAwareScrollView>
    );
};

export default observer(ScanPage);

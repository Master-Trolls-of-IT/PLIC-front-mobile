import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const ScanPage = () => {
    const {
        NavigationStore: { navigate }
    } = useStore();
    const {
        handleBarCodeScanned,
        hasPermission,
        reloadCircleAsset,
        scanned,
        inputBarCode,
        onPressHistoricalButton,
        onPressScanAgain
    } = useScanPageData(navigate);

    return (
        <KeyboardAwareScrollView nestedScrollEnabled bounces={false}>
            <View style={ScanPageStyle.container}>
                <View style={ScanPageStyle.background}>
                    <ScanPageBlobsTop />
                </View>

                <GenericHeaderText firstText={'Scan'} secondText={'Veuillez scanner le code barre de votre produit'} />

                <View style={ScanPageStyle.scanContainer}>
                    <View style={ScanPageStyle.firstBoxScan} />
                    <View style={ScanPageStyle.secondBoxScan} />
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={ScanPageStyle.scanBox}
                    />

                    {scanned && (
                        <TouchableOpacity onPress={onPressScanAgain} style={ScanPageStyle.reloadIconContainer}>
                            <CustomSvg asset={reloadCircleAsset} height={40} width={40} />
                        </TouchableOpacity>
                    )}
                </View>

                <GenericErrorMessage
                    text={'Accès caméra refusé'}
                    error={!hasPermission}
                    style={ScanPageStyle.errorMessageContainer}
                />

                <Text style={{ ...CustomFontInterBold().text, ...ScanPageStyle.text }}>OU</Text>

                <View style={ScanPageStyle.inputContainer}>
                    <GenericInputWithSearchIcon
                        title={'Entrer le numéro du code barre'}
                        placeHolder={'3068320122946'}
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
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default observer(ScanPage);

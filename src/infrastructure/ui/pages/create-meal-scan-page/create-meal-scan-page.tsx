import React from 'react';
import { Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { observer } from 'mobx-react';
import CreateMealScanPageStyle from '~/infrastructure/ui/pages/create-meal-scan-page/create-meal-scan-page-style';
import CreateMealScanPageBlobsTop from '~/infrastructure/ui/pages/create-meal-scan-page/component/create-meal-scan-page-blobs-top';
import CreateMealScanPageBlobsBottom from '~/infrastructure/ui/pages/create-meal-scan-page/component/create-meal-scan-page-blobs-bottom';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericInputWithSearchIcon from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon/generic-input-with-search-icon';
import useCreateMealScanPageData from '~/infrastructure/ui/pages/create-meal-scan-page/hooks';
import ScanPageStyle from '~/infrastructure/ui/pages/scan-page/scan-page-style';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/texts/generic-error-text/generic-error-message';
import ScannedItem from '~/infrastructure/ui/shared/component/scanned-item/scanned-item';

const CreateMealScanPage = () => {
    const {
        goBack,
        isScanned,
        onPressSearchIcon,
        handleBarCodeScanned,
        hasPermission,
        errorResponse,
        toggleFavourite,
        onPressScanAgain,
        scannedProduct,
        inputBarCode,
        setInputBarCode,
        onPressAddQuantity
    } = useCreateMealScanPageData();

    return (
        <View style={CreateMealScanPageStyle.container}>
            <View style={CreateMealScanPageStyle.background}>
                <CreateMealScanPageBlobsTop />
                <CreateMealScanPageBlobsBottom />
                <GenericBackArrowIcon goBack={goBack} />
            </View>

            <GenericHeaderText
                firstText={'Scan'}
                secondText={'Ajoutez un produit à votre repas'}
                containerStyle={CreateMealScanPageStyle.headerContainer}
            />

            <View style={CreateMealScanPageStyle.scanBox}>
                <BarCodeScanner
                    onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned}
                    style={CreateMealScanPageStyle.scan}
                    renderToHardwareTextureAndroid={false}
                />
                <View style={CreateMealScanPageStyle.scanContainerTopLeft}></View>
                <View style={CreateMealScanPageStyle.scanContainerTopRight}></View>
                <View style={CreateMealScanPageStyle.scanContainerBottomLeft}></View>
                <View style={CreateMealScanPageStyle.scanContainerBottomRight}></View>
            </View>

            <GenericErrorMessage
                text={errorResponse != '' ? errorResponse : 'Accès caméra refusé'}
                error={!hasPermission || errorResponse != ''}
                style={ScanPageStyle.errorMessageContainer}
            />

            <Text style={{ ...CreateMealScanPageStyle.text, ...CustomFontInterBold().text }}>OU</Text>

            <GenericInputWithSearchIcon
                title={'Entrer le numéro du code barre'}
                placeHolder={'3068320122946'}
                onPressSearchIcon={onPressSearchIcon}
                input={inputBarCode}
                dispatch={setInputBarCode}
                style={CreateMealScanPageStyle.inputContainer}
            />

            {isScanned && (
                <ScannedItem
                    scannedProduct={scannedProduct}
                    createMealProduct={true}
                    toggleFavourite={toggleFavourite}
                    onPressScanAgain={onPressScanAgain}
                    onPressAddQuantity={onPressAddQuantity}
                />
            )}
        </View>
    );
};

export default observer(CreateMealScanPage);

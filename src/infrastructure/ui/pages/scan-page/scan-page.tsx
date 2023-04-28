import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScanPageStyle from '~/infrastructure/ui/pages/scan-page/scan-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/generic-header-text/generic-header-text';
import ScanPageBlobsTop from '~/infrastructure/ui/pages/scan-page/component/background/scan-page-blobs-top';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useScanPageData from '~/infrastructure/ui/pages/scan-page/hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import GenericInputWithSearchIcon from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon/generic-input-with-search-icon';

const ScanPage: FunctionComponent<any> = ({ navigation }) => {
    const { inputBarCode, onPressHistoricalButton } = useScanPageData(navigation);

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
                </View>
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

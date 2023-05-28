import React, { FunctionComponent } from 'react';
import { View, Animated, Text } from 'react-native';
import { observer } from 'mobx-react';
import StartUpPageStyle from './startup-page-style';
import StartUpPageBlobsTop from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-top';
import StartUpPageBlobsBottom from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-bottom';
import StartUpPageLargeClassicLogo from '~/infrastructure/ui/pages/startup-page/component/startup-page-large-classic-logo';
import useStartupPageData from '~/infrastructure/ui/pages/startup-page/hooks';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import QuitApp from '~/infrastructure/ui/shared/helper/quit-app';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const StartUpPage: FunctionComponent<any> = ({ navigation }) => {
    const { slideAnimTop, slideAnimBottom, isErrorOnAPI, modalButtonStyle } = useStartupPageData(navigation.navigate);

    return (
        <View style={StartUpPageStyle.container}>
            <Animated.View style={[{ transform: [{ translateY: slideAnimTop }] }]}>
                <StartUpPageBlobsTop />
            </Animated.View>

            <StartUpPageLargeClassicLogo />

            <Animated.View style={[{ transform: [{ translateY: slideAnimBottom }] }]}>
                <StartUpPageBlobsBottom />
            </Animated.View>

            <CustomModal isVisible={isErrorOnAPI}>
                <Text style={{ ...StartUpPageStyle.modalText, ...CustomFontInterBold().text }}>
                    Impossible de se connecter à nos services
                </Text>

                <GenericButton title="Quitter" onPress={QuitApp} style={modalButtonStyle} />
            </CustomModal>
        </View>
    );
};

export default observer(StartUpPage);

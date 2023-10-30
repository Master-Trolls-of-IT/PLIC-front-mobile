import React from 'react';
import { Animated, View } from 'react-native';
import { observer } from 'mobx-react';
import StartUpPageStyle from './startup-page-style';
import StartUpPageBlobsTop from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-top';
import StartUpPageBlobsBottom from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-bottom';
import StartUpPageLargeClassicLogo from '~/infrastructure/ui/pages/startup-page/component/startup-page-large-classic-logo';
import useStartupPageData from '~/infrastructure/ui/pages/startup-page/hooks';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal/custom-modal';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import QuitApp from '~/infrastructure/ui/shared/helper/quit-app';
import useEffectOnce from '~/infrastructure/ui/shared/helper/use-effect-once';

const StartUpPage = () => {
    const { slideAnimTop, slideAnimBottom, isErrorOnAPI, setIsErrorOnAPI, modalButtonStyle, startupPageLifecycle } =
        useStartupPageData();

    useEffectOnce(() => {
        void startupPageLifecycle();
    });

    return (
        <View style={StartUpPageStyle.container}>
            <Animated.View style={[{ transform: [{ translateY: slideAnimTop }] }]}>
                <StartUpPageBlobsTop />
            </Animated.View>

            <StartUpPageLargeClassicLogo />

            <Animated.View style={[{ transform: [{ translateY: slideAnimBottom }] }]}>
                <StartUpPageBlobsBottom />
            </Animated.View>

            <CustomModal
                isVisible={isErrorOnAPI}
                dispatch={setIsErrorOnAPI}
                title={'Erreur de connexion aux services en ligne'}
                titleSize={25}>
                <GenericButton title="Quitter" onPress={QuitApp} style={modalButtonStyle} />
            </CustomModal>
        </View>
    );
};

export default observer(StartUpPage);

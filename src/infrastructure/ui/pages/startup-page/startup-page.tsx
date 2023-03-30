import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import startupPageStyle from './startup-page-style';
import useStartupPageService from '~/application/page-service/startup-page-service';
import StartupPageBlobsTop from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-top';
import StartupPageBlobsBottom from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-bottom';
import StartupPageLargeClassicLogo from '~/infrastructure/ui/pages/startup-page/component/startup-page-large-classic-logo';

const StartupPage: FunctionComponent<any> = ({ navigation }) => {
    useStartupPageService(navigation.navigate, 0);

    return (
        <View style={startupPageStyle.container}>
            <StartupPageBlobsTop />
            <StartupPageLargeClassicLogo />
            <StartupPageBlobsBottom />
        </View>
    );
};

export default StartupPage;

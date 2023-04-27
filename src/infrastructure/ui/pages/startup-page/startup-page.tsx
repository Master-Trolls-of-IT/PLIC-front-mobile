import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import StartUpPageStyle from './startup-page-style';
import useStartUpPageService from '~/application/page-service/startup-page-service';
import StartUpPageBlobsTop from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-top';
import StartUpPageBlobsBottom from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-bottom';
import StartUpPageLargeClassicLogo from '~/infrastructure/ui/pages/startup-page/component/startup-page-large-classic-logo';

const StartUpPage: FunctionComponent<any> = ({ navigation }) => {
    useStartUpPageService(navigation.navigate, 2000);

    return (
        <View style={StartUpPageStyle.container}>
            <StartUpPageBlobsTop />
            <StartUpPageLargeClassicLogo />
            <StartUpPageBlobsBottom />
        </View>
    );
};

export default StartUpPage;

import React, { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import StartUpPageStyle from './startup-page-style';
import useStartUpPageService from '~/application/page-service/startup-page-service';
import StartUpPageBlobsTop from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-top';
import StartUpPageBlobsBottom from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-bottom';
import StartUpPageLargeClassicLogo from '~/infrastructure/ui/pages/startup-page/component/startup-page-large-classic-logo';
import { useStore } from '~/infrastructure/controllers/store';

const StartUpPage: FunctionComponent<any> = ({ navigation }) => {
    const {
        NavigationStore: { setNavigate, setGoBack }
    } = useStore();

    useEffect(() => {
        setNavigate(navigation.navigate);
        setGoBack(navigation.goBack);
    }, [navigation.goBack, navigation.navigate, setGoBack, setNavigate]);

    useStartUpPageService(2500, navigation.navigate);

    return (
        <View style={StartUpPageStyle.container}>
            <StartUpPageBlobsTop />
            <StartUpPageLargeClassicLogo />
            <StartUpPageBlobsBottom />
        </View>
    );
};

export default observer(StartUpPage);

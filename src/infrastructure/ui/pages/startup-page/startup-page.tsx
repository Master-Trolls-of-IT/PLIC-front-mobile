import React, { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import StartUpPageStyle from './startup-page-style';
import useStartUpPageService from '~/application/page-service/startup-page-service';
import StartUpPageBlobsTop from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-top';
import StartUpPageBlobsBottom from '~/infrastructure/ui/pages/startup-page/component/startup-page-blobs-bottom';
import StartUpPageLargeClassicLogo from '~/infrastructure/ui/pages/startup-page/component/startup-page-large-classic-logo';
import { useStore } from '~/infrastructure/controllers/store';
import useEffectOnce from '~/infrastructure/ui/shared/helper/useEffectOnce';

const StartUpPage: FunctionComponent<any> = ({ navigation }) => {
    const {
        NavigationStore: { setNavigate, goBack }
    } = useStore();

    useEffect(() => {
        setNavigate(navigation.navigate);
        goBack();
    }, [navigation.goBack, navigation.navigate, goBack, setNavigate]);

    useStartUpPageService(2000);

    return (
        <View style={StartUpPageStyle.container}>
            <StartUpPageBlobsTop />
            <StartUpPageLargeClassicLogo />
            <StartUpPageBlobsBottom />
        </View>
    );
};

export default StartUpPage;

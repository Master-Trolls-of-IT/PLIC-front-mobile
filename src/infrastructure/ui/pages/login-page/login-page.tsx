import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import loginPageStyle from '~/infrastructure/ui/pages/login-page/login-page-style';
import LoginPageBlobsBottom from '~/infrastructure/ui/pages/login-page/component/login-page-blobs-bottom';
import LoginPageBlobsTop from '~/infrastructure/ui/pages/login-page/component/login-page-blobs-top';
import LoginPageTreeClassicLogo from '~/infrastructure/ui/pages/login-page/component/tree-classic-logo';
import LoginPageHeaderText from '~/infrastructure/ui/pages/login-page/component/login-page-header-text';

const LoginPage: FunctionComponent<any> = ({ navigation }) => {
    return (
        <View>
            <View style={loginPageStyle.container}>
                <LoginPageBlobsTop />
                <LoginPageBlobsBottom />
                <LoginPageTreeClassicLogo />
            </View>
            <View>
                <LoginPageHeaderText />
            </View>
        </View>
    );
};

export default LoginPage;

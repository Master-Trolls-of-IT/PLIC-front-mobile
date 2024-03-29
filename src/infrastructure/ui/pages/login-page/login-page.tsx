import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import LoginPageStyle from '~/infrastructure/ui/pages/login-page/login-page-style';
import LoginPageBlobsBottom from '~/infrastructure/ui/pages/login-page/component/background/login-page-blobs-bottom';
import LoginPageBlobsTop from '~/infrastructure/ui/pages/login-page/component/background/login-page-blobs-top';
import LoginPageTreeClassicLogo from '~/infrastructure/ui/pages/login-page/component/background/tree-classic-logo';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useLoginPageData from '~/infrastructure/ui/pages/login-page/hooks';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/texts/generic-error-text/generic-error-message';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';

const LoginPage = () => {
    const { inputEmail, inputPassword, errorEnabled, onPressSignUp, onPressLogin, loader, selectRightErrorMessage } =
        useLoginPageData();

    return (
        <View style={LoginPageStyle.container}>
            <View style={LoginPageStyle.background}>
                <LoginPageBlobsTop />
                <LoginPageBlobsBottom />
                <LoginPageTreeClassicLogo />
            </View>

            <View style={LoginPageStyle.contentContainer}>
                <GenericHeaderText
                    firstText={'Bonjour,'}
                    secondText={'Veuillez vous connecter'}
                    containerStyle={LoginPageStyle.headerContainer}
                />

                <GenericErrorMessage
                    text={selectRightErrorMessage()}
                    style={LoginPageStyle.errorMessage}
                    error={errorEnabled}
                />

                <View style={LoginPageStyle.input}>
                    <GenericInput
                        title={'E-mail'}
                        type={InputEnum.Email}
                        placeHolder={'mail@example.com'}
                        {...inputEmail}
                    />
                    <GenericInput
                        title={'Mot de passe'}
                        type={InputEnum.Password}
                        placeHolder={'********'}
                        {...inputPassword}
                    />
                    <View style={LoginPageStyle.buttonContainer}>
                        <GenericButton
                            title={"S'inscrire"}
                            style={{
                                container: LoginPageStyle.brownButtonContainer,
                                text: LoginPageStyle.brownButtonText
                            }}
                            onPress={onPressSignUp}
                        />
                        <GenericButton
                            title={'Se connecter'}
                            style={{
                                container: LoginPageStyle.greenButtonContainer,
                                text: LoginPageStyle.greenButtonText
                            }}
                            loader={loader}
                            onPress={onPressLogin}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default observer(LoginPage);

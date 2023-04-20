import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import loginPageStyle from '~/infrastructure/ui/pages/login-page/login-page-style';
import LoginPageStyle from '~/infrastructure/ui/pages/login-page/login-page-style';
import LoginPageBlobsBottom from '~/infrastructure/ui/pages/login-page/component/background/login-page-blobs-bottom';
import LoginPageBlobsTop from '~/infrastructure/ui/pages/login-page/component/background/login-page-blobs-top';
import LoginPageTreeClassicLogo from '~/infrastructure/ui/pages/login-page/component/background/tree-classic-logo';
import GenericInput from '~/infrastructure/ui/shared/component/generic-input/generic-input';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useLoginPageData from '~/infrastructure/ui/pages/login-page/hooks';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/generic-error-text/generic-error-message';
import GenericHeaderText from '~/infrastructure/ui/shared/component/generic-header-text/generic-header-text';

const LoginPage: FunctionComponent<any> = ({ navigation }) => {
    const { inputEmail, inputPassword, errorOnLogin, onPressSignUp, onPressLogin } = useLoginPageData(navigation);

    return (
        <View>
            <View style={loginPageStyle.background}>
                <LoginPageBlobsTop />
                <LoginPageBlobsBottom />
                <LoginPageTreeClassicLogo />
            </View>
            <View>
                <GenericHeaderText firstText={'Bonjour,'} secondText={'Veuillez vous connecter'} />
                <View style={LoginPageStyle.input}>
                    <GenericErrorMessage
                        text={"L'e-mail ou le mot de passe est incorrect."}
                        style={LoginPageStyle.errorMessage}
                        error={errorOnLogin}
                    />
                    <GenericInput
                        title={'E-mail'}
                        type={InputTypeEnum.Email}
                        placeHolder={'mail@example.com'}
                        {...inputEmail}
                    />
                    <GenericInput
                        title={'Mot de passe'}
                        type={InputTypeEnum.Password}
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
                            onPress={onPressLogin}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LoginPage;

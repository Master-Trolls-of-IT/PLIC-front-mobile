import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import SignUpPageStyle from '~/infrastructure/ui/pages/sign-up-page/sign-up-page-style';
import SignUpPageBlobsTop from '~/infrastructure/ui/pages/sign-up-page/component/background/sign-up-page-blobs-top';
import SignUpPageTreeClassicLogo from '~/infrastructure/ui/pages/sign-up-page/component/background/tree-classic-logo';
import GenericHeaderText from '~/infrastructure/ui/shared/component/generic-header-text/generic-header-text';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import GenericInput from '~/infrastructure/ui/shared/component/generic-input/generic-input';
import useSignUpPageData from '~/infrastructure/ui/pages/sign-up-page/hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';

const SignUpPage: FunctionComponent<any> = ({ navigation }) => {
    const {
        inputBirthdate,
        inputName,
        inputSize,
        inputSportActivity,
        inputEmail,
        inputPassword,
        inputWeight,
        onPressGoBack,
        onPressValidate
    } = useSignUpPageData(navigation);

    return (
        <View>
            <View style={SignUpPageStyle.background}>
                <SignUpPageBlobsTop />
                <SignUpPageTreeClassicLogo />
            </View>
            <View>
                <GenericHeaderText
                    firstText={'Dites nous en plus,'}
                    secondText={'Veuillez remplir les champs suivants'}
                />
                <View style={SignUpPageStyle.input}>
                    <GenericInput
                        title={'datenaissance et genre'}
                        type={InputTypeEnum.Text}
                        placeHolder={'salut'}
                        {...inputBirthdate}
                    />
                    <GenericInput title={'Prénom'} type={InputTypeEnum.Text} placeHolder={'Alexandre'} {...inputName} />
                    <GenericInput
                        title={'deuieme two input'}
                        type={InputTypeEnum.Text}
                        placeHolder={'salut'}
                        {...inputWeight}
                    />
                    <GenericInput
                        title={"Fréquence d'activité sportive"}
                        type={InputTypeEnum.Number}
                        placeHolder={'2'}
                        {...inputSportActivity}
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
                    <GenericInput
                        title={'Confirmer le mot de passe'}
                        type={InputTypeEnum.Password}
                        placeHolder={'********'}
                        {...inputPassword}
                    />
                    <View style={SignUpPageStyle.buttonContainer}>
                        <GenericButton
                            title={'Retour'}
                            style={{
                                container: SignUpPageStyle.brownButtonContainer,
                                text: SignUpPageStyle.brownButtonText
                            }}
                            onPress={onPressGoBack}
                        />
                        <GenericButton
                            title={'Valider'}
                            style={{
                                container: SignUpPageStyle.greenButtonContainer,
                                text: SignUpPageStyle.greenButtonText
                            }}
                            onPress={onPressValidate}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SignUpPage;

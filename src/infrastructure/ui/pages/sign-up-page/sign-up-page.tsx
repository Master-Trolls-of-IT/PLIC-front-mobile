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
import GenericDropdown from '~/infrastructure/ui/shared/component/generic-dropdown/generic-dropdown';
import GenericBirthdate from '~/infrastructure/ui/shared/component/generique-birthdate/generic-birthdate';
import LoginPageStyle from '~/infrastructure/ui/pages/login-page/login-page-style';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/generic-error-text/generic-error-message';

const SignUpPage: FunctionComponent<any> = ({ navigation }) => {
    const {
        inputBirthdate,
        inputName,
        inputSize,
        inputSportActivity,
        inputEmail,
        inputPassword,
        inputWeight,
        inputAge,
        inputGender,
        onPressGoBack,
        onPressValidate,
        errorOnSignUp
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
                    <GenericErrorMessage
                        text={'Un des champ est mal rempli'}
                        style={LoginPageStyle.errorMessage}
                        error={errorOnSignUp}
                    />
                    <View style={SignUpPageStyle.twoInputs}>
                        <GenericDropdown
                            title={'Genre'}
                            options={[
                                { label: 'Homme', value: '0' },
                                { label: 'Femme', value: '1' },
                                { label: 'Autre', value: '2' }
                            ]}
                            {...inputGender}
                            style={{ flex: 1 }}
                        />
                        <GenericBirthdate
                            title={'Date de naissance'}
                            placeHolder={'16/11/2000'}
                            {...inputBirthdate}
                            style={{ flex: 1.2 }}
                        />
                    </View>
                    <GenericInput title={'Prénom'} type={InputTypeEnum.Text} placeHolder={'Alexandre'} {...inputName} />
                    <View style={SignUpPageStyle.twoInputs}>
                        <GenericInput
                            title={'Poids'}
                            type={InputTypeEnum.Number}
                            placeHolder={'75'}
                            {...inputWeight}
                            style={{ flex: 1 }}
                        />
                        <GenericInput
                            title={'Taille'}
                            type={InputTypeEnum.Number}
                            placeHolder={'176'}
                            {...inputSize}
                            style={{ flex: 1 }}
                        />
                    </View>
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

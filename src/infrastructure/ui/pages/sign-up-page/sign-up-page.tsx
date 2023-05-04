import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GenericInputBirthdate from '~/infrastructure/ui/shared/component/inputs/generic-input-birthdate/generic-input-birthdate';
import SignUpPageStyle from '~/infrastructure/ui/pages/sign-up-page/sign-up-page-style';
import SignUpPageBlobsTop from '~/infrastructure/ui/pages/sign-up-page/component/background/sign-up-page-blobs-top';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import useSignUpPageData from '~/infrastructure/ui/pages/sign-up-page/hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import GenericDropdown from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown';
import GenericInputWithEndText from '~/infrastructure/ui/shared/component/inputs/generic-input-with-end-text/generic-input-with-end-text';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/texts/generic-error-text/generic-error-message';
import TreeClassicLogo from '~/infrastructure/ui/pages/sign-up-page/component/background/tree-classic-logo';

const SignUpPage: FunctionComponent<any> = ({ navigation }) => {
    const {
        errorOnSignUp,
        errorOnDataBase,
        inputBirthdate,
        inputEmail,
        inputGender,
        inputName,
        inputPassword,
        inputHeight,
        inputSportActivity,
        inputValidPassword,
        inputWeight,
        onPressGoBack,
        onPressValidate
    } = useSignUpPageData(navigation);

    return (
        <KeyboardAwareScrollView nestedScrollEnabled bounces={false}>
            <View style={SignUpPageStyle.container}>
                <View style={SignUpPageStyle.background}>
                    <SignUpPageBlobsTop />
                    <TreeClassicLogo />
                </View>

                <View style={SignUpPageStyle.contentContainer}>
                    <GenericHeaderText
                        firstText={'Dites nous en plus,'}
                        secondText={'Veuillez remplir les champs suivants'}
                    />

                    <GenericErrorMessage
                        text={'Un champ est invalide ou les mots de passe ne sont pas identiques'}
                        style={SignUpPageStyle.errorMessage}
                        error={errorOnSignUp}
                    />

                    <View style={SignUpPageStyle.input}>
                        <View style={SignUpPageStyle.genderAndBirthField}>
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
                            <GenericInputBirthdate
                                title={'Date de naissance'}
                                placeHolder={'16/11/2000'}
                                {...inputBirthdate}
                                style={{ flex: 1.5 }}
                            />
                        </View>
                        <GenericInput title={'Prénom'} type={InputEnum.Name} placeHolder={'Alexandre'} {...inputName} />
                        <View style={SignUpPageStyle.weightAndHeightField}>
                            <GenericInputWithEndText
                                title={'Poids'}
                                endText={'kg'}
                                type={InputEnum.Number}
                                placeHolder={'75'}
                                {...inputWeight}
                                style={{ flex: 1 }}
                            />
                            <GenericInputWithEndText
                                title={'Taille'}
                                endText={'cm'}
                                type={InputEnum.Number}
                                placeHolder={'176'}
                                {...inputHeight}
                                style={{ flex: 1 }}
                            />
                        </View>
                        <GenericInputWithEndText
                            title={"Fréquence d'activité sportive"}
                            endText={'fois par semaine en moyenne'}
                            type={InputEnum.Number}
                            placeHolder={'2'}
                            {...inputSportActivity}
                        />
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
                        <GenericInput
                            title={'Confirmer le mot de passe'}
                            type={InputEnum.Password}
                            placeHolder={'********'}
                            {...inputValidPassword}
                        />
                    </View>
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
        </KeyboardAwareScrollView>
    );
};

export default SignUpPage;

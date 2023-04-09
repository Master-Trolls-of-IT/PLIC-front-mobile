import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import SignUpPageStyle from '~/infrastructure/ui/pages/sign-up-page/sign-up-page-style';
import SignUpPageBlobsTop from '~/infrastructure/ui/pages/sign-up-page/component/background/sign-up-page-blobs-top';
import SignUpPageTreeClassicLogo from '~/infrastructure/ui/pages/sign-up-page/component/background/tree-classic-logo';
import GenericHeaderText from '~/infrastructure/ui/shared/component/generic-header-text/generic-header-text';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import GenericDropDown from '~/infrastructure/ui/shared/component/generic-dropdown/generic-dropdown';
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
        onPressSignUp,
        onPressLogin
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
                <View style={SignUpPageStyle.inputContainer}>
                    <View style={SignUpPageStyle.twoInputs}>
                        {/* Add two input on same line */}
                        <View style={SignUpPageStyle.leftInput}>
                            <GenericDropDown title={'Genre'} type={InputTypeEnum.Genre} placeHolder={'Homme'} />
                        </View>
                        <View style={SignUpPageStyle.rightInput}>
                            <GenericInput
                                title={'Date de naissance'}
                                type={InputTypeEnum.Birthdate}
                                placeHolder={'04/12/2001'}
                                {...inputBirthdate}
                            />
                        </View>
                    </View>
                    <View style={SignUpPageStyle.input}>
                        <GenericInput
                            title={'Prénom'}
                            type={InputTypeEnum.Name}
                            placeHolder={'Alexandre'}
                            {...inputName}
                        />
                    </View>
                    <View style={SignUpPageStyle.twoInputs}>
                        {/* Add two input on same line */}
                        <View style={SignUpPageStyle.leftInput}>
                            <GenericInput
                                title={'Poids (Kg)'}
                                type={InputTypeEnum.Number}
                                placeHolder={'75'}
                                {...inputWeight}
                            />
                        </View>
                        <View style={SignUpPageStyle.rightInput}>
                            <GenericInput
                                title={'Taille (Cm)'}
                                type={InputTypeEnum.Number}
                                placeHolder={'175'}
                                {...inputSize}
                            />
                        </View>
                    </View>
                    <View style={SignUpPageStyle.input}>
                        <GenericInput
                            title={"Fréquence d'activité sportive"}
                            type={InputTypeEnum.sportActivity}
                            placeHolder={'2'}
                            {...inputSportActivity}
                        />
                    </View>
                    <View style={SignUpPageStyle.input}>
                        <GenericInput
                            title={'Email'}
                            type={InputTypeEnum.Email}
                            placeHolder={'mail@example.com'}
                            {...inputEmail}
                        />
                    </View>
                    <View style={SignUpPageStyle.input}>
                        <GenericInput
                            title={'Mot de passe'}
                            type={InputTypeEnum.Password}
                            placeHolder={'********'}
                            {...inputPassword}
                        />
                    </View>
                    <View style={SignUpPageStyle.input}>
                        <GenericInput
                            title={'Confirmer le mot de passe'}
                            type={InputTypeEnum.Password}
                            placeHolder={'********'}
                            {...inputPassword}
                        />

                        <View style={SignUpPageStyle.twoInputs}>
                            <GenericButton
                                title={"S'inscrire"}
                                style={{
                                    container: SignUpPageStyle.brownButtonContainer,
                                    text: SignUpPageStyle.brownButtonText
                                }}
                                onPress={onPressSignUp}
                            />
                            <GenericButton
                                title={'Se connecter'}
                                style={{
                                    container: SignUpPageStyle.greenButtonContainer,
                                    text: SignUpPageStyle.greenButtonText
                                }}
                                onPress={onPressLogin}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SignUpPage;

import { ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { observer } from 'mobx-react';
import SignUpPageBlobsTop from '~/infrastructure/ui/pages/sign-up-page/component/background/sign-up-page-blobs-top';
import TreeClassicLogo from '~/infrastructure/ui/pages/sign-up-page/component/background/tree-classic-logo';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import GenericDropdown from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown';
import GenericInputWithEndText from '~/infrastructure/ui/shared/component/inputs/generic-input-with-end-text/generic-input-with-end-text';
import usePersonalDataPageData from '~/infrastructure/ui/pages/personal-data-page/hooks';
import PersonalDataPageStyle from '~/infrastructure/ui/pages/personal-data-page/personal-data-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal/custom-modal';

const PersonalDataPage = () => {
    const {
        inputUsername,
        inputBirthDate,
        inputGender,
        inputHeight,
        inputWeight,
        inputSportivness,
        inputEmail,
        inputPassword,
        profileAsset,
        editAsset,
        cancelButtonStyle,
        confirmButtonStyle,
        handleDoubleCheckConfirm,
        handleDoubleCheckCancel,
        isConfirmModalOpen,
        setIsConfirmModalOpen,
        handleConfirmButton,
        isSuccessModalOpen,
        handleCloseSuccessModal,
        isFailModalOpen,
        setIsFailModalOpen,
        setIsChangesModalOpen,
        isChangesModalOpen,
        handleCancelButton
    } = usePersonalDataPageData();
    return (
        <KeyboardAwareScrollView nestedScrollEnabled bounces={true}>
            <View style={PersonalDataPageStyle.container}>
                <View style={PersonalDataPageStyle.background}>
                    <SignUpPageBlobsTop />
                    <TreeClassicLogo />
                </View>
                <ScrollView style={PersonalDataPageStyle.contentContainer}>
                    <GenericHeaderText
                        firstText="Vos informations,"
                        secondText="Modifiez vos informations personnelles"
                        containerStyle={PersonalDataPageStyle.headerContainer}
                    />
                    <View style={PersonalDataPageStyle.content}>
                        <View style={PersonalDataPageStyle.firstLine}>
                            <View style={PersonalDataPageStyle.profilePicture}>
                                <CustomSvg asset={profileAsset} width={120} height={120} />
                                <TouchableOpacity>
                                    <CustomSvg
                                        asset={editAsset}
                                        width={40}
                                        height={40}
                                        style={PersonalDataPageStyle.profilePictureEdit}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={PersonalDataPageStyle.nameAndBirth}>
                                <GenericInput type={InputEnum.Name} {...inputUsername} title="Prénom" />
                                <GenericInput
                                    type={InputEnum.Birthdate}
                                    {...inputBirthDate}
                                    title="Date de naissance"
                                />
                            </View>
                        </View>
                        <View style={PersonalDataPageStyle.secondLine}>
                            <GenericDropdown
                                title={'Genre'}
                                options={[
                                    { label: 'Homme', value: '0' },
                                    { label: 'Femme', value: '1' },
                                    { label: 'Autre', value: '2' }
                                ]}
                                {...inputGender}
                                style={{ flex: 1.5 }}
                            />
                            <GenericInputWithEndText
                                title={'Poids'}
                                endText={'kg'}
                                type={InputEnum.Number}
                                placeHolder={inputWeight.input}
                                {...inputWeight}
                                style={{ flex: 1 }}
                            />
                            <GenericInputWithEndText
                                title={'Taille'}
                                endText={'cm'}
                                type={InputEnum.Number}
                                placeHolder={inputHeight.input}
                                {...inputHeight}
                                style={{ flex: 1 }}
                            />
                        </View>
                        <GenericInputWithEndText
                            title={"Fréquence d'activité sportive"}
                            endText={'fois par semaine en moyenne'}
                            type={InputEnum.Number}
                            placeHolder={inputSportivness.input}
                            {...inputSportivness}
                        />
                        <GenericInput
                            title={'E-mail'}
                            type={InputEnum.Email}
                            placeHolder={inputEmail.input}
                            {...inputEmail}
                        />
                        <GenericInput
                            title={'Modifier le mot de passe'}
                            type={InputEnum.Password}
                            placeHolder={'********'}
                            {...inputPassword}
                        />
                        <GenericInput
                            title={'Confirmer le mot de passe'}
                            type={InputEnum.Password}
                            placeHolder={'********'}
                            {...inputPassword}
                        />
                    </View>
                    <View style={PersonalDataPageStyle.footer}>
                        <GenericButton title="Annuler" onPress={handleCancelButton} style={cancelButtonStyle} />
                        <GenericButton title="Valider" onPress={handleConfirmButton} style={confirmButtonStyle} />
                    </View>
                    <CustomModal
                        isVisible={isConfirmModalOpen}
                        dispatch={setIsConfirmModalOpen}
                        title="Confirmer les changements"
                        titleSize={25}>
                        <GenericButton
                            title="Oui"
                            onPress={handleDoubleCheckConfirm}
                            style={{
                                container: PersonalDataPageStyle.modalButton,
                                text: PersonalDataPageStyle.modalTextButton
                            }}
                        />
                        <GenericButton
                            title="Annuler"
                            onPress={handleDoubleCheckCancel}
                            style={{
                                container: PersonalDataPageStyle.modalButton,
                                text: PersonalDataPageStyle.modalTextButton
                            }}
                        />
                    </CustomModal>
                    <CustomModal
                        isVisible={isSuccessModalOpen}
                        dispatch={handleCloseSuccessModal}
                        title="Changements éffectués avec succès"
                        titleSize={22}
                    />
                    <CustomModal
                        isVisible={isFailModalOpen}
                        dispatch={setIsFailModalOpen}
                        title="Echec de la modification"
                        titleSize={22}
                    />
                    <CustomModal
                        isVisible={isChangesModalOpen}
                        dispatch={setIsChangesModalOpen}
                        title="Aucun changements"
                        titleSize={22}
                    />
                </ScrollView>
            </View>
        </KeyboardAwareScrollView>
    );
};
export default observer(PersonalDataPage);

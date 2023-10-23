import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { err } from 'react-native-svg/lib/typescript/xml';
import SettingsPageBlobsTop from '~/infrastructure/ui/pages/settings-page/component/background/settings-page-blobs-top';
import SettingsPageBlobsBottom from '~/infrastructure/ui/pages/settings-page/component/background/settings-page-blobs-bottom';
import LoginPageTreeClassicLogo from '~/infrastructure/ui/pages/settings-page/component/background/tree-classic-logo';
import SettingsPageStyle from '~/infrastructure/ui/pages/settings-page/settings-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import { useStore } from '~/infrastructure/controllers/store';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useSettingsPageData from '~/infrastructure/ui/pages/settings-page/hooks';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import StartupPageStyle from '~/infrastructure/ui/pages/startup-page/startup-page-style';
import LoginPageStyle from '~/infrastructure/ui/pages/login-page/login-page-style';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/texts/generic-error-text/generic-error-message';

const SettingsPage = () => {
    const {
        NavigationStore: { goBack }
    } = useStore();
    const {
        logoutButtonStyle,
        deleteButtonStyle,
        arrowLinkAsset,
        navigateToPersonalDataPage,
        navigateToWidgetPage,
        validateDeleteAccount1,
        validateDeleteAccount2,
        setValidateDeleteAccount1,
        setValidateDeleteAccount2,
        onDeleteAccountPress,
        onDeleteAccountModalPress,
        onDeleteConfirm,
        onGoSettings,
        inputPassword,
        loader,
        error,
        errorMessage
    } = useSettingsPageData();
    return (
        <View style={SettingsPageStyle.container}>
            <View style={SettingsPageStyle.background}>
                <SettingsPageBlobsTop />
                <SettingsPageBlobsBottom />
                <LoginPageTreeClassicLogo />
                <GenericBackArrowIcon goBack={goBack} />
            </View>

            <View style={SettingsPageStyle.contentContainer}>
                <GenericHeaderText
                    firstText="Paramètres,"
                    secondText="Configurez votre expérience"
                    containerStyle={SettingsPageStyle.headerContainer}
                />
                <View style={SettingsPageStyle.links}>
                    <View style={SettingsPageStyle.link}>
                        <TouchableOpacity onPress={navigateToPersonalDataPage} style={SettingsPageStyle.touchableLink}>
                            <Text style={{ ...CustomFontInterBold().text, ...SettingsPageStyle.linkText }}>
                                Informations personnelles
                            </Text>
                            <CustomSvg asset={arrowLinkAsset} height={20} width={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={SettingsPageStyle.link}>
                        <TouchableOpacity onPress={navigateToWidgetPage} style={SettingsPageStyle.touchableLink}>
                            <Text style={{ ...CustomFontInterBold().text, ...SettingsPageStyle.linkText }}>
                                Personnaliser les widgets
                            </Text>
                            <CustomSvg asset={arrowLinkAsset} height={20} width={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={SettingsPageStyle.link}>
                        <TouchableOpacity style={SettingsPageStyle.touchableLink}>
                            <Text style={{ ...CustomFontInterBold().text, ...SettingsPageStyle.linkText }}>
                                Proposez un nouveau produit
                            </Text>
                            <CustomSvg asset={arrowLinkAsset} height={20} width={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={SettingsPageStyle.link}>
                        <TouchableOpacity style={SettingsPageStyle.touchableLink}>
                            <Text style={{ ...CustomFontInterBold().text, ...SettingsPageStyle.linkText }}>
                                Signaler un problème
                            </Text>
                            <CustomSvg asset={arrowLinkAsset} height={20} width={20} />
                        </TouchableOpacity>
                    </View>
                    <GenericButton title="Se déconnecter" onPress={() => {}} style={logoutButtonStyle} />
                    <GenericButton
                        title="Supprimer le compte"
                        onPress={onDeleteAccountPress}
                        style={deleteButtonStyle}
                    />
                </View>
            </View>
            <CustomModal
                isVisible={validateDeleteAccount1}
                dispatch={setValidateDeleteAccount1}
                title="Suppression de compte"
                titleSize={25}
                customStyle={true}>
                <View style={SettingsPageStyle.deleteAccount1TextContainer}>
                    <Text style={SettingsPageStyle.deleteAccount1Text}>
                        Vous êtes sur le point de supprimer votre compte. Veuillez entrer votre mot de passe ci-dessous
                        pour confirmer:
                    </Text>
                </View>
                <GenericInput type={InputEnum.Password} placeHolder={'********'} {...inputPassword} />
                <GenericErrorMessage text={errorMessage} style={SettingsPageStyle.errorMessage} error={error} />
                <View style={SettingsPageStyle.buttonContainer}>
                    <GenericButton
                        title="Annuler"
                        onPress={onGoSettings}
                        style={{
                            container: SettingsPageStyle.goBackButtonStyle,
                            text: SettingsPageStyle.goBackButtonTextStyle
                        }}
                    />
                    <GenericButton
                        title="Confirmer"
                        onPress={onDeleteAccountModalPress}
                        loader={loader}
                        style={{
                            container: SettingsPageStyle.confirmButtonStyle,
                            text: SettingsPageStyle.confirmButtonTextStyle
                        }}
                    />
                </View>
            </CustomModal>
            <CustomModal
                isVisible={validateDeleteAccount2}
                dispatch={setValidateDeleteAccount2}
                title="Suppression de compte"
                titleSize={25}
                customStyle={true}>
                <View style={SettingsPageStyle.deleteAccount1TextContainer}>
                    <Text style={SettingsPageStyle.deleteAccount1Text}>
                        Êtes-vous absolument certain de vouloir supprimer votre compte ? Cette action est irréversible.
                    </Text>
                </View>
                <View style={SettingsPageStyle.buttonContainer}>
                    <GenericButton
                        title="Annuler"
                        onPress={onGoSettings}
                        style={{
                            container: SettingsPageStyle.goBackButtonStyle,
                            text: SettingsPageStyle.goBackButtonTextStyle
                        }}
                    />
                    <GenericButton
                        title="Confirmer"
                        onPress={onDeleteConfirm}
                        style={{
                            container: SettingsPageStyle.confirmButtonStyle,
                            text: SettingsPageStyle.confirmButtonTextStyle
                        }}
                    />
                </View>
            </CustomModal>
        </View>
    );
};

export default SettingsPage;

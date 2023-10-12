import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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

const SettingsPage = () => {
    const {
        NavigationStore: { goBack }
    } = useStore();
    const { logoutButtonStyle, deleteButtonStyle, arrowLinkAsset, navigateToPersonalDataPage } = useSettingsPageData();
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
                        <TouchableOpacity style={SettingsPageStyle.touchableLink}>
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
                    <GenericButton title="Supprimer le compte" onPress={() => {}} style={deleteButtonStyle} />
                </View>
            </View>
        </View>
    );
};

export default SettingsPage;

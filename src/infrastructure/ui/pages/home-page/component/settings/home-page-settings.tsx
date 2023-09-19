import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Animated, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HomePageSettingsStyle from '~/infrastructure/ui/pages/home-page/component/settings/home-page-settings-style';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import useHomePageSettingsData from '~/infrastructure/ui/pages/home-page/component/settings/hooks';
import GenericDropdown from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown';
import GenericInputWithEndText from '~/infrastructure/ui/shared/component/inputs/generic-input-with-end-text/generic-input-with-end-text';
import homePageSettingsStyle from '~/infrastructure/ui/pages/home-page/component/settings/home-page-settings-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';

const HomePageSettings = () => {
    const {
        inputUsername,
        inputBirthDate,
        inputGender,
        inputHeight,
        inputWeight,
        inputSportivness,
        inputEmail,
        inputPassword,
        handleCloseSettings,
        profileAsset,
        editAsset,
        logoutButtonStyle,
        deleteButtonStyle,
        handleScrollBeginDrag,
        handleScrollEndDrag,
        handleScroll
    } = useHomePageSettingsData();

    return (
        <KeyboardAwareScrollView
            nestedScrollEnabled
            style={HomePageSettingsStyle.settingsModal}
            onScrollBeginDrag={handleScrollBeginDrag}
            onScroll={handleScroll}
            onScrollEndDrag={handleScrollEndDrag}>
            <View style={HomePageSettingsStyle.header}>
                <Text style={{ ...CustomFontInterBold().text, ...HomePageSettingsStyle.title }}>Paramètre</Text>
                <Text
                    style={{ ...CustomFontInterBold().text, ...HomePageSettingsStyle.exit }}
                    onPress={handleCloseSettings}>
                    OK
                </Text>
            </View>
            <View style={HomePageSettingsStyle.content}>
                <View style={HomePageSettingsStyle.firstLine}>
                    <View style={HomePageSettingsStyle.profilePicture}>
                        <CustomSvg asset={profileAsset} width={120} height={120} />
                        <CustomSvg
                            asset={editAsset}
                            width={40}
                            height={40}
                            style={HomePageSettingsStyle.profilePictureEdit}
                        />
                    </View>
                    <View style={HomePageSettingsStyle.nameAndBirth}>
                        <GenericInput type={InputEnum.Name} {...inputUsername} title="Prénom" />
                        <GenericInput type={InputEnum.Birthdate} {...inputBirthDate} title="Date de naissance" />
                    </View>
                </View>
                <View style={HomePageSettingsStyle.secondLine}>
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
                    placeHolder={'2'}
                    {...inputSportivness}
                />
                <GenericInput title={'E-mail'} type={InputEnum.Email} placeHolder={inputEmail.input} {...inputEmail} />
                <GenericInput
                    title={'Mot de passe'}
                    type={InputEnum.Password}
                    placeHolder={'********'}
                    {...inputPassword}
                />
            </View>
            <View style={homePageSettingsStyle.footer}>
                <View>
                    <Text style={{ ...CustomFontInterBold().text, ...homePageSettingsStyle.footerText }}>
                        Afficher les calories
                    </Text>
                </View>
                <View>
                    <Text style={{ ...CustomFontInterBold().text, ...homePageSettingsStyle.footerText }}>
                        Personnaliser les widgets
                    </Text>
                </View>
                <View>
                    <Text style={{ ...CustomFontInterBold().text, ...homePageSettingsStyle.footerText }}>
                        Signaler un problème
                    </Text>
                </View>
                <GenericButton title="Se déconnecter" onPress={() => {}} style={logoutButtonStyle} />
                <GenericButton title="Supprimer le compte" onPress={() => {}} style={deleteButtonStyle} />
            </View>
        </KeyboardAwareScrollView>
    );
};

export default observer(HomePageSettings);

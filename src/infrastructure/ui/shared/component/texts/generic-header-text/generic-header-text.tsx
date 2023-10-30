import React from 'react';
import { Text, View } from 'react-native';
import { HeaderConfigProps } from '~/domain/interfaces/services/header-config-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular';
import GenericHeaderTextStyle from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text-style';
import HomePageNotificationButton from '~/infrastructure/ui/pages/home-page/component/buttons/home-page-notifications';
import HomePageSettingsButton from '~/infrastructure/ui/pages/home-page/component/buttons/home-page-settings-button';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';

const GenericHeaderText = ({
    firstText = 'Header Bold',
    secondText = 'Header Regular',
    showHomePageHeader = false,
    containerStyle
}: HeaderConfigProps) => {
    return (
        <View style={containerStyle}>
            {showHomePageHeader ? (
                <View style={GenericHeaderTextStyle.textOnlyContainer}>
                    <View style={{ flex: 3 }}>
                        <Text style={{ ...GenericHeaderTextStyle.secondText, ...CustomFontInterRegular().text }}>
                            {secondText}
                        </Text>
                        <Text
                            style={{
                                ...HomePageStyle.headerSecondText,
                                ...CustomFontInterBold().text
                            }}>
                            {firstText}
                        </Text>
                    </View>

                    <View style={HomePageStyle.headerButtons}>
                        <HomePageNotificationButton />
                        <HomePageSettingsButton />
                    </View>
                </View>
            ) : (
                <View>
                    <Text style={{ ...GenericHeaderTextStyle.firstText, ...CustomFontInterBold().text }}>
                        {firstText}
                    </Text>
                    <Text style={{ ...GenericHeaderTextStyle.secondText, ...CustomFontInterRegular().text }}>
                        {secondText}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default GenericHeaderText;

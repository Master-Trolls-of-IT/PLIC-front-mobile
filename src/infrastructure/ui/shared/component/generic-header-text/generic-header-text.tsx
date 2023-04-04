import React from 'react';
import { Text, View } from 'react-native';
import { HeaderConfigProps } from '~/application/type/props/header-config-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular';
import GenericHeaderTextStyle from '~/infrastructure/ui/shared/component/generic-header-text/generic-header-text-style';

const GenericHeaderText = ({ firstText = 'Header Bold', secondText = 'Header Regular' }: HeaderConfigProps) => {
    const fontFamilyInterBold = CustomFontInterBold().text;
    const fontFamilyInterRegular = CustomFontInterRegular().text;

    return (
        <View style={GenericHeaderTextStyle.container}>
            <Text style={{ ...GenericHeaderTextStyle.firstText, ...fontFamilyInterBold }}>{firstText}</Text>
            <Text style={{ ...GenericHeaderTextStyle.secondText, ...fontFamilyInterRegular }}>{secondText}</Text>
        </View>
    );
};

export default GenericHeaderText;

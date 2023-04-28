import React from 'react';
import { Text, View } from 'react-native';
import { HeaderConfigProps } from '~/domain/interfaces/props/header-config-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular';
import GenericHeaderTextStyle from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text-style';

const GenericHeaderText = ({ firstText = 'Header Bold', secondText = 'Header Regular' }: HeaderConfigProps) => {
    return (
        <View style={GenericHeaderTextStyle.container}>
            <Text style={{ ...GenericHeaderTextStyle.firstText, ...CustomFontInterBold().text }}>{firstText}</Text>
            <Text style={{ ...GenericHeaderTextStyle.secondText, ...CustomFontInterRegular().text }}>{secondText}</Text>
        </View>
    );
};

export default GenericHeaderText;

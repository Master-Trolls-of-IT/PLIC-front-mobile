import React from 'react';
import { Text, View } from 'react-native';
import { HeaderConfigProps } from '~/domain/interfaces/props/header-config-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular';
import GenericHeaderTextStyle from '~/infrastructure/ui/shared/component/generic-header-text/generic-header-text-style';
import useGenericHeaderTextData from './hooks';

const GenericHeaderText = ({
    firstText = 'Header Bold',
    secondText = 'Header Regular',
    reverseTitle = false
}: HeaderConfigProps) => {
    return (
        <View style={GenericHeaderTextStyle.container}>
            {reverseTitle ? (
                <View>
                    <Text style={{ ...GenericHeaderTextStyle.secondText, ...CustomFontInterRegular().text }}>
                        {secondText}
                    </Text>
                    <Text style={{ ...GenericHeaderTextStyle.firstText, ...CustomFontInterBold().text }}>
                        {firstText}
                    </Text>
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

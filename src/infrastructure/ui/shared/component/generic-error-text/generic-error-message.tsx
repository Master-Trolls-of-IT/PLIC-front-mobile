import React from 'react';
import { Text, View } from 'react-native';
import GenericErrorMessageStyle from '~/infrastructure/ui/shared/component/generic-error-text/generic-error-message-style';
import CustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular';
import { GenericErrorMessageProps } from '~/application/type/props/generic-error-message-props';

const GenericErrorMessage = ({ text, style, error }: GenericErrorMessageProps) => {
    const customFont = CustomFontInterRegular().text;

    return (
        <View style={{ ...GenericErrorMessageStyle.container, ...style }}>
            <Text style={{ ...GenericErrorMessageStyle.message, opacity: error ? 100 : 0, ...customFont }}>{text}</Text>
        </View>
    );
};

export default GenericErrorMessage;

import React from 'react';
import { Text, View } from 'react-native';
import GenericErrorMessageStyle from '~/infrastructure/ui/shared/component/generic-error-text/generic-error-message-style';
import { GenericErrorMessageProps } from '~/application/type/props/generic-error-message-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const GenericErrorMessage = ({ text, style, error }: GenericErrorMessageProps) => {
    return (
        <View style={{ ...GenericErrorMessageStyle.container, ...style }}>
            <Text
                style={{
                    ...GenericErrorMessageStyle.message,
                    opacity: error ? 100 : 0,
                    ...CustomFontInterBold().text
                }}>
                {text}
            </Text>
        </View>
    );
};

export default GenericErrorMessage;

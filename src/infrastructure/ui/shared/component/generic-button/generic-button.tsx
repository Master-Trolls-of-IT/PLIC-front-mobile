import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import GenericButtonStyle from '~/infrastructure/ui/shared/component/generic-button/generic-button-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { GenericButtonProps } from '~/domain/interfaces/props/generic-button-props';

const GenericButton = ({ title, style, onPress }: GenericButtonProps) => {
    return (
        <TouchableOpacity style={{ ...GenericButtonStyle.buttonContainer, ...style?.container }} onPress={onPress}>
            <Text style={{ ...GenericButtonStyle.buttonText, ...style?.text, ...CustomFontInterBold().text }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default GenericButton;

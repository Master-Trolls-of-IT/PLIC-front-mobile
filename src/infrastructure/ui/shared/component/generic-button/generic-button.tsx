import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import GenericButtonStyle from '~/infrastructure/ui/shared/component/generic-button/generic-button-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { GenericButtonProps } from '~/domain/interfaces/props/generic/generic-button-props';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GenericButton = ({ title, style, loader, onPress }: GenericButtonProps) => {
    return (
        <TouchableOpacity
            style={{ ...GenericButtonStyle.buttonContainer, ...style?.container }}
            onPress={onPress}
            disabled={loader}>
            {loader ? (
                <View style={GenericButtonStyle.buttonContent}>
                    <ActivityIndicator animating={true} color={ColorEnum.ClassicBrown} size={'small'} />
                </View>
            ) : (
                <Text
                    allowFontScaling={false}
                    numberOfLines={1}
                    style={{ ...GenericButtonStyle.buttonContent, ...style?.text, ...CustomFontInterBold().text }}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default GenericButton;

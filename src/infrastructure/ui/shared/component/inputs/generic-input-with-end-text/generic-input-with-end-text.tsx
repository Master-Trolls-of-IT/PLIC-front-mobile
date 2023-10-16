import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { GenericInputWithEndTextProps } from '~/domain/interfaces/props/generic/generic-input/generic-input-with-end-text-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericInputWithEndTextStyle from '~/infrastructure/ui/shared/component/inputs/generic-input-with-end-text/generic-input-with-end-text-style';
import useGenericInputWithEndTextData from '~/infrastructure/ui/shared/component/inputs/generic-input-with-end-text/hooks';

const GenericInputWithEndText = ({
    title,
    placeHolder,
    endText,
    type,
    style,
    dispatch
}: GenericInputWithEndTextProps) => {
    const { onChangeText, controlledInput } = useGenericInputWithEndTextData(type, dispatch);

    return (
        <View style={style}>
            <Text style={{ ...GenericInputWithEndTextStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
            <View style={GenericInputWithEndTextStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...GenericInputWithEndTextStyle.border, ...CustomFontInterBold().text }}
                    onChangeText={onChangeText}
                    maxLength={3}
                    value={controlledInput}
                />

                <Text style={{ ...GenericInputWithEndTextStyle.endText, ...CustomFontInterBold().text }}>
                    {endText}
                </Text>
            </View>
        </View>
    );
};

export default GenericInputWithEndText;

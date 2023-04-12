import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { InputWithEndTextProps } from '~/application/type/props/input-with-end-text-props';
import useInputWithEndTextData from '~/infrastructure/ui/shared/component/input-with-end-text/hooks';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import inputWithEndTextStyle from '~/infrastructure/ui/shared/component/input-with-end-text/input-with-end-text-style';

const InputWithEndText = ({ title, placeHolder, endText, style, input, dispatch }: InputWithEndTextProps) => {
    const { onChangeText, controlledInput } = useInputWithEndTextData(input, dispatch);
    return (
        <View style={style}>
            <Text style={{ ...inputWithEndTextStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
            <View style={inputWithEndTextStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...inputWithEndTextStyle.border, ...CustomFontInterBold().text }}
                    onChangeText={onChangeText}
                    maxLength={3}
                    value={controlledInput}
                />
                <Text style={{ ...inputWithEndTextStyle.endText, ...CustomFontInterBold().text }}>{endText}</Text>
            </View>
        </View>
    );
};

export default InputWithEndText;

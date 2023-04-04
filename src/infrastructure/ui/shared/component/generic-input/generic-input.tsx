import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import GenericInputStyle from '~/infrastructure/ui/shared/component/generic-input/generic-input-style';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import useGenericInputData from '~/infrastructure/ui/shared/component/generic-input/hooks';
import { GenericInputProps } from '~/application/type/props/generic-input-props';

const GenericInput = ({ title, type, placeHolder, style, input, dispatch }: GenericInputProps) => {
    const { fontStyle, onChangeText, onPressPasswordIcon, secureTextEntry, showPasswordText, showRightStatusIcon } =
        useGenericInputData({
            type,
            dispatch
        });

    return (
        <View style={style}>
            <Text style={{ ...GenericInputStyle.title, ...fontStyle }}>{title}</Text>
            <View style={GenericInputStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...GenericInputStyle.border, ...fontStyle }}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity style={GenericInputStyle.showTextIcon} onPress={onPressPasswordIcon}>
                    {type == InputTypeEnum.Password ? showPasswordText : null}
                </TouchableOpacity>
                {type != InputTypeEnum.Text && input != '' ? showRightStatusIcon : null}
            </View>
        </View>
    );
};

export default GenericInput;

import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import GenericInputStyle from '~/infrastructure/ui/shared/component/generic-input/generic-input-style';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';
import useGenericInputData from '~/infrastructure/ui/shared/component/generic-input/hooks';
import { GenericInputProps } from '~/domain/interfaces/props/generic-input-props';
import GenericTooltip from '~/infrastructure/ui/shared/component/generic-tooltip/generic-tooltip';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const GenericInput = ({ title, type, placeHolder, style, input, dispatch }: GenericInputProps) => {
    const {
        dispatchTooltip,
        genericInputTitleStyle,
        onChangeText,
        onPressPasswordIcon,
        onPressStatusIcon,
        secureTextEntry,
        selectRightMessage,
        showPasswordText,
        showRightStatusIcon,
        showTooltip,
        validInput
    } = useGenericInputData({
        type,
        dispatch
    });

    return (
        <View style={style}>
            <Text style={genericInputTitleStyle}>{title}</Text>
            <View style={GenericInputStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...GenericInputStyle.border, ...CustomFontInterBold().text }}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                    maxLength={type == InputTypeEnum.Password ? 24 : undefined}
                    value={input}
                />

                <TouchableOpacity style={GenericInputStyle.showTextIcon} onPress={onPressPasswordIcon}>
                    {type == InputTypeEnum.Password ? showPasswordText : null}
                </TouchableOpacity>

                <View style={GenericInputStyle.statusIcon}>
                    <TouchableOpacity
                        style={GenericInputStyle.statusIcon}
                        onPress={onPressStatusIcon}
                        disabled={validInput}>
                        {type != InputTypeEnum.Text && input != '' ? showRightStatusIcon : null}
                    </TouchableOpacity>
                </View>

                {showTooltip ? (
                    <GenericTooltip
                        message={selectRightMessage()}
                        style={GenericInputStyle.tooltip}
                        dispatch={dispatchTooltip}
                    />
                ) : null}
            </View>
        </View>
    );
};

export default GenericInput;

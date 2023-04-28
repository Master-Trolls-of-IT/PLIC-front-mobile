import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import GenericInputStyle from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input-style';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';
import { GenericInputProps } from '~/domain/interfaces/props/generic-input-props';
import GenericTooltip from '~/infrastructure/ui/shared/component/generic-tooltip/generic-tooltip';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useInputData from '~/infrastructure/ui/shared/helper/input-hooks';

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
    } = useInputData({ type, dispatch });

    return (
        <View style={style}>
            <Text style={genericInputTitleStyle}>{title}</Text>
            <View style={GenericInputStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...GenericInputStyle.border, ...CustomFontInterBold().text }}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                    maxLength={type == InputTypeEnum.Password || type == InputTypeEnum.Name ? 24 : undefined}
                    value={input}
                />

                <TouchableOpacity style={GenericInputStyle.showTextIcon} onPress={onPressPasswordIcon}>
                    {type == InputTypeEnum.Password ? showPasswordText : null}
                </TouchableOpacity>

                <View style={GenericInputStyle.statusIcon}>
                    <TouchableOpacity
                        style={GenericInputStyle.statusIcon}
                        onPress={onPressStatusIcon}
                        disabled={validInput || input == ''}>
                        {input != '' ? showRightStatusIcon : null}
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

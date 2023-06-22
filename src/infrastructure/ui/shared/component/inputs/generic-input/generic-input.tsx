import React, { RefObject } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import GenericInputStyle from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input-style';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { GenericInputProps } from '~/domain/interfaces/props/generic-input/generic-input-props';
import GenericTooltip from '~/infrastructure/ui/shared/component/generic-tooltip/generic-tooltip';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useInputData from '~/infrastructure/ui/shared/helper/input-hooks';
import useGenericDropDownData from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/hooks';

const GenericInput = ({
    title,
    type,
    placeHolder,
    style,
    input,
    dispatch,
    onSelectFilter,
    filterOptions
}: GenericInputProps) => {
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
        filterIcon,
        validInput
    } = useInputData({ type, dispatch });

    const { DropdownButton, renderDropdown, toggleDropdown } = useGenericDropDownData(onSelectFilter, filterOptions);

    return (
        <View style={style}>
            {title && <Text style={genericInputTitleStyle}>{title}</Text>}
            <View style={GenericInputStyle.container}>
                <TextInput
                    ref={DropdownButton as RefObject<TextInput>}
                    placeholder={placeHolder}
                    style={{ ...GenericInputStyle.border, ...CustomFontInterBold().text }}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                    maxLength={type == InputEnum.Password || type == InputEnum.Name ? 24 : undefined}
                    value={input}
                />

                {renderDropdown()}

                <TouchableOpacity style={GenericInputStyle.showTextIcon} onPress={onPressPasswordIcon}>
                    {type == InputEnum.Password && showPasswordText}
                </TouchableOpacity>

                <TouchableOpacity style={GenericInputStyle.showTextIcon} onPress={toggleDropdown}>
                    {type == InputEnum.Search && filterIcon}
                </TouchableOpacity>

                <View style={GenericInputStyle.statusIcon}>
                    <TouchableOpacity
                        style={GenericInputStyle.statusIcon}
                        onPress={onPressStatusIcon}
                        disabled={validInput || input == ''}>
                        {input != '' && type !== InputEnum.Search && showRightStatusIcon}
                    </TouchableOpacity>
                </View>

                {showTooltip && (
                    <GenericTooltip
                        message={selectRightMessage()}
                        style={GenericInputStyle.tooltip}
                        dispatch={dispatchTooltip}
                    />
                )}
            </View>
        </View>
    );
};

export default GenericInput;

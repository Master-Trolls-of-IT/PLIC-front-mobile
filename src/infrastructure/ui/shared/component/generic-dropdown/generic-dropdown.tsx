import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { InputTypeEnum } from '~/application/type/enum/input-type-enum';

import { GenericInputProps } from '~/application/type/props/generic-input-props';
import GenericTooltip from '~/infrastructure/ui/shared/component/generic-tooltip/generic-tooltip';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useGenericDropDownData from '~/infrastructure/ui/shared/component/generic-dropdown/hooks';
import GenericDropDownStyle from '~/infrastructure/ui/shared/component/generic-dropdown/generic-dropdown-style';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const GenericDropDown = ({ title, type, placeHolder, style, input, dispatch }: GenericInputProps) => {
    const { dispatchTooltip, onPressDropDownIcon, secureTextEntry, selectRightMessage, showTooltip } =
        useGenericDropDownData({
            type,
            dispatch
        });

    return (
        <View style={style}>
            <Text style={{ ...GenericDropDownStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
            <View style={GenericDropDownStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...GenericDropDownStyle.border, ...CustomFontInterBold().text }}
                    secureTextEntry={secureTextEntry}
                    maxLength={type == InputTypeEnum.Password ? 24 : undefined}
                />
                {/* Needs implementation */}
                <TouchableOpacity style={GenericDropDownStyle.showTextIcon} onPress={onPressDropDownIcon}>
                    {
                        <CustomSvg
                            asset={require('~/domain/entities/assets/icon/icon-drop-down.svg')}
                            height={30}
                            width={30}
                        />
                    }
                </TouchableOpacity>

                {showTooltip ? (
                    <GenericTooltip
                        message={selectRightMessage()}
                        style={GenericDropDownStyle.tooltip}
                        dispatch={dispatchTooltip}
                    />
                ) : null}
            </View>
        </View>
    );
};

export default GenericDropDown;

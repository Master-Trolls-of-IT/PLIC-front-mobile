import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GenericDropDownProps } from '~/application/type/props/generic-dropdown-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useGenericDropDownData from '~/infrastructure/ui/shared/component/generic-dropdown/hooks';
import GenericDropDownStyle from '~/infrastructure/ui/shared/component/generic-dropdown/generic-dropdown-style';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const GenericDropDown = ({ title, placeHolder, style }: GenericDropDownProps) => {
    const { onPressDropDownIcon } = useGenericDropDownData();

    return (
        <View style={style}>
            <Text style={{ ...GenericDropDownStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
            <View style={GenericDropDownStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...GenericDropDownStyle.border, ...CustomFontInterBold().text }}
                />

                <TouchableOpacity style={GenericDropDownStyle.showTextIcon} onPress={onPressDropDownIcon}>
                    {
                        <CustomSvg
                            asset={require('~/domain/entities/assets/icon/icon-drop-down.svg')}
                            height={30}
                            width={30}
                        />
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GenericDropDown;

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GenericDropDownProps } from '~/domain/interfaces/props/generic/generic-dropdown-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useGenericDropDownData from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/hooks';
import GenericDropDownStyle from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown-style';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

const GenericDropDown = ({ title, dispatch, options, style }: GenericDropDownProps) => {
    const { selected, dropdownIcon, toggleDropdown, renderDropdown, DropdownButton } = useGenericDropDownData(
        dispatch,
        options
    );

    return (
        <View style={style}>
            <Text style={{ ...GenericDropDownStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
            <View ref={DropdownButton} style={{ ...GenericDropDownStyle.border, ...GenericDropDownStyle.container }}>
                {renderDropdown()}
                <Text style={{ ...GenericDropDownStyle.inputText, ...CustomFontInterBold().text }}>
                    {selected?.label || options[0].label}
                </Text>
                <TouchableOpacity onPress={toggleDropdown} style={GenericDropDownStyle.icon}>
                    <CustomSvg asset={dropdownIcon} height={22} width={22} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GenericDropDown;

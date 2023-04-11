import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GenericDropDownProps } from '~/application/type/props/generic-dropdown-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useGenericDropDownData from '~/infrastructure/ui/shared/component/generic-dropdown/hooks';
import GenericDropDownStyle from '~/infrastructure/ui/shared/component/generic-dropdown/generic-dropdown-style';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericDropdownStyle from '~/infrastructure/ui/shared/component/generic-dropdown/generic-dropdown-style';

const GenericDropDown = ({ title, options, style }: GenericDropDownProps) => {
    const { selected, toggleDropdown, renderDropdown, DropdownButton } = useGenericDropDownData(() => {}, options);

    return (
        <View style={style}>
            <Text style={{ ...GenericDropDownStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
            <View style={GenericDropDownStyle.border}>
                {renderDropdown()}
                <Text ref={DropdownButton} style={{ ...GenericDropDownStyle.inputText, ...CustomFontInterBold().text }}>
                    {(!!selected && selected.label) || options[0].label}
                </Text>
                <TouchableOpacity onPress={toggleDropdown} style={GenericDropdownStyle.icon}>
                    <CustomSvg
                        asset={require('~/domain/entities/assets/icon/icon-drop-down.svg')}
                        height={22}
                        width={22}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// return (
//     <View style={style}>
//         <Text style={{ ...GenericDropDownStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
//         <View style={GenericDropDownStyle.container}>
//             <TextInput
//                 placeholder={options[0]}
//                 style={{ ...GenericDropDownStyle.border, ...CustomFontInterBold().text }}
//             />
//
//             <TouchableOpacity style={GenericDropDownStyle.showTextIcon} onPress={onPressDropDownIcon}>
//                 {
//                     <CustomSvg
//                         asset={require('~/domain/entities/assets/icon/icon-drop-down.svg')}
//                         height={22}
//                         width={22}
//                     />
//                 }
//             </TouchableOpacity>
//         </View>
//     </View>
// );

export default GenericDropDown;

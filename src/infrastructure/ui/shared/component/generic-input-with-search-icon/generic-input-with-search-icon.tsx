import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { GenericInputWithSearchIconProps } from '~/domain/interfaces/props/generic-input-with-search-icon-props';
import GenericInputWithSearchIconStyle from '~/infrastructure/ui/shared/component/generic-input-with-search-icon/generic-input-with-search-icon-style';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import useGenericInputWithSearchIconData from '~/infrastructure/ui/shared/component/generic-input-with-search-icon/hooks';

const GenericInputWithSearchIcon = ({
    title,
    placeHolder,
    style,
    input,
    dispatch
}: GenericInputWithSearchIconProps) => {
    const { assetSearchInput, controlledInput, newHeight, newWidth, onChangeText, onPressSearchIcon } =
        useGenericInputWithSearchIconData(input, dispatch);

    return (
        <View style={style}>
            <Text style={{ ...GenericInputWithSearchIconStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
            <View style={GenericInputWithSearchIconStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...GenericInputWithSearchIconStyle.border, ...CustomFontInterBold().text }}
                    onChangeText={onChangeText}
                    maxLength={13}
                    value={controlledInput}
                />

                <TouchableOpacity
                    style={GenericInputWithSearchIconStyle.containerSearchIcon}
                    onPress={onPressSearchIcon}>
                    <CustomSvg
                        asset={assetSearchInput}
                        style={GenericInputWithSearchIconStyle.searchIcon}
                        height={newHeight}
                        width={newWidth}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GenericInputWithSearchIcon;

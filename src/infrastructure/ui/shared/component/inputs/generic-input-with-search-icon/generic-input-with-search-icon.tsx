import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { GenericInputWithSearchIconProps } from '~/domain/interfaces/props/generic/generic-input/generic-input-with-search-icon-props';
import GenericInputWithSearchIconStyle from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon/generic-input-with-search-icon-style';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useGenericInputWithSearchIconData from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon/hooks';

const GenericInputWithSearchIcon = ({
    title,
    placeHolder,
    style,
    input,
    dispatch,
    onPressSearchIcon
}: GenericInputWithSearchIconProps) => {
    const { assetSearchInput, controlledInput, newHeight, newWidth, onChangeText, onPressSearch } =
        useGenericInputWithSearchIconData(input, dispatch, onPressSearchIcon);

    return (
        <View style={style}>
            {title && (
                <Text style={{ ...GenericInputWithSearchIconStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
            )}
            <View style={GenericInputWithSearchIconStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...GenericInputWithSearchIconStyle.border, ...CustomFontInterBold().text }}
                    onChangeText={onChangeText}
                    maxLength={13}
                    value={controlledInput}
                />

                <TouchableOpacity style={GenericInputWithSearchIconStyle.containerSearchIcon} onPress={onPressSearch}>
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

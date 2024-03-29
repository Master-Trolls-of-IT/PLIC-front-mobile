import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import { GenericInputWithSearchIconAndEndTextProps } from '~/domain/interfaces/props/generic/generic-input/generic-input-with-search-icon-and-end-text';
import GenericInputWithSearchIconAndEndTextStyle from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon-and-end-text/generic-input-with-search-icon-and-end-text-style';
import useGenericInputWithSearchIconAndEndTextData from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon-and-end-text/hooks';

const GenericInputWithSearchIconAndEndText = ({
    title,
    placeHolder,
    endText,
    style,
    input,
    dispatch,
    onPressSearchIcon
}: GenericInputWithSearchIconAndEndTextProps) => {
    const { assetSearchInput, controlledInput, newHeight, newWidth, onChangeText, onPressSearch } =
        useGenericInputWithSearchIconAndEndTextData(input, dispatch, onPressSearchIcon);

    return (
        <View style={style}>
            {title && (
                <Text style={{ ...GenericInputWithSearchIconAndEndTextStyle.title, ...CustomFontInterBold().text }}>
                    {title}
                </Text>
            )}
            <View style={GenericInputWithSearchIconAndEndTextStyle.container}>
                <TextInput
                    placeholder={placeHolder}
                    style={{ ...GenericInputWithSearchIconAndEndTextStyle.border, ...CustomFontInterBold().text }}
                    onChangeText={onChangeText}
                    maxLength={4}
                    value={controlledInput}
                    placeholderTextColor={'#6D4C412B'}
                />

                <Text style={{ ...GenericInputWithSearchIconAndEndTextStyle.endText, ...CustomFontInterBold().text }}>
                    {endText}
                </Text>

                <TouchableOpacity
                    style={GenericInputWithSearchIconAndEndTextStyle.containerSearchIcon}
                    onPress={onPressSearch}
                    disabled={input === '' || Number(input) === 0}>
                    <CustomSvg
                        asset={assetSearchInput}
                        style={GenericInputWithSearchIconAndEndTextStyle.searchIcon}
                        height={newHeight}
                        width={newWidth}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GenericInputWithSearchIconAndEndText;

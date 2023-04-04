import React from 'react';
import { Text, View } from 'react-native';
import GenericTooltipStyle from '~/infrastructure/ui/shared/component/generic-tooltip/generic-tooltip-style';
import CustomFontInterSemiBold from '~/application/utils/font/custom-font-inter-semi-bold';

const GenericTooltip = ({ message, style }: { message: string; style?: object }) => {
    return (
        <View style={style}>
            <View style={GenericTooltipStyle.box}>
                <Text style={{ ...GenericTooltipStyle.text, ...CustomFontInterSemiBold().text }}>{message}</Text>
            </View>
            <View style={GenericTooltipStyle.triangle} />
        </View>
    );
};

export default GenericTooltip;

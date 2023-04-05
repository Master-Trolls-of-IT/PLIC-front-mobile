import React, { Dispatch, SetStateAction } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import GenericTooltipStyle from '~/infrastructure/ui/shared/component/generic-tooltip/generic-tooltip-style';
import CustomFontInterSemiBold from '~/application/utils/font/custom-font-inter-semi-bold';
import useGenericTooltipData from '~/infrastructure/ui/shared/component/generic-tooltip/hooks';

const GenericTooltip = ({
    message,
    style,
    dispatch
}: {
    message: string;
    style?: object;
    dispatch: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
}) => {
    const { onPressTooltip } = useGenericTooltipData(dispatch);

    return (
        <TouchableWithoutFeedback onPress={onPressTooltip}>
            <View style={style}>
                <View style={GenericTooltipStyle.box}>
                    <Text style={{ ...GenericTooltipStyle.text, ...CustomFontInterSemiBold().text }}>{message}</Text>
                </View>
                <View style={GenericTooltipStyle.triangle} />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default GenericTooltip;

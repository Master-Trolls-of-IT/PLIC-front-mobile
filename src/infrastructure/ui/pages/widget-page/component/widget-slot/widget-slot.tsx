import React from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import WidgetSlotStyle from '~/infrastructure/ui/pages/widget-page/component/widget-slot/widget-slot-style';
import { WidgetSlotProps } from '~/domain/interfaces/props/widgets/widget-slot-props';
import useWidgetSlotData from '~/infrastructure/ui/pages/widget-page/component/widget-slot/hooks';

const WidgetSlot = ({ id, widgetDropped, setHandleDrop }: WidgetSlotProps) => {
    const { slotRef, onMoveShouldSetResponderCapture } = useWidgetSlotData(id, widgetDropped, setHandleDrop);
    return (
        <View
            ref={slotRef}
            style={WidgetSlotStyle.slot}
            onMoveShouldSetResponderCapture={onMoveShouldSetResponderCapture}>
            <View style={WidgetSlotStyle.firstBlock} />
            <View style={WidgetSlotStyle.secondBlock} />
            <View style={WidgetSlotStyle.thirdBlock} />
            <View style={WidgetSlotStyle.fourthBlock} />
        </View>
    );
};

export default observer(WidgetSlot);

import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import { Animated, GestureResponderEvent, View } from 'react-native';
import WidgetSlotStyle from '~/infrastructure/ui/pages/widget-page/component/widget-slot/widget-slot-style';
import Value = Animated.Value;

const WidgetSlot = ({
    id,
    widgetDropped
}: {
    id: number;
    widgetDropped: { type: 'small' | 'large'; x: number; y: number } | undefined;
}) => {
    const slotRef = useRef<View>(null);

    useEffect(() => {
        slotRef.current?.measure((x, y, width, height, pageX, pageY) => {
            console.log('drop detected slot ', id);
            console.log('Position X:', pageX);
            console.log('Position Y:', pageY);
            console.log('Largeur:', width);
            console.log('Hauteur:', height);
            console.log('x: ', widgetDropped?.x);
            console.log('y: ', widgetDropped?.y);
            console.log('=============================');
        });
    }, [widgetDropped]);
    const onMoveShouldSetResponderCapture = () => true;

    const onResponderRelease = (event: GestureResponderEvent) => {
        const { locationX, locationY } = event.nativeEvent;

        console.log('drop wid: ', id, 'at', locationX, locationY);
    };

    return (
        <View
            ref={slotRef}
            style={WidgetSlotStyle.slot}
            onMoveShouldSetResponderCapture={onMoveShouldSetResponderCapture}
            onResponderRelease={onResponderRelease}>
            <View style={WidgetSlotStyle.firstBlock} />
            <View style={WidgetSlotStyle.secondBlock} />
            <View style={WidgetSlotStyle.thirdBlock} />
            <View style={WidgetSlotStyle.fourthBlock} />
        </View>
    );
};

export default observer(WidgetSlot);

import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import { Animated, GestureResponderEvent, View } from 'react-native';
import WidgetSlotStyle from '~/infrastructure/ui/pages/widget-page/component/widget-slot/widget-slot-style';
import Value = Animated.Value;
import { WidgetSlotProps } from '~/domain/interfaces/props/widgets/widget-slot-props';

const WidgetSlot = ({ id, widgetDropped, setHandleDrop }: WidgetSlotProps) => {
    const slotRef = useRef<View>(null);

    useEffect(() => {
        slotRef.current?.measure((x, y, width, height, pageX, pageY) => {
            if (widgetDropped)
                switch (widgetDropped.type) {
                    case 'small':
                        if (
                            widgetDropped.x >= pageX &&
                            widgetDropped.x <= pageX + width &&
                            widgetDropped.y >= pageY &&
                            widgetDropped.y <= pageY + height
                        ) {
                            setHandleDrop({ isLine: false, id: id });
                        }
                        break;
                    case 'large':
                        if (widgetDropped.y >= pageY && widgetDropped.y <= pageY + height) {
                            setHandleDrop({ isLine: true, id: Math.round(id / 2) });
                        }
                }
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

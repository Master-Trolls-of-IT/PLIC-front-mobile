import { useRef, useState } from 'react';
import { Animated, PanResponder, View } from 'react-native';

const useLargeWidgetData = (setWidgetDropped: (value: { type: 'small' | 'large'; x: number; y: number }) => void) => {
    const position = useRef(new Animated.ValueXY()).current;
    const widgetRef = useRef<View>(null);
    let Xpos = 0;
    let Ypos = 0;

    const [dragging, setDragging] = useState(false);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                setDragging(true);
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx: position.x,
                        dy: position.y
                    }
                ],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: () => {
                setDragging(false);
                setWidgetDropped({
                    type: 'large',
                    x: (position.x as unknown as { _value: number })._value + Xpos,
                    y: (position.y as unknown as { _value: number })._value + Ypos
                });
                position.flattenOffset();
                position.setValue({ x: 0, y: 0 });
            }
        })
    ).current;

    const onLayout = () => {
        widgetRef.current?.measure((x, y, width, height, pageX, pageY) => {
            Xpos = pageX;
            Ypos = pageY;
        });
    };

    return {
        dragging,
        panResponder,
        onLayout,
        widgetRef,
        position
    };
};

export default useLargeWidgetData;

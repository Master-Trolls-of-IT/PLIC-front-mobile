import React from 'react';
import { Animated, PanResponder, Text } from 'react-native';
import { useRef, useState } from 'react';
import SmallWidgetStyle from '~/infrastructure/ui/pages/widget-page/component/small-widget/small-widget-style';
import Value = Animated.Value;

const SmallBlankWidget = ({
    setWidgetDropped
}: {
    setWidgetDropped: (value: { type: 'small' | 'large'; x: number; y: number }) => void;
}) => {
    const position = useRef(new Animated.ValueXY()).current;

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
                console.log('dropped at: ', position);
                console.log('x position: ', position.x as any);
                const newPosition = position.x as unknown as number;
                setWidgetDropped({
                    type: 'small',
                    x: (position.x as any)._value,
                    y: (position.y as any)._value
                });
                position.flattenOffset();
                position.setValue({ x: 0, y: 0 });
                console.log('my new positionnnnn', newPosition);
            }
        })
    ).current;

    return (
        <Animated.View
            style={[
                SmallWidgetStyle.container,
                {
                    transform: position.getTranslateTransform(),
                    opacity: dragging ? 0.8 : 1
                }
            ]}
            {...panResponder.panHandlers}>
            <Text style={SmallWidgetStyle.text}>Medium</Text>
        </Animated.View>
    );
};

export default SmallBlankWidget;

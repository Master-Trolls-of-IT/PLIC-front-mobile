import { observer } from 'mobx-react';
import React, { useRef, useState } from 'react';
import { Animated, PanResponder, Text } from 'react-native';
import SmallWidgetStyle from '~/infrastructure/ui/pages/widget-page/component/small-widget/small-widget-style';
import LargeWidgetStyle from '~/infrastructure/ui/pages/widget-page/component/large-widget/large-widget-style';
import Value = Animated.Value;

const LargeBlankWidget = ({
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
                // When touch gesture starts,
                //set dragging to true
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
                console.log('x position: ', position.x);
                setWidgetDropped({
                    type: 'large',
                    x: (position.x as unknown as { _value: number })._value,
                    y: (position.y as unknown as { _value: number })._value
                });
                position.flattenOffset();
                position.setValue({ x: 0, y: 0 });
                position.flattenOffset();
                position.setValue({ x: 0, y: 0 });
            }
        })
    ).current;
    return (
        <Animated.View
            style={[
                LargeWidgetStyle.container,
                {
                    transform: position.getTranslateTransform(),
                    opacity: dragging ? 0.8 : 1
                }
            ]}
            {...panResponder.panHandlers}>
            <Text style={LargeWidgetStyle.text}>Large</Text>
        </Animated.View>
    );
};

export default observer(LargeBlankWidget);

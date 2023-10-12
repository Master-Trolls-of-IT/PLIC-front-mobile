import React from 'react';
import { Animated, Text } from 'react-native';
import { observer } from 'mobx-react';
import SmallWidgetStyle from '~/infrastructure/ui/pages/widget-page/component/small-widget/small-widget-style';
import useSmallWidgetData from '~/infrastructure/ui/pages/widget-page/component/small-widget/hooks';

const SmallBlankWidget = ({
    setWidgetDropped
}: {
    setWidgetDropped: (value: { type: 'small' | 'large'; x: number; y: number }) => void;
}) => {
    const { onLayout, dragging, panResponder, widgetRef, position } = useSmallWidgetData(setWidgetDropped);

    return (
        <Animated.View
            ref={widgetRef}
            onLayout={onLayout}
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

export default observer(SmallBlankWidget);

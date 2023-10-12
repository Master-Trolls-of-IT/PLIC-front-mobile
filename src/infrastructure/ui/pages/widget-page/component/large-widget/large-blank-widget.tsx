import { observer } from 'mobx-react';
import React from 'react';
import { Animated, Text } from 'react-native';
import LargeWidgetStyle from '~/infrastructure/ui/pages/widget-page/component/large-widget/large-widget-style';
import useLargeWidgetData from '~/infrastructure/ui/pages/widget-page/component/large-widget/hooks';

const LargeBlankWidget = ({
    setWidgetDropped
}: {
    setWidgetDropped: (value: { type: 'small' | 'large'; x: number; y: number }) => void;
}) => {
    const { onLayout, dragging, panResponder, widgetRef, position } = useLargeWidgetData(setWidgetDropped);

    return (
        <Animated.View
            ref={widgetRef}
            onLayout={onLayout}
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

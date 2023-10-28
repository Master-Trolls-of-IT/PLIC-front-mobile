import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Dimensions, View } from 'react-native';

const useWidgetSlotData = (
    id: number,
    widgetDropped: { type: 'small' | 'large'; x: number; y: number } | undefined,
    setHandleDrop?: Dispatch<SetStateAction<{ isLine: boolean; id: number } | undefined>>
) => {
    const slotRef = useRef<View>(null);

    useEffect(() => {
        slotRef.current?.measure((_x, _y, width, height, pageX, pageY) => {
            const middleSmallBlankWidget = (Dimensions.get('screen').width * 0.4) / 3;
            const middleLargeBlankWidgetWidth = (Dimensions.get('screen').width * 0.85) / 3;
            const middleLargeBlankWidgetHeight = (Dimensions.get('screen').width * 0.4) / 3;

            if (widgetDropped && setHandleDrop)
                switch (widgetDropped.type) {
                    case 'small':
                        if (
                            widgetDropped.x + middleSmallBlankWidget >= pageX &&
                            widgetDropped.x + middleSmallBlankWidget <= pageX + width &&
                            widgetDropped.y + middleSmallBlankWidget >= pageY &&
                            widgetDropped.y + middleSmallBlankWidget <= pageY + height
                        ) {
                            setHandleDrop({ isLine: false, id: id });
                        }
                        break;
                    case 'large':
                        if (
                            widgetDropped.y + middleLargeBlankWidgetHeight >= pageY &&
                            widgetDropped.y + middleLargeBlankWidgetWidth <= pageY + height
                        ) {
                            setHandleDrop({ isLine: true, id: Math.round(id / 2) });
                        }
                }
        });
    }, [id, setHandleDrop, widgetDropped]);
    const onMoveShouldSetResponderCapture = () => true;
    return {
        slotRef,
        onMoveShouldSetResponderCapture
    };
};

export default useWidgetSlotData;

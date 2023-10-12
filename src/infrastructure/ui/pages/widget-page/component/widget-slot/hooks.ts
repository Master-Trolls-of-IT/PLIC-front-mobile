import { useEffect, useRef } from 'react';
import { View } from 'react-native';

const useWidgetSlotData = (
    id: number,
    widgetDropped: { type: 'small' | 'large'; x: number; y: number } | undefined,
    setHandleDrop: React.Dispatch<React.SetStateAction<{ isLine: boolean; id: number }>>
) => {
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
    }, [id, setHandleDrop, widgetDropped]);
    const onMoveShouldSetResponderCapture = () => true;
    return {
        slotRef,
        onMoveShouldSetResponderCapture
    };
};

export default useWidgetSlotData;

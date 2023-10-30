import { Dispatch, SetStateAction } from 'react';

export type WidgetSlotProps = {
    id: number;
    widgetDropped: { type: 'small' | 'large'; x: number; y: number } | undefined;
    setHandleDrop?: Dispatch<SetStateAction<{ isLine: boolean; id: number } | undefined>>;
};

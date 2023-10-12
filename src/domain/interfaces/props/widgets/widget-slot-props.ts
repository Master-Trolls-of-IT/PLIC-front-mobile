export type WidgetSlotProps = {
    id: number;
    widgetDropped: { type: 'small' | 'large'; x: number; y: number } | undefined;
    setHandleDrop?: React.Dispatch<React.SetStateAction<{ isLine: boolean; id: number } | undefined>>;
};

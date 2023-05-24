export type GenericButtonProps = {
    title: string;
    style?: { container: object; text: object };
    loader?: boolean;
    onPress: () => void;
};

export type AnswerCardProps = {
    content: string;
    canBePressed: () => boolean;
    onPress: () => void;
    row?: boolean;
};

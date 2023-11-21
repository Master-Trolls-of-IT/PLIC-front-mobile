import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react';
import GamePageWrapperStyle from '~/infrastructure/ui/pages/game-page/component/wrapper/game-page-wrapper-style';
import Chosen from '~/infrastructure/ui/pages/game-page/component/wrapper/icons/chosen';
import useAnswerCardData from '~/infrastructure/ui/pages/game-page/component/answer-card/hooks';

const AnswerCard = ({
    content,
    canBePressed,
    onPress,
    row
}: {
    content: string;
    canBePressed: () => boolean;
    onPress: () => void;
    row?: boolean;
}) => {
    const { onAnswerPressed, isPressed, customFontInterBold } = useAnswerCardData(canBePressed, onPress);
    return (
        <View style={GamePageWrapperStyle.answerCardContainer}>
            <TouchableOpacity
                onPress={onAnswerPressed}
                style={[
                    row ? GamePageWrapperStyle.answerCardRow : GamePageWrapperStyle.answerCard,
                    isPressed ? { opacity: 0.4 } : {}
                ]}>
                <Text style={{ ...GamePageWrapperStyle.questionCardText, ...customFontInterBold.text }}>
                    {content ?? 'error'}
                </Text>
            </TouchableOpacity>
            {isPressed && <Chosen />}
        </View>
    );
};

export default observer(AnswerCard);

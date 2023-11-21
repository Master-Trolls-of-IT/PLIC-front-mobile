import React from 'react';
import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import GamePageWrapperStyle from '~/infrastructure/ui/pages/game-page/component/wrapper/game-page-wrapper-style';
import useGamePageWrapperData from '~/infrastructure/ui/pages/game-page/component/wrapper/hooks';
import TbdCircle from '~/infrastructure/ui/pages/game-page/component/wrapper/icons/tbd-circle';
import { GameAnswerEnum } from '~/domain/interfaces/enum/game-answer-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import AnswerCard from '~/infrastructure/ui/pages/game-page/component/answer-card/answer-card';
import WrongCircle from '~/infrastructure/ui/pages/game-page/component/wrapper/icons/wrong-circle';
import RightCircle from '~/infrastructure/ui/pages/game-page/component/wrapper/icons/right-circle';

const GamePageWrapper = () => {
    const {
        nbCurrentQuestion,
        questionsStatus,
        lastScore,
        customFontInterBold,
        currentQuestion,
        numberOfGoodAnswers,
        onPressNextQuestion,
        onPressValidate,
        canBePressed,
        onPressAnswerCard,
        nbSelectedAnswers,
        displayAnswers
    } = useGamePageWrapperData();
    return (
        <View style={GamePageWrapperStyle.container}>
            <View style={GamePageWrapperStyle.header}>
                <Text style={{ ...GamePageWrapperStyle.title, ...customFontInterBold.text }}>
                    Question {nbCurrentQuestion + 1} / 10
                </Text>
                <View style={GamePageWrapperStyle.questionCard}>
                    <Text style={{ ...GamePageWrapperStyle.questionCardHeader, ...customFontInterBold.text }}>
                        {currentQuestion?.question}
                    </Text>
                </View>
            </View>
            <View style={GamePageWrapperStyle.content}>
                <Text style={{ ...GamePageWrapperStyle.title, ...customFontInterBold.text }}>
                    {numberOfGoodAnswers === 1 ? 'Une seule réponse valable :' : 'Plusieurs réponses valables :'}
                </Text>
                <View style={GamePageWrapperStyle.rowContainer}>
                    {currentQuestion.answer.length == 2 ? (
                        <>
                            <AnswerCard
                                content={currentQuestion.answer[0].content}
                                canBePressed={canBePressed}
                                onPress={onPressAnswerCard(0)}
                                row
                            />
                            <AnswerCard
                                content={currentQuestion.answer[1].content}
                                canBePressed={canBePressed}
                                onPress={onPressAnswerCard(1)}
                                row
                            />
                        </>
                    ) : (
                        <>
                            <View style={GamePageWrapperStyle.contentRow}>
                                <AnswerCard
                                    content={currentQuestion.answer[0].content}
                                    canBePressed={canBePressed}
                                    onPress={onPressAnswerCard(0)}
                                />
                                <AnswerCard
                                    content={currentQuestion.answer[1].content}
                                    canBePressed={canBePressed}
                                    onPress={onPressAnswerCard(1)}
                                />
                            </View>

                            <View style={GamePageWrapperStyle.contentRow}>
                                <AnswerCard
                                    content={currentQuestion.answer[2]?.content}
                                    canBePressed={canBePressed}
                                    onPress={onPressAnswerCard(2)}
                                />
                                <AnswerCard
                                    content={currentQuestion.answer[3]?.content}
                                    canBePressed={canBePressed}
                                    onPress={onPressAnswerCard(3)}
                                />
                            </View>
                        </>
                    )}
                </View>
            </View>
            {displayAnswers === GameAnswerEnum.TBD ? (
                <>
                    <View style={GamePageWrapperStyle.contentFooter}>
                        <Text style={{ ...GamePageWrapperStyle.title, ...customFontInterBold.text }}>
                            {nbSelectedAnswers} / {numberOfGoodAnswers} sélectionnée
                        </Text>
                        <GenericButton
                            style={{
                                container: GamePageWrapperStyle.contentFooterButtonContainer,
                                text: GamePageWrapperStyle.contentFooterButtonText
                            }}
                            title={'Valider'}
                            onPress={onPressValidate}
                        />
                    </View>
                    <View style={GamePageWrapperStyle.footer}>
                        <View style={GamePageWrapperStyle.footerQuestions}>
                            {questionsStatus.map((question, index) => (
                                <View key={index}>
                                    {question === GameAnswerEnum.TBD ? (
                                        <TbdCircle />
                                    ) : question === GameAnswerEnum.WRONG ? (
                                        <WrongCircle />
                                    ) : (
                                        <RightCircle />
                                    )}
                                </View>
                            ))}
                        </View>
                        <Text style={{ ...GamePageWrapperStyle.footerText, ...customFontInterBold.text }}>
                            Votre score journalier : {lastScore} / 10
                        </Text>
                    </View>
                </>
            ) : (
                <View style={GamePageWrapperStyle.footerResult}>
                    {displayAnswers === GameAnswerEnum.RIGHT ? (
                        <Text style={{ ...GamePageWrapperStyle.rightResult, ...customFontInterBold.text }}>VRAI</Text>
                    ) : (
                        <Text style={{ ...GamePageWrapperStyle.wrongResult, ...customFontInterBold.text }}>FAUX</Text>
                    )}
                    <View>
                        <Text style={{ ...GamePageWrapperStyle.text, ...customFontInterBold.text }}>
                            La réponse était :{' '}
                            {currentQuestion.answer
                                .filter((question) => question.isGoodAnswer)
                                .map(
                                    (question, index) =>
                                        question.content + (index + 1 !== numberOfGoodAnswers ? ', ' : '')
                                )}
                        </Text>
                    </View>

                    <GenericButton
                        style={{
                            container: GamePageWrapperStyle.contentFooterButtonContainer,
                            text: GamePageWrapperStyle.contentFooterButtonText
                        }}
                        title={'Question suivante'}
                        onPress={onPressNextQuestion}
                    />
                </View>
            )}
        </View>
    );
};

export default observer(GamePageWrapper);

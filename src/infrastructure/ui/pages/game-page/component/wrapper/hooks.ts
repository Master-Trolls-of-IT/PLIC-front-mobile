import { useEffect, useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { GameAnswerEnum } from '~/domain/interfaces/enum/game-answer-enum';

const useGamePageWrapperData = () => {
    const {
        GameStore: {
            todayQuestions,
            lastScore,
            currentQuestion: nbCurrentQuestion,
            questionsStatus,
            updateQuestionStatus,
            nextQuestion,
            endGame
        }
    } = useStore();

    const [currentQuestion, setCurrentQuestion] = useState(todayQuestions[nbCurrentQuestion]);
    const [numberOfGoodAnswers, setNumberOfGoodAnswers] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([0, 0, 0, 0]);
    const [nbSelectedAnswers, setNbSelectedAnswers] = useState(0);
    const [displayAnswers, setDisplayAnswers] = useState(GameAnswerEnum.UNANSWERED);

    useEffect(() => {
        setCurrentQuestion(todayQuestions[nbCurrentQuestion]);
        setNumberOfGoodAnswers(todayQuestions[nbCurrentQuestion].answer.filter((elem) => elem.isGoodAnswer).length);
    }, [nbCurrentQuestion, todayQuestions]);

    const customFontInterBold = CustomFontInterBold();

    const onPressValidate = () => {
        let isGoodAnswer = true;
        selectedAnswers.forEach((elem, index) => {
            if (index < currentQuestion.answer.length) {
                if (selectedAnswers[index] === 0 && currentQuestion.answer[index].isGoodAnswer) isGoodAnswer = false;
                if (selectedAnswers[index] === 1 && !currentQuestion.answer[index].isGoodAnswer) isGoodAnswer = false;
            }
        });
        setDisplayAnswers(() => (isGoodAnswer ? GameAnswerEnum.RIGHT : GameAnswerEnum.WRONG));
        updateQuestionStatus(isGoodAnswer ? GameAnswerEnum.RIGHT : GameAnswerEnum.WRONG, nbCurrentQuestion);
    };

    const onPressNextQuestion = () => {
        setSelectedAnswers([0, 0, 0, 0]);
        setNbSelectedAnswers(0);
        setDisplayAnswers(GameAnswerEnum.UNANSWERED);

        if (nbCurrentQuestion === 9) {
            endGame();
        } else {
            nextQuestion();
        }
    };

    const canBePressed = () => {
        return nbSelectedAnswers < numberOfGoodAnswers;
    };

    const onPressAnswerCard = (index: number) => {
        return () => {
            setSelectedAnswers((prevState) => {
                prevState[index] = prevState[index] === 0 ? 1 : 0;
                setNbSelectedAnswers(prevState.filter((elem) => elem === 1).length);
                return prevState;
            });
        };
    };

    return {
        nbCurrentQuestion,
        currentQuestion,
        questionsStatus,
        lastScore,
        customFontInterBold,
        numberOfGoodAnswers,
        selectedAnswers,
        onPressNextQuestion,
        onPressValidate,
        canBePressed,
        onPressAnswerCard,
        nbSelectedAnswers,
        displayAnswers
    };
};

export default useGamePageWrapperData;

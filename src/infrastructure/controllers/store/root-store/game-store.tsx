import { action, makeAutoObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GameQuestion } from '~/domain/interfaces/props/game/game-question';
import { gamePageQuestions } from '~/domain/entities/constants/game-page-questions';
import { GameAnswerEnum } from '~/domain/interfaces/enum/game-answer-enum';
import { gameDefautQuestionsStatus } from '~/domain/entities/constants/game-defaut-questions-status';
import RootStore from '~/infrastructure/controllers/store/root-store/index';

class GameStore {
    RootStore: RootStore;
    lastGameDate: Date;
    lastScore: number;
    currentQuestion: number;
    isGameEnded: boolean;
    isGameStarted: boolean;
    todayQuestions: GameQuestion[];
    questionsStatus: GameAnswerEnum[];
    constructor(rootStore: RootStore, storageKey: string) {
        this.RootStore = rootStore;
        this.lastGameDate = new Date();
        this.lastGameDate.setDate(this.lastGameDate.getDate() - 1);
        this.currentQuestion = 0;
        this.lastScore = 0;
        this.isGameEnded = false;
        this.isGameStarted = false;
        this.todayQuestions = [];
        this.questionsStatus = gameDefautQuestionsStatus;

        makeAutoObservable(
            this,
            {
                lastGameDate: observable,
                lastScore: observable,
                currentQuestion: observable,
                isGameEnded: observable,

                getIsGameAlreadyPlayed: action,
                initGameData: action,
                initTodayQuestions: action,
                startGame: action,
                nextQuestion: action,
                updateQuestionStatus: action,
                endGame: action,
                reset: action
            },
            { autoBind: true, deep: true }
        );

        void makePersistable(this, {
            name: storageKey,
            properties: [
                'lastGameDate',
                'lastScore',
                'todayQuestions',
                'currentQuestion',
                'isGameEnded',
                'questionsStatus'
            ],
            storage: AsyncStorage
        });
    }

    getIsGameAlreadyPlayed = () => {
        const today = new Date();
        const lastDate = new Date(this.lastGameDate);

        return (
            lastDate.getFullYear() === today.getFullYear() &&
            lastDate.getDay() === today.getDay() &&
            lastDate.getMonth() === today.getMonth()
        );
    };

    initTodayQuestions = () => {
        const questions: GameQuestion[] = [];
        const indexSet = new Set<number>();

        while (questions.length < 10) {
            const randomIndex = Math.floor(Math.random() * gamePageQuestions.length);

            if (!indexSet.has(randomIndex)) {
                indexSet.add(randomIndex);
                questions.push(gamePageQuestions[randomIndex]);
            }
        }
        this.todayQuestions = questions;
    };

    initGameData = () => {
        const isGameAlreadyPlayed = this.getIsGameAlreadyPlayed();

        if (!isGameAlreadyPlayed) {
            this.currentQuestion = 0;
            this.lastScore = 0;
            this.isGameStarted = false;
            this.isGameEnded = false;
            this.initTodayQuestions();
        }
    };

    startGame = () => {
        this.isGameStarted = true;
        this.lastGameDate = new Date();
    };

    endGame = () => {
        this.isGameEnded = true;
    };

    nextQuestion = () => {
        this.currentQuestion = this.currentQuestion + 1;
    };

    updateQuestionStatus = (result: GameAnswerEnum, index: number) => {
        if (result === GameAnswerEnum.RIGHT) this.lastScore = this.lastScore + 1;
        this.questionsStatus[index] = result;
    };

    reset = () => {
        this.lastGameDate = new Date();
        this.lastGameDate.setDate(this.lastGameDate.getDate() - 1);
        this.currentQuestion = 0;
        this.lastScore = 0;
        this.isGameEnded = false;
        this.isGameStarted = false;
        this.todayQuestions = [];
        this.questionsStatus = gameDefautQuestionsStatus;

        this.initGameData();
    };
}

export default GameStore;

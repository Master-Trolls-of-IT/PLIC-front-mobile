import { GameAnswer } from '~/domain/interfaces/props/game/game-answer';

export type GameQuestion = {
    question: string;
    answer: GameAnswer[];
};

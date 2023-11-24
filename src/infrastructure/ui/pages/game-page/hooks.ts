import { useCallback, useEffect, useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { GameStatusEnum } from '~/domain/interfaces/enum/game-status-enum';

const useGamePageData = () => {
    const {
        GameStore: { isGameEnded, isGameStarted, lastScore, startGame }
    } = useStore();

    const [gameStatus, setGameStatus] = useState(GameStatusEnum.NOT_STARTED);

    useEffect(() => {
        console.log('set');
        setGameStatus(() => {
            if (isGameEnded) {
                return GameStatusEnum.ENDED;
            }
            return isGameStarted ? GameStatusEnum.STARTED : GameStatusEnum.NOT_STARTED;
        });
    }, [isGameStarted, isGameEnded]);

    const customFontInterBold = CustomFontInterBold();

    const onPressStartGame = useCallback(() => {
        startGame();
    }, [startGame]);

    return {
        gameStatus,
        lastScore,
        customFontInterBold,
        onPressStartGame
    };
};

export default useGamePageData;

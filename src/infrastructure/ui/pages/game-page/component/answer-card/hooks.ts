import { useEffect, useState } from 'react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { useStore } from '~/infrastructure/controllers/store';

const useAnswerCardData = (canBePressed: () => boolean, onPress: () => void) => {
    const {
        GameStore: { currentQuestion }
    } = useStore();
    const customFontInterBold = CustomFontInterBold();

    const [isPressed, setIsPressed] = useState(false);

    const onAnswerPressed = () => {
        setIsPressed((prevState) => {
            if (prevState) {
                onPress();
                return !prevState;
            } else {
                if (canBePressed()) {
                    onPress();
                    return !prevState;
                }
                return prevState;
            }
        });
    };

    useEffect(() => {
        setIsPressed(false);
    }, [currentQuestion]);

    return {
        customFontInterBold,
        isPressed,
        onAnswerPressed
    };
};

export default useAnswerCardData;

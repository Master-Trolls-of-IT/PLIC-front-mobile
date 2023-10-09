import React, { useState } from 'react';
import useEffectOnce from '~/infrastructure/ui/shared/helper/use-effect-once';
import { anecdotesObject } from '~/domain/entities/constants/anecdote-constants';
import getRandomNumberInArrayLength from '~/infrastructure/ui/shared/helper/get-random-number-in-array-length';

const useWidgetAnecdoteData = () => {
    const [annecdoteObject, setAnnecdoteObject] = useState<{ text: string; icon: any }>();

    useEffectOnce(() => {
        setAnnecdoteObject(anecdotesObject[getRandomNumberInArrayLength(anecdotesObject.length)]);
    });

    return {
        annecdoteObject
    };
};

export default useWidgetAnecdoteData;

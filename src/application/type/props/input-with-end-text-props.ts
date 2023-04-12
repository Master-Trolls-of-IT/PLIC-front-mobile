import { Dispatch, SetStateAction } from 'react';

export type InputWithEndTextProps = {
    title: string;
    placeHolder: string;
    endText: string;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

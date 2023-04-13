import { Dispatch, SetStateAction } from 'react';

export type GenericInputWithEndTextProps = {
    title: string;
    placeHolder: string;
    endText: string;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

import { Dispatch, SetStateAction } from 'react';

export type GenericInputBirthdateProps = {
    title: string;
    placeHolder?: string;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

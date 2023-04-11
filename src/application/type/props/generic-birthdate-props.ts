import { Dispatch, SetStateAction } from 'react';

export type GenericBirthdateProps = {
    title: string;
    placeHolder?: string;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

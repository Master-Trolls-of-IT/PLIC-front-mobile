import { Dispatch, SetStateAction } from 'react';

export type GenericInputWithSearchIconAndEndTextProps = {
    title?: string;
    placeHolder: string;
    endText: string;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
    onPressSearchIcon: (value: void) => void;
};

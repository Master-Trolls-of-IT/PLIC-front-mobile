import { Dispatch, SetStateAction } from 'react';

export type GenericInputWithSearchIconProps = {
    title?: string;
    placeHolder: string;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
    onPressSearchIcon: (value: void) => void;
};

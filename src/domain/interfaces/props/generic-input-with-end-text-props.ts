import { Dispatch, SetStateAction } from 'react';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';

export type GenericInputWithEndTextProps = {
    title: string;
    placeHolder: string;
    endText: string;
    type: InputEnum;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

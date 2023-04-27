import { Dispatch, SetStateAction } from 'react';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';

export type GenericInputProps = {
    title: string;
    type: InputEnum;
    placeHolder?: string;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

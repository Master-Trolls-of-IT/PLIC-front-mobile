import { Dispatch, SetStateAction } from 'react';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';

export type GenericInputProps = {
    title: string;
    type: InputTypeEnum;
    placeHolder?: string;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

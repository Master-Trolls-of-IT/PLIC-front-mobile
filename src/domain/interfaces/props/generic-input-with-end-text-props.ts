import { Dispatch, SetStateAction } from 'react';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';

export type GenericInputWithEndTextProps = {
    title: string;
    placeHolder: string;
    endText: string;
    type: InputTypeEnum;
    style?: object;
    input: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

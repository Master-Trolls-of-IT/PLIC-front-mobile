import { Dispatch, SetStateAction } from 'react';

export type GenericDropDownProps = {
    title: string;
    options: { label: string; value: string }[];
    dispatch:
        | Dispatch<SetStateAction<{ label: string; value: string }>>
        | ((value: { label: string; value: string }) => void);
    style?: object;
};

import { Dispatch, SetStateAction } from 'react';

export type CustomModalProps = {
    children: JSX.Element | JSX.Element[];
    isVisible: boolean;
    dispatch: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
    title: string;
    titleSize: number;
};

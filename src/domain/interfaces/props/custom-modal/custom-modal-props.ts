import { Dispatch, SetStateAction } from 'react';
import Element = React.JSX.Element;

export type CustomModalProps = {
    title: string;
    titleSize: number;
    isVisible: boolean;
    dispatch: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
    children?: Element | Element[];
};

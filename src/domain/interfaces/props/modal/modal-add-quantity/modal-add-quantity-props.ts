import { Dispatch, SetStateAction } from 'react';

export type ModalAddQuantityProps = {
    title?: string;
    modal: boolean;
    setModal: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
    addQuantity: (quantity: string) => void | Promise<void>;
    isWater?: boolean;
    serving?: number;
    defaultQuantity?: string;
};

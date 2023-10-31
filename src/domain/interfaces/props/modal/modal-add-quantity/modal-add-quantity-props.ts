import { Dispatch, SetStateAction } from 'react';

export type ModalAddQuantityProps = {
    modal: boolean;
    setModal: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
    addQuantity: (quantity: string) => void | Promise<void>;
    title?: string;
    isWater?: boolean;
    serving?: number;
    defaultQuantity?: string;
};

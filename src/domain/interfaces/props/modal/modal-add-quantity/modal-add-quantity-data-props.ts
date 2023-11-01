import { Dispatch, SetStateAction } from 'react';

export type ModalAddQuantityDataProps = {
    setModal: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
    addQuantity: (quantity: string) => void | Promise<void>;
    isWater?: boolean;
    serving?: number;
    defaultQuantity?: string;
};

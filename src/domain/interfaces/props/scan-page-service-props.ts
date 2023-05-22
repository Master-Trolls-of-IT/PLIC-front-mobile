import { Dispatch, SetStateAction } from 'react';

export type ScanPageServiceProps = {
    inputBarCode: string;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

import { Dispatch, SetStateAction } from 'react';
import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';

export type ScanPageServiceProps = {
    inputBarCode: string;
    productDispatch: Dispatch<SetStateAction<ProductInfo | undefined>> | ((value: object) => void);
    errorDispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

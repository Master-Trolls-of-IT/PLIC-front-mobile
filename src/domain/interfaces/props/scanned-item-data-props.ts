import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';

export type ScannedItemDataProps = {
    scannedProduct: ProductInfo | undefined;
    onPressAddQuantity: (quantity: string) => void | Promise<void>;
};

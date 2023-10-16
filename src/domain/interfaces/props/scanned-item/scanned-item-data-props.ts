import { ProductInfo } from '~/domain/interfaces/props/nutrients/product-nutrients';

export type ScannedItemDataProps = {
    scannedProduct: ProductInfo | undefined;
    onPressAddQuantity: (quantity: string) => void | Promise<void>;
};

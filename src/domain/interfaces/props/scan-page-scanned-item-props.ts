import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';

export type ScanPageScannedItemProps = {
    scannedProduct: ProductInfo | undefined;
    createMealProduct?: boolean;
    toggleFavourite: () => void;
    onPressScanAgain: () => void;
    onPressAddQuantity: (quantity: string) => void | Promise<void>;
};

import { ProductInfo } from '~/domain/interfaces/props/nutrients/product-nutrients';

export type ScannedItemProps = {
    scannedProduct: ProductInfo | undefined;
    createMealProduct?: boolean;
    toggleFavourite: () => void;
    onPressScanAgain: () => void;
    onPressAddQuantity: (quantity: string) => void | Promise<void>;
};

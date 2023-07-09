import { ProductInfo } from '~/domain/interfaces/services/product-nutrients';

export type ScanPageScannedItemProps = {
    scannedProduct: ProductInfo | undefined;
    toggleFavourite: () => void;
    onPressScanAgain: () => void;
    itemBarcode: string;
};

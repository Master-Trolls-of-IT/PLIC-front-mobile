import { useCallback } from 'react';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import { ConsumedProduct } from '~/domain/interfaces/services/consumed-product';

const useMapConsumedProductResponse = () => {
    const mapResponse = useCallback((consumedProducts: ConsumedProduct[]): ConsumedProductItemProps[] => {
        const consumedProductItems = [] as ConsumedProductItemProps[];
        for (const consumedProduct of consumedProducts) {
            consumedProductItems.push({
                id: consumedProduct.product.id,
                brand: consumedProduct.product.brand,
                barcode: consumedProduct.product.barcode,
                data: consumedProduct.product.nutrients,
                consumedQuantity: consumedProduct.quantity ?? 0,
                name: consumedProduct.product.name,
                image: consumedProduct.product.image_url,
                score: parseInt(consumedProduct.product.ecoscore ?? '0'),
                isWater: consumedProduct.product.isWater,
                serving: consumedProduct.product.serving,
                isFavourite: false,
                toggleFavourite: () => {}
            });
        }
        return consumedProductItems;
    }, []);

    return { mapResponse };
};

export default useMapConsumedProductResponse;

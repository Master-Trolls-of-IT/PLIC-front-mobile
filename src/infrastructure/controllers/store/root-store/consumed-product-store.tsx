import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';

class ConsumedProductStore {
    consumedProducts: ConsumedProductItemProps[];

    constructor(storageKey: string) {
        this.consumedProducts = [];

        makeObservable(
            this,
            {
                consumedProducts: observable,

                setConsumedProducts: action,
                editConsumedProductQuantity: action,
                toggleFavoriteConsumedProducts: action,
                resetStore: action
            },
            { autoBind: true }
        );

        void makePersistable(this, {
            name: storageKey,
            properties: ['consumedProducts'],
            storage: AsyncStorage
        });
    }

    setConsumedProducts = (newItems: ConsumedProductItemProps[]) => {
        this.consumedProducts = newItems;
    };

    editConsumedProductQuantity = (id: string, quantity: number) => {
        this.consumedProducts.map((product) => {
            if (product.id === id) {
                product.consumedQuantity = quantity;
            }
        });
    };

    toggleFavoriteConsumedProducts = (id: string) => {
        const index = this.consumedProducts.findIndex((elem) => elem.id === id);
        const copy = [...this.consumedProducts];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.consumedProducts = [...copy];
    };

    resetStore = () => {
        this.consumedProducts = [];
    };
}

export default ConsumedProductStore;

import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';

class DataStore {
    history: HistoricalItemProps[];
    consumedProducts: ConsumedProductItemProps[];

    constructor(storageKey: string) {
        this.history = [];
        this.consumedProducts = [];
        makeObservable(
            this,
            {
                history: observable,
                consumedProducts: observable,

                addItem: action,
                toggleFavoriteHistory: action,
                toggleFavoriteConsumedProducts: action,
                setConsumedProducts: action
            },
            { autoBind: true }
        );

        void makePersistable(this, {
            name: storageKey,
            properties: ['history'],
            storage: AsyncStorage
        });
    }

    addItem = (newItem: HistoricalItemProps) => {
        this.history = [newItem].concat(this.history);
    };
    setConsumedProducts = (newItems: ConsumedProductItemProps[]) => {
        this.consumedProducts = newItems;
    };

    toggleFavoriteHistory = (id: string) => {
        const index = this.history.findIndex((elem) => elem.id === id);
        const copy = [...this.history];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.history = [...copy];
    };

    toggleFavoriteConsumedProducts = (id: string) => {
        const index = this.consumedProducts.findIndex((elem) => elem.id === id);
        const copy = [...this.consumedProducts];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.consumedProducts = [...copy];
    };
}

export default DataStore;

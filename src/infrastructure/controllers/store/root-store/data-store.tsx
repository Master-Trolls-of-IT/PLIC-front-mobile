import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import {ConsumedProductItemProps} from "~/domain/interfaces/props/search-list/consumed-products-props";

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
                toggleFavorite: action,
                setConsumedProducts: action
            },
            { autoBind: true }
        );

        void makePersistable(this, {
            name: storageKey,
            properties: ["history"],
            storage: AsyncStorage
        });
    }

    addItem = (newItem: HistoricalItemProps) => {
        this.history = [newItem].concat(this.history);
    };
    setConsumedProducts = (newItems: ConsumedProductItemProps[]) => {
        this.consumedProducts = newItems;
    }

    toggleFavorite = (id: string) => {
        const index = this.history.findIndex((elem) => elem.id === id);
        const copy = [...this.history];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.history = [...copy];
    };
}

export default DataStore;

import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';

class DataStore {
    history: HistoricalItemProps[];

    constructor(storageKey: string) {
        this.history = [];

        makeObservable(
            this,
            {
                history: observable,

                addItem: action,
                toggleFavorite: action
            },
            { autoBind: true }
        );

        void makePersistable(this, {
            name: storageKey,
            properties: [],
            storage: AsyncStorage
        });
    }

    addItem = (newItem: HistoricalItemProps) => {
        this.history = [newItem].concat(this.history);
    };

    toggleFavorite = (id: string) => {
        const index = this.history.findIndex((elem) => elem.id === id);
        const copy = [...this.history];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.history = [...copy];
    };
}

export default DataStore;

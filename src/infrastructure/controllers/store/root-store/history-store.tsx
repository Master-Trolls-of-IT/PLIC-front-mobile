import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/item/historical-item/historical-item-props';

class HistoryStore {
    history: HistoricalItemProps[];

    constructor(storageKey: string) {
        this.history = [];

        makeObservable(
            this,
            {
                history: observable,

                addItem: action,
                toggleFavoriteHistory: action,
                resetStore: action
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

    toggleFavoriteHistory = (id: string) => {
        const index = this.history.findIndex((elem) => elem.id === id);
        const copy = [...this.history];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.history = [...copy];
    };

    resetStore = () => {
        this.history = [];
    };
}

export default HistoryStore;

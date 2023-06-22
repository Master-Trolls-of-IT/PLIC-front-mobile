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

                addItem: action
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
}

export default DataStore;

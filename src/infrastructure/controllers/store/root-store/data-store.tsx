import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoricalCardProps } from '~/domain/interfaces/props/search-list/historical-card-props';
import { historicalCardRawData } from '~/domain/entities/constants/historical-card-raw-data';

class DataStore {
    history: HistoricalCardProps[];

    constructor(storageKey: string) {
        this.history = historicalCardRawData; // TODO: à remplacer par [] quand la récupération des données du scan sera faite

        makeObservable(
            this,
            {
                history: observable,

                addCard: action
            },
            { autoBind: true }
        );

        void makePersistable(this, {
            name: storageKey,
            properties: ['history'],
            storage: AsyncStorage
        });
    }

    addCard = (newCard: HistoricalCardProps) => {
        this.history = [newCard].concat(this.history);
    };
}

export default DataStore;

import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';
import { WidgetsParams } from '~/domain/interfaces/props/widgets/widgets-params';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import RootStore from '~/infrastructure/controllers/store/root-store/index';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';

class DataStore {
    rootStore: RootStore;
    history: HistoricalItemProps[];
    consumedProducts: ConsumedProductItemProps[];
    widgetsParams: WidgetsParams;
    ecoScore: number;
    dayEnergy: NutrientData;

    constructor(storageKey: string, rootStore: RootStore) {
        this.rootStore = rootStore;
        this.history = [];
        this.consumedProducts = [];
        this.widgetsParams = { line1: [], line2: [] };
        this.ecoScore = 42;
        this.dayEnergy = { nutrientType: NutrientsEnum.Energy, earned: 10, goal: 1200 };

        makeObservable(
            this,
            {
                history: observable,
                consumedProducts: observable,
                widgetsParams: observable,
                ecoScore: observable,

                addItem: action,
                toggleFavorite: action,
                setConsumedProducts: action,
                setWidgetParams: action,
                setEcoScore: action
            },
            { autoBind: true }
        );

        void makePersistable(this, {
            name: storageKey,
            properties: ['history', 'widgetsParams'],
            storage: AsyncStorage
        });
    }

    addItem = (newItem: HistoricalItemProps) => {
        this.history = [newItem].concat(this.history);
    };
    setConsumedProducts = (newItems: ConsumedProductItemProps[]) => {
        this.consumedProducts = newItems;
    };

    toggleFavorite = (id: string) => {
        const index = this.history.findIndex((elem) => elem.id === id);
        const copy = [...this.history];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.history = [...copy];
    };

    setWidgetParams = (newParams: WidgetsParams) => {
        this.widgetsParams = newParams;
    };

    setEcoScore = (newEcoScore: number) => {
        this.ecoScore = newEcoScore;
    };
}

export default DataStore;

import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';
import { WidgetsParams } from '~/domain/interfaces/props/widgets/widgets-params';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import RootStore from '~/infrastructure/controllers/store/root-store/index';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import GetDailyNutrientsGoal from '~/infrastructure/ui/shared/helper/get-daily-nutrients-goal';
import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';

class DataStore {
    rootStore: RootStore;
    history: HistoricalItemProps[];
    consumedProducts: ConsumedProductItemProps[];
    widgetsParams: WidgetsParams;

    dailyNutrientsGoal: DailyNutrientsType;
    dailyNutrientsEarned: DailyNutrientsType;
    ecoScore: number;
    dayEnergy: number;

    constructor(storageKey: string, rootStore: RootStore) {
        this.rootStore = rootStore;
        this.history = [];
        this.consumedProducts = [];
        this.widgetsParams = { line1: [], line2: [] };

        this.dailyNutrientsGoal = GetDailyNutrientsGoal(rootStore.LoginStore.userData);
        this.dailyNutrientsEarned = { energy: 0, carbohydrate: 0, lipid: 0, protein: 0 };
        this.ecoScore = 42;
        this.dayEnergy = 0;

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

    toggleFavorite = (id: string) => {
        const index = this.history.findIndex((elem) => elem.id === id);
        const copy = [...this.history];
        copy[index].isFavorite = !copy[index].isFavorite;
        this.history = [...copy];
    };

    setWidgetParams = (newParams: WidgetsParams) => {
        this.widgetsParams = newParams;
    };

    setEcoScore = (newEcoScore: number) => {
        this.ecoScore = newEcoScore;
    };

    updateDailyNutrientsGoal = () => {
        this.dailyNutrientsGoal = GetDailyNutrientsGoal(this.rootStore.LoginStore.userData.BasalMetabolism);
    };
}

export default DataStore;

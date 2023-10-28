import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/item/historical-item/historical-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import { WidgetsParams } from '~/domain/interfaces/props/widgets/widgets-params';
import RootStore from '~/infrastructure/controllers/store/root-store/index';
import GetDailyNutrientsGoal from '~/infrastructure/ui/shared/helper/nutrient/get-daily-nutrients-goal';
import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';

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
        this.widgetsParams = {
            line1: [{ type: WidgetEnum.Large }],
            line2: [{ type: WidgetEnum.Anecdote }, { type: WidgetEnum.EcoScore }]
        };

        this.dailyNutrientsGoal = GetDailyNutrientsGoal(rootStore.LoginStore.userData);
        this.dailyNutrientsEarned = {
            energy: 0,
            carbohydrate: 0,
            lipid: 0,
            protein: 0,
            sugar: 0,
            salt: 0,
            fattyAcid: 0,
            fiber: 0
        };
        this.ecoScore = 42;
        this.dayEnergy = 0;

        makeObservable(
            this,
            {
                history: observable,
                consumedProducts: observable,
                widgetsParams: observable,
                ecoScore: observable,
                dailyNutrientsGoal: observable,
                dailyNutrientsEarned: observable,

                addItem: action,
                toggleFavoriteHistory: action,
                toggleFavoriteConsumedProducts: action,
                setConsumedProducts: action,
                editConsumedProductQuantity: action,
                setWidgetParams: action,
                setEcoScore: action,
                updateDailyNutrientsGoal: action
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

    editConsumedProductQuantity = (id: string, quantity: number) => {
        this.consumedProducts.map((product) => {
            if (product.id === id) {
                product.consumedQuantity = quantity;
            }
        });
    };

    toggleFavoriteHistory = (id: string) => {
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

    updateDailyNutrientsGoal = () => {
        this.dailyNutrientsGoal = GetDailyNutrientsGoal(this.rootStore.LoginStore.userData);
    };

    toggleFavoriteConsumedProducts = (id: string) => {
        const index = this.consumedProducts.findIndex((elem) => elem.id === id);
        const copy = [...this.consumedProducts];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.consumedProducts = [...copy];
    };
}

export default DataStore;

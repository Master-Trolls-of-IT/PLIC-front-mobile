import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';

class MealStore {
    mealList: MealItemProps[];

    constructor(storageKey: string) {
        this.mealList = [];
        makeObservable(this, { mealList: observable, addMeal: action, toggleFavorite: action }, { autoBind: true });

        void makePersistable(this, {
            name: storageKey,
            properties: ['mealList'],
            storage: AsyncStorage
        });
    }

    addMeal = (newItem: MealItemProps) => {
        this.mealList = [newItem].concat(this.mealList);
    };

    toggleFavorite = (id: string) => {
        const index = this.mealList.findIndex((elem) => elem.id === id);
        const copy = [...this.mealList];
        copy[index].isFavorite = !copy[index].isFavorite;
        this.mealList = [...copy];
    };
}

export default MealStore;

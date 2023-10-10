import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';

class MealStore {
    history: MealItemProps[];

    constructor(storageKey: string) {
        this.history = [];
        makeObservable(this, { history: observable, addMeal: action, toggleFavorite: action }, { autoBind: true });

        void makePersistable(this, {
            name: storageKey,
            properties: ['history'],
            storage: AsyncStorage
        });
    }

    addMeal = (newItem: MealItemProps) => {
        this.history = [newItem].concat(this.history);
    };

    toggleFavorite = (id: string) => {
        const index = this.history.findIndex((elem) => elem.id === id);
        const copy = [...this.history];
        copy[index].isFavorite = !copy[index].isFavorite;
        this.history = [...copy];
    };
}

export default MealStore;

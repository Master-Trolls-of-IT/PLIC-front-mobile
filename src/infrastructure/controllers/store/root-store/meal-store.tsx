import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';
import { MealProductsItemProps } from '~/domain/interfaces/props/search-list/item/meal-products-item/meal-products-item-props';
import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';

class MealStore {
    mealList: MealItemProps[];
    mealProducts: MealProductsItemProps[];
    mealTags: ItemTag[];

    constructor(storageKey: string) {
        this.mealList = [];
        this.mealProducts = [];
        this.mealTags = [];

        makeObservable(
            this,
            {
                mealList: observable,
                mealProducts: observable,
                mealTags: observable,

                addMeal: action,
                setMealList: action,
                toggleFavorite: action,
                setMealTags: action,
                addMealProducts: action,
                editMealProductQuantity: action,
                deleteMealProduct: action,
                deleteMealTag: action,
                deleteMeal: action,
                resetStore: action,
                resetCreateMealStore: action
            },
            { autoBind: true }
        );

        void makePersistable(this, {
            name: storageKey,
            properties: ['mealList'],
            storage: AsyncStorage
        });
    }

    addMeal = (newItem: MealItemProps) => {
        this.mealList = [newItem].concat(this.mealList);
    };

    getMeal = (id: string): MealItemProps => {
        return this.mealList.find((meal) => meal.id == id) as MealItemProps;
    };

    setMealList = (newItems: MealItemProps[]) => {
        this.mealList = newItems;
    };

    toggleFavorite = (id: string) => {
        const index = this.mealList.findIndex((elem) => elem.id === id);
        const copy = [...this.mealList];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.mealList = [...copy];
    };

    addMealProducts = (product: MealProductsItemProps | undefined) => {
        if (product) this.mealProducts.push(product);
    };

    editMealProductQuantity = (id: string, quantity: string) => {
        this.mealProducts.map((product) => {
            if (product.id === id) {
                product.consumedQuantity = quantity;
            }
        });
    };

    deleteMealProduct = (id: string) => {
        this.mealProducts = this.mealProducts.filter((product) => product.id != id);
    };

    setMealTags = (newMealTags: ItemTag[]) => {
        this.mealTags = newMealTags;
    };

    deleteMealTag = (tag: ItemTag) => {
        this.mealTags = this.mealTags.filter((tagItem) => tagItem.label != tag.label);
    };

    deleteMeal = (id: string) => {
        this.mealList = this.mealList.filter((meal) => meal.id != id);
    };

    resetStore = () => {
        this.mealList = [];
        this.mealProducts = [];
        this.mealTags = [];
    };

    resetCreateMealStore = () => {
        this.mealProducts = [];
        this.mealTags = [];
    };
}

export default MealStore;

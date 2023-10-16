import { action, makeObservable, observable } from 'mobx';
import { MealProductItemProps } from '~/domain/interfaces/props/search-list/meal-product-item-props';

class CreateMealStore {
    mealProducts: MealProductItemProps[];

    constructor() {
        this.mealProducts = [];

        makeObservable(this, {
            mealProducts: observable,

            addMealProducts: action,
            resetStore: action
        });
    }

    addMealProducts = (product: MealProductItemProps | undefined) => {
        if (product) this.mealProducts.push(product);
    };

    resetStore = () => {
        this.mealProducts = [];
    };
}

export default CreateMealStore;

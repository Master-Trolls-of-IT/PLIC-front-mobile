import { action, makeObservable, observable } from 'mobx';
import { MealProductsItemProps } from '~/domain/interfaces/props/search-list/item/meal-products-item/meal-products-item-props';
import { MealItemTag } from '~/domain/interfaces/props/tags/meal-item-tag';

class CreateMealStore {
    mealProducts: MealProductsItemProps[];
    mealTags: MealItemTag[];

    constructor() {
        this.mealProducts = [];
        this.mealTags = [];

        makeObservable(this, {
            mealProducts: observable,
            mealTags: observable,

            addMealProducts: action,
            editMealProductQuantity: action,
            deleteMealProduct: action,
            setMealTags: action,
            deleteMealTag: action,
            resetStore: action
        });
    }

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

    setMealTags = (newMealTags: MealItemTag[]) => {
        this.mealTags = newMealTags;
    };

    deleteMealTag = (tag: MealItemTag) => {
        this.mealTags = this.mealTags.filter((tagItem) => tagItem.label != tag.label);
    };

    resetStore = () => {
        this.mealProducts = [];
        this.mealTags = [];
    };
}

export default CreateMealStore;

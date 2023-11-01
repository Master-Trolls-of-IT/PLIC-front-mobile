import { action, makeObservable, observable } from 'mobx';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';

class RecipeStore {
    recipeList: RecipeItemProps[];

    constructor() {
        this.recipeList = [];
        makeObservable(
            this,
            {
                recipeList: observable,

                resetStore: action,
                addRecipe: action,
                toggleFavorite: action
            },
            { autoBind: true }
        );
    }

    addRecipe = (newItem: RecipeItemProps) => {
        this.recipeList = [newItem].concat(this.recipeList);
    };

    toggleFavorite = (id: string) => {
        const index = this.recipeList.findIndex((elem) => elem.id === id);
        const copy = [...this.recipeList];
        copy[index].isFavourite = !copy[index].isFavourite;
        this.recipeList = [...copy];
    };

    resetStore = () => {
        this.recipeList = [];
    };
}

export default RecipeStore;

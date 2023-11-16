import { action, makeObservable, observable } from 'mobx';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';
import { RecipeItemInfo } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-info';
import { ActiveRecipeInfo } from '~/domain/interfaces/props/recipe-item/active-recipe-info';
import { defaultRecipeData } from '~/domain/interfaces/constant/default-recipe-data';
class RecipeStore {
    recipeList: RecipeItemProps[];
    activeRecipe: RecipeItemInfo | undefined;
    constructor() {
        this.recipeList = defaultRecipeData;
        this.activeRecipe = undefined;
        makeObservable(
            this,
            {
                recipeList: observable,
                activeRecipe: observable,

                resetStore: action,
                addRecipe: action,
                toggleFavorite: action,
                setActiveRecipe: action
            },
            { autoBind: true }
        );
    }

    addRecipe = (newItem: RecipeItemProps) => {
        if (newItem) this.recipeList.push(newItem);
    };

    toggleFavorite = (id: string) => {
        const index = this.recipeList.findIndex((elem) => elem.recipeItem.id === id);
        const copy = [...this.recipeList];
        copy[index].recipeItem.isFavourite = !copy[index].recipeItem.isFavourite;
        this.recipeList = [...copy];
    };

    setActiveRecipe = (activeRecipe: ActiveRecipeInfo | undefined) => {
        this.activeRecipe = activeRecipe;
    };
    resetStore = () => {
        this.recipeList = [];
    };
}

export default RecipeStore;

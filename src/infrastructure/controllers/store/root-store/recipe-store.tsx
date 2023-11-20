import { action, makeObservable, observable } from 'mobx';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';
import { RecipeItemInfo } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-info';
import { ActiveRecipeInfo } from '~/domain/interfaces/props/recipe-item/active-recipe-info';
import { defaultRecipeData } from '~/domain/interfaces/constant/default-recipe-data';
import { RecipeItemTag } from '~/domain/interfaces/props/tags/recipe-item-tag';
class RecipeStore {
    recipeList: RecipeItemProps[];
    recipeTags: RecipeItemTag[];
    activeRecipe: RecipeItemInfo | undefined;
    constructor() {
        this.recipeList = [];
        this.activeRecipe = undefined;
        this.recipeTags = [];
        makeObservable(
            this,
            {
                recipeList: observable,
                recipeTags: observable,
                activeRecipe: observable,

                resetStore: action,
                addRecipe: action,
                setRecipeList: action,
                toggleFavorite: action,
                setActiveRecipe: action,
                setRecipeTags: action,
                deleteRecipeTag: action,
                resetCreateRecipeStore: action
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

    setRecipeTags = (newRecipeTags: RecipeItemTag[]) => {
        this.recipeTags = newRecipeTags;
    };

    deleteRecipeTag = (tag: RecipeItemTag) => {
        this.recipeTags = this.recipeTags.filter((tagItem) => tagItem.label != tag.label);
    };

    setActiveRecipe = (activeRecipe: ActiveRecipeInfo | undefined) => {
        this.activeRecipe = activeRecipe;
    };
    resetStore = () => {
        this.recipeList = [];
    };

    resetCreateRecipeStore = () => {
        this.activeRecipe = undefined;
        this.recipeTags = [];
    };
    setRecipeList = (newItems: RecipeItemProps[]) => {
        this.recipeList = newItems;
    };
}

export default RecipeStore;

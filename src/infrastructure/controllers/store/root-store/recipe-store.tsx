import { action, makeObservable, observable } from 'mobx';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';

class RecipeStore {
    recipeList: RecipeItemProps[];

    constructor() {
        this.recipeList = [
            {
                style: {},
                recipeItem: {
                    id: '1',
                    title: 'DELICIOUS PASTA',
                    score: 4.5,
                    rating: 4.5,
                    numberOfRatings: 45,
                    duration: 4,
                    difficulty: 'tres dur',
                    ingredients: [
                        'Pasta',
                        'Tomato Sauce',
                        'Cheese',
                        'test',
                        'estt',
                        'klfmd',
                        'Pasta',
                        'Tomato Sauce',
                        'Cheese',
                        'test',
                        'estt',
                        'klfmd'
                    ],
                    steps: ['Boil pasta', 'Add tomato sauce', 'Sprinkle cheese', 'Enjoy!', 'test'],
                    kcal: 350,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71yJdPSVTxX0SsIfhXR8-0JQ0Wq1IWM1aQ7he2j4&s',
                    author: 'Chef John',
                    isFavourite: true,
                    tags: [
                        {
                            label: 'prout',
                            color: 'red'
                        },
                        { label: 'prout2', color: 'green' }
                    ]
                }
            }
        ];
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
        if (newItem) this.recipeList.push(newItem);
    };

    toggleFavorite = (id: string) => {
        const index = this.recipeList.findIndex((elem) => elem.recipeItem.id === id);
        const copy = [...this.recipeList];
        copy[index].recipeItem.isFavourite = !copy[index].recipeItem.isFavourite;
        this.recipeList = [...copy];
    };

    resetStore = () => {
        this.recipeList = [];
    };
}

export default RecipeStore;

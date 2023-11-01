import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { RecipeInfo } from '~/domain/interfaces/props/recipe-item/recipe-item-info';

const useRecipePageData = () => {
    const {
        RecipeStore: { recipeList }
    } = useStore();

    const [isRecipeActive, setIsRecipeActive] = useState(true);
    const [activeRecipe, setActiveRecipe] = useState<RecipeInfo | undefined>(undefined);
    const [errorResponse, setErrorResponse] = useState('');
    const mockRecipe: RecipeInfo = {
        id: '1',
        name: 'DELICIOUS PASTA',
        score: 4.5,
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
        recipe: ['Boil pasta', 'Add tomato sauce', 'Sprinkle cheese', 'Enjoy!', 'test'],
        kcal: 350,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71yJdPSVTxX0SsIfhXR8-0JQ0Wq1IWM1aQ7he2j4&s',
        author: 'Chef John',
        style: { cuisine: 'Italian', difficulty: 'Easy' },
        isFavourite: true,
        ecoScore: '90',
        nutriscore: {
            score: 32,
            grade: 'prout'
        },
        tags: [
            {
                label: 'prout',
                color: 'red'
            },
            { label: 'prout2', color: 'green' }
        ]
    };
    const onPressViewDetail = () => {
        setActiveRecipe(mockRecipe);
        setIsRecipeActive(true);
    };
    const onPressConsumeMeal = async (/*quantity: string*/) => {
        //TODO Ajouter les recettes aux aliments consommés (Fonctions Front + back à faire)
        //await addRecipe(recipe);
    };

    const onPressGoBack = async () => {
        setIsRecipeActive(false);
        setErrorResponse('');
    };

    const toggleFavourite = () => {
        //TODO Faire la fonction favourite
    };
    return {
        isRecipeActive,
        onPressConsumeMeal,
        onPressViewDetail,
        activeRecipe,
        recipeList,
        toggleFavourite,
        errorResponse,
        onPressGoBack,
        mockRecipe
    };
};

export default useRecipePageData;

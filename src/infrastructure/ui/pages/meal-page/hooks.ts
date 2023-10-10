import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import { mealItemTags } from '~/domain/entities/constants/meal-page-meal-tags';

const useMealPageData = () => {
    const addMealButton = require('~/domain/entities/assets/meal-page/add-meal-button.svg');

    const [newHeight, newWidth] = [70, 70];
    const mockData: MealItemProps[] = [
        {
            title: 'REPAS COMPLET 1',
            score: 92,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 5,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian],
            isFavourite: true
        },
        {
            title: 'REPAS COMPLET 2',
            score: 70,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 1,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian],
            isFavourite: true
        },
        {
            title: 'REPAS COMPLET 3',
            score: 49,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 3,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian],
            isFavourite: false
        },
        {
            title: 'REPAS COMPLET 4',
            score: 21,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Japanese],
            isFavourite: false
        },
        {
            title: 'REPAS COMPLET 5',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 11,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian],
            isFavourite: false
        },
        {
            title: 'REPAS COMPLET 6',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 4,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian],
            isFavourite: false
        }
    ];

    return {
        mockData,
        addMealButton,
        newHeight,
        newWidth
    };
};

export default useMealPageData;

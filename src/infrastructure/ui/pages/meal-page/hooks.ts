import { useState } from 'react';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import { useStore } from '~/infrastructure/controllers/store';
import { mealItemTags } from '~/domain/entities/constants/meal-page-meal-tags';

const useMealPageData = () => {
    const addMealButton = require('~/domain/entities/assets/meal-page/add-meal-button.svg');

    const [newHeight, newWidth] = [70, 70];

    const {
        MealStore: { mealList }
    } = useStore();

    const [isMealActive, setMealActive] = useState(false);

    const onAddPress = () => {
        setMealActive((prevState) => !prevState);
    };

    const onPressMealMenu = () => {
        setMealActive(false);
    };

    const mockData: MealItemProps[] = [
        {
            isFavourite: true,
            id: '1',
            title: 'REPAS COMPLET 1',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian]
        },
        {
            isFavourite: true,
            id: '1',
            title: 'REPAS COMPLET 2',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Vegetarian]
        },
        {
            isFavourite: true,
            id: '1',
            title: 'REPAS COMPLET 3',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian]
        },
        {
            isFavourite: true,
            id: '1',
            title: 'REPAS COMPLET 4',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Japanese]
        },
        {
            isFavourite: true,
            id: '1',
            title: 'REPAS COMPLET 5',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Vegetarian]
        }
    ];

    return {
        mockData,
        mealList,
        addMealButton,
        newHeight,
        newWidth,
        isMealActive,
        onAddPress,
        onPressMealMenu
    };
};

export default useMealPageData;

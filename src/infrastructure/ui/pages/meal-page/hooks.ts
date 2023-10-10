import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import { useMemo, useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import {mealItemTags} from "~/domain/entities/constants/meal-page-meal-tags";

const useMealPageData = () => {
    const addMealButton = require('~/domain/entities/assets/meal-page/add-meal-button.svg');

    const [newHeight, newWidth] = [70, 70];

    const {
        DataStore: { history }
    } = useStore();

    const [isMealActive, setMealActive] = useState(false);

    const onAddPress = () => {
        setMealActive((prevState) => !prevState);
    };

    const onPressMealMenu = () => {
        setMealActive(false);
    }

    const mockData: MealItemProps[] = [
        {
            isFavorite: true,
            id: '1',
            title: 'REPAS COMPLET 1',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian],
        },
        {
            isFavorite: true,
            id: '1',
            title: 'REPAS COMPLET 1',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Vegetarian]
        },
        {
            isFavorite: true,
            id: '1',
            title: 'REPAS COMPLET 1',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian]
        },
        {
            isFavorite: true,
            id: '1',
            title: 'REPAS COMPLET 1',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Japanese]
        },
        {
            isFavorite: true,
            id: '1',
            title: 'REPAS COMPLET 1',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Vegetarian]
        }
    ];

    return {
        mockData,
        history,
        addMealButton,
        newHeight,
        newWidth,
        isMealActive,
        onAddPress,
        onPressMealMenu
    };
};

export default useMealPageData;


import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import { useStore } from '~/infrastructure/controllers/store';
import { mealItemTags } from '~/domain/entities/constants/meal-page-meal-tags';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useMealPageData = () => {
    const {
        NavigationStore: { navigate },
        MealStore: { mealList }
    } = useStore();

    const onPressCreateMeal = () => {
        navigate(PagesEnum.CreateMealPage);
    };

    const mockData: MealItemProps[] = [
        {
            isFavourite: true,
            id: '1',
            title: 'REPAS COMPLET 1',
            score: 24,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Japanese, mealItemTags.Vegetarian]
        },
        {
            isFavourite: true,
            id: '1',
            title: 'REPAS COMPLET 2',
            score: 49,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            numberOfProducts: 8,
            mealTags: [mealItemTags.Vegetarian]
        },
        {
            isFavourite: true,
            id: '1',
            title: 'REPAS COMPLET 3',
            score: 74,
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
        onPressCreateMeal
    };
};

export default useMealPageData;

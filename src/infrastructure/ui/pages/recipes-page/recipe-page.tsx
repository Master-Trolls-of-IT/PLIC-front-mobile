import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import RecipePageStyle from '~/infrastructure/ui/pages/recipes-page/recipe-page-style';
import ScannedItem from '~/infrastructure/ui/shared/component/scanned-item/scanned-item';
import { useStore } from '~/infrastructure/controllers/store';
import useRecipePageData from '~/infrastructure/ui/pages/recipes-page/hooks';
import ActiveRecipeItem from '~/infrastructure/ui/shared/component/recipe-item/recipe-item';
import { RecipeInfo } from '~/domain/interfaces/props/recipe-item/recipe-item-info';

const RecipePage = () => {
    const {
        NavigationStore: { navigate }
    } = useStore();
    const mockRecipe: RecipeInfo = {
        id: '1',
        name: 'Delicious Pasta',
        score: 4.5,
        ingredients: ['Pasta', 'Tomato Sauce', 'Cheese'],
        recipe: ['Boil pasta', 'Add tomato sauce', 'Sprinkle cheese', 'Enjoy!'],
        kcal: 350,
        image: 'pasta.jpg',
        author: 'Chef John',
        style: { cuisine: 'Italian', difficulty: 'Easy' },
        isFavourite: true,
        ecoScore: '90',
        nutriscore: {
            score: 32,
            grade: 'prout'
        }
    };

    const { isRecipeActive, onPressConsumeMeal, onPressViewDetail, activeRecipe, recipeList, toggleFavourite } =
        useRecipePageData(navigate);

    return (
        <View style={RecipePageStyle.background}>
            <Text style={{ ...RecipePageStyle.text, ...CustomFontInterBold().text }}>Recipe Page</Text>
            <ActiveRecipeItem recipe={mockRecipe} toggleFavourite={toggleFavourite} />
        </View>
    );
};
export default observer(RecipePage);

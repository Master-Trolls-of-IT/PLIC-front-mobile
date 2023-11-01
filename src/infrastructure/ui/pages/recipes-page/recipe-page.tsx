import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import RecipePageStyle from '~/infrastructure/ui/pages/recipes-page/recipe-page-style';
import useRecipePageData from '~/infrastructure/ui/pages/recipes-page/hooks';
import ActiveRecipeItem from '~/infrastructure/ui/shared/component/recipe-item/recipe-item';

const RecipePage = () => {
    const { isRecipeActive, onPressViewDetail, activeRecipe, recipeList, toggleFavourite, onPressGoBack, mockRecipe } =
        useRecipePageData();

    return (
        <View style={RecipePageStyle.background}>
            <Text style={{ ...RecipePageStyle.text, ...CustomFontInterBold().text }}>Recipe Page</Text>
            <TouchableOpacity onPress={onPressViewDetail}>
                <Text>Boutton Temporaire pour activer la popup</Text>
            </TouchableOpacity>
            {isRecipeActive && (
                <ActiveRecipeItem recipe={mockRecipe} toggleFavourite={toggleFavourite} goBack={onPressGoBack} />
            )}
        </View>
    );
};
export default observer(RecipePage);

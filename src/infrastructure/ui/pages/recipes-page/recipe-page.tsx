import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
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

    const {
        isRecipeActive,
        onPressConsumeMeal,
        onPressViewDetail,
        activeRecipe,
        recipeList,
        toggleFavourite,
        onPressGoBack,
        mockRecipe
    } = useRecipePageData(navigate);

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

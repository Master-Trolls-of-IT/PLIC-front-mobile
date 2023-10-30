import React from 'react';
import { View } from 'react-native';
import recipePageStyle from '~/infrastructure/ui/pages/recipes-page/recipe-page-style';
import RecipePageBlobsTop from '~/infrastructure/ui/pages/recipes-page/component/background/recipe-page-blobs-top';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useRecipePageData from '~/infrastructure/ui/pages/recipes-page/hooks';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
const RecipePage = () => {
    const { mealList, onPressCreateRecipe } = useRecipePageData();

    return (
        <View style={recipePageStyle.container}>
            <View style={recipePageStyle.background}>
                <RecipePageBlobsTop />
            </View>
            <View style={recipePageStyle.header}>
                <GenericHeaderText
                    firstText={'Recettes'}
                    secondText={`Découvrez les recettes du moment !`}
                    containerStyle={recipePageStyle.headerContainer}
                />
            </View>

            <SearchList itemType={ItemEnum.Meal} data={mealList} />

            <GenericButton
                title={'Créer une recette'}
                onPress={onPressCreateRecipe}
                style={{
                    container: recipePageStyle.buttonContainer,
                    text: recipePageStyle.buttonText
                }}
            />
        </View>
    );
};

export default RecipePage;

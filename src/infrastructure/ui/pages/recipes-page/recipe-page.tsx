import React from 'react';
import { View } from 'react-native';
import recipePageStyle from '~/infrastructure/ui/pages/recipes-page/recipe-page-style';
import RecipePageBlobsTop from '~/infrastructure/ui/pages/recipes-page/component/background/recipe-page-blobs-top';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useRecipePageData from '~/infrastructure/ui/pages/recipes-page/hooks';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import RecipeItem from "~/infrastructure/ui/pages/recipes-page/RecipeItem";
export const recipeData = [
    {
        id: 1,
        image: 'https://picsum.photos/200/300',
        title: 'Recette 1',
        rating: 4.5,
        numRatings: 50,
        prepTime: '30min',
        difficulty: 'Facile',
        ecoScore: '4.2',
        mainIngredients: ['Ingrédient 1', 'Ingrédient 2', 'Ingrédient 3'],
        createdBy: 'Créateur 1',
        tags: ['Tag 1', 'Tag 2']
    },
    {
        id: 2,
        image: 'https://picsum.photos/200/300',
        title: 'Recette 2',
        rating: 4.0,
        numRatings: 30,
        prepTime: '45min',
        difficulty: 'Moyen',
        ecoScore: '3.8',
        mainIngredients: ['Ingrédient 4', 'Ingrédient 5'],
        createdBy: 'Créateur 2',
        tags: ['Tag 3', 'Tag 4']
    },
    // Ajoutez d'autres recettes simulées ici
];

const RecipePage = () => {
    const { recipeList, onPressCreateRecipe, onPressShowRecipePage } = useRecipePageData();

    return (
        <View>
            <View style={recipePageStyle.background}>
                <RecipePageBlobsTop />
            </View>
            <View style={recipePageStyle.container}>
                <GenericHeaderText
                    firstText={'Recettes'}
                    secondText={`Découvrez les recettes du moment !`}
                    containerStyle={recipePageStyle.headerContainer}
                />
            </View>
            <SearchList itemType={ItemEnum.Recipe} data={recipeList} />

            <View style={recipePageStyle.buttonContainer}>
                <GenericButton
                    title={'Mes recettes'}
                    style={{
                        container: recipePageStyle.brownButtonContainer,
                        text: recipePageStyle.brownButtonText
                    }}
                    onPress={onPressCreateRecipe}
                />
                <GenericButton
                    title={'Créer une recette'}
                    style={{
                        container: recipePageStyle.greenButtonContainer,
                        text: recipePageStyle.greenButtonText
                    }}
                    onPress={onPressShowRecipePage}
                />
            </View>
        </View>
    );
};

export default RecipePage;

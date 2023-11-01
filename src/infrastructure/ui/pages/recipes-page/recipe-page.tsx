import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import recipePageStyle from '~/infrastructure/ui/pages/recipes-page/recipe-page-style';
import RecipePageBlobsTop from '~/infrastructure/ui/pages/recipes-page/component/background/recipe-page-blobs-top';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useRecipePageData from '~/infrastructure/ui/pages/recipes-page/hooks';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import ActiveRecipeItem from '~/infrastructure/ui/shared/component/recipe-item/recipe-item';
const RecipePage = () => {
    const {
        recipeList,
        toggleFavourite,
        onPressShowMyRecipes,
        onPressCreateRecipe,
        onPressGoBack,
        activeRecipe,
        isRecipeActive
    } = useRecipePageData();

    return (
        <View style={recipePageStyle.container}>
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
                    onPress={onPressShowMyRecipes}
                />
                <GenericButton
                    title={'Créer une recette'}
                    style={{
                        container: recipePageStyle.greenButtonContainer,
                        text: recipePageStyle.greenButtonText
                    }}
                    onPress={onPressCreateRecipe}
                />
            </View>

            {isRecipeActive && (
                <ActiveRecipeItem
                    activeRecipe={activeRecipe}
                    toggleFavourite={toggleFavourite}
                    goBack={onPressGoBack}
                />
            )}
        </View>
    );
};

export default observer(RecipePage);

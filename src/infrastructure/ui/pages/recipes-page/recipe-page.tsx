import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useRecipePageData from '~/infrastructure/ui/pages/recipes-page/hooks';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import ActiveRecipeItem from '~/infrastructure/ui/shared/component/recipe-item/recipe-item';
import RecipePageStyle from '~/infrastructure/ui/pages/recipes-page/recipe-page-style';
import RecipePageBlobsTop from '~/infrastructure/ui/pages/recipes-page/component/background/recipe-page-blobs-top';
const RecipePage = () => {
    const { recipeList, toggleFavourite, onPressShowMyRecipes, onPressCreateRecipe, onPressGoBack, activeRecipe } =
        useRecipePageData();

    return (
        <View style={RecipePageStyle.container}>
            <View style={RecipePageStyle.background}>
                <RecipePageBlobsTop />
            </View>

            <GenericHeaderText
                firstText={'Recettes'}
                secondText={`Découvrez les recettes du moment !`}
                containerStyle={RecipePageStyle.header}
            />

            <SearchList itemType={ItemEnum.Recipe} data={recipeList} />

            <View style={RecipePageStyle.buttonContainer}>
                <GenericButton
                    title={'Mes recettes'}
                    style={{
                        container: RecipePageStyle.brownButtonContainer,
                        text: RecipePageStyle.brownButtonText
                    }}
                    onPress={onPressShowMyRecipes}
                />
                <GenericButton
                    title={'Créer une recette'}
                    style={{
                        container: RecipePageStyle.greenButtonContainer,
                        text: RecipePageStyle.greenButtonText
                    }}
                    onPress={onPressCreateRecipe}
                />
            </View>

            {activeRecipe && (
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

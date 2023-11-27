import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import recipePageStyle from '~/infrastructure/ui/pages/recipes-page/recipe-page-style';
import RecipePageBlobsTop from '~/infrastructure/ui/pages/recipes-page/component/background/recipe-page-blobs-top';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import ActiveRecipeItem from '~/infrastructure/ui/shared/component/recipe-item/recipe-item';
import useMyRecipePageData from '~/infrastructure/ui/pages/my-recipes-page/hooks';

import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
const MyRecipesPage = () => {
    const { myRecipesList, toggleFavourite, onPressGoBack, activeRecipe, goBack } = useMyRecipePageData();

    return (
        <View style={recipePageStyle.container}>
            <View style={recipePageStyle.background}>
                <RecipePageBlobsTop />
                <GenericBackArrowIcon goBack={goBack} />
            </View>

            <View style={recipePageStyle.container}>
                <GenericHeaderText
                    firstText={'Vos Recettes'}
                    secondText={`Retrouvez vos recettes créées ou sauvegardées`}
                    containerStyle={recipePageStyle.headerContainer}
                />
            </View>
            <SearchList itemType={ItemEnum.Recipe} data={myRecipesList} />

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

export default observer(MyRecipesPage);

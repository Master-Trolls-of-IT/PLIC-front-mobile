import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import RecipePageStyle from '~/infrastructure/ui/pages/create-meal-page/component/meal-tags/meal-tags-style';
import CustomModalWithHeader from '~/infrastructure/ui/shared/component/modal/custom-modal-with-header/custom-modal-with-header';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import TagsComponent from '~/infrastructure/ui/pages/create-meal-page/component/tag-component/tags-component';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import { compareStrings } from '~/infrastructure/ui/shared/helper/compare-strings';
import RecipeTagsStyle from '~/infrastructure/ui/pages/create-recipe-page/component/recipe-tags/recipe-tags-style';
import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';
import useRecipeTagsData from '~/infrastructure/ui/pages/create-recipe-page/component/recipe-tags/hooks';
import { recipeItemTags } from '~/domain/entities/constants/recipe-page-recipe-tags';

const RecipeTags = () => {
    const {
        assetPlus,
        isTagsModalVisible,
        onPressWrongIconTagsModal,
        searchInput,
        setSearchInput,
        newPlusHeight,
        newPlusWidth,
        recipeTags,
        recipeTagsSelected,
        onPressTagPlus,
        onPressValidateTagsModal,
        setRecipeTagsSelected
    } = useRecipeTagsData();

    return (
        <View style={RecipeTagsStyle.tagsContainer}>
            {recipeTags.map((tag: ItemTag) => {
                return (
                    <TagsComponent
                        key={tag.label}
                        isCross={true}
                        tag={tag}
                        mealTagsSelected={recipeTagsSelected}
                        dispatch={setRecipeTagsSelected}
                    />
                );
            })}

            <TouchableOpacity style={RecipePageStyle.plusContainer} onPress={onPressTagPlus}>
                <View style={RecipePageStyle.tags}>
                    <CustomSvg
                        asset={assetPlus}
                        height={newPlusHeight}
                        width={newPlusWidth}
                        style={RecipePageStyle.plus}
                    />
                </View>
            </TouchableOpacity>

            <CustomModalWithHeader
                title={'Ajouter des tags'}
                isVisible={isTagsModalVisible}
                dispatch={onPressWrongIconTagsModal}>
                <View style={RecipePageStyle.tagsModalContainer}>
                    <Text style={{ ...RecipePageStyle.tagsModalText, ...CustomFontInterBold().text }}>
                        Sélectionner un ou plusieurs tags :
                    </Text>

                    <GenericInput
                        type={InputEnum.Search}
                        input={searchInput}
                        placeHolder={'Végétarien'}
                        dispatch={setSearchInput}
                        style={RecipePageStyle.inputContainer}
                    />

                    <ScrollView style={RecipePageStyle.modalTagsScrollViewContainer} indicatorStyle={'black'}>
                        <View style={RecipePageStyle.modalTagsContainer}>
                            {recipeItemTags.map((tag) => {
                                if (compareStrings(tag.label, searchInput))
                                    return (
                                        <TagsComponent
                                            key={tag.label}
                                            tag={tag}
                                            isCross={false}
                                            mealTagsSelected={recipeTagsSelected}
                                            dispatch={setRecipeTagsSelected}
                                        />
                                    );
                            })}
                        </View>
                    </ScrollView>

                    <View style={RecipePageStyle.footerTagsModalContainer}>
                        <Text style={{ ...RecipePageStyle.footerTagsModalText, ...CustomFontInterBold().text }}>
                            {recipeTagsSelected.length} tags sélectionnés
                        </Text>

                        <GenericButton
                            title={'Valider'}
                            onPress={onPressValidateTagsModal}
                            style={{
                                container: RecipePageStyle.validateButtonTagsModalContainer,
                                text: RecipePageStyle.validateButtonTextTagsModal
                            }}
                        />
                    </View>
                </View>
            </CustomModalWithHeader>
        </View>
    );
};

export default observer(RecipeTags);

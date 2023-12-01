import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';
import useMealTagsData from '~/infrastructure/ui/pages/create-meal-page/component/meal-tags/hooks';
import MealTagsStyle from '~/infrastructure/ui/pages/create-meal-page/component/meal-tags/meal-tags-style';
import CustomModalWithHeader from '~/infrastructure/ui/shared/component/modal/custom-modal-with-header/custom-modal-with-header';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import TagsComponent from '~/infrastructure/ui/pages/create-meal-page/component/tag-component/tags-component';
import { ItemTags } from '~/domain/entities/constants/item-tags';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import { compareStrings } from '~/infrastructure/ui/shared/helper/compare-strings';

const MealTags = () => {
    const {
        assetPlus,
        isTagsModalVisible,
        onPressWrongIconTagsModal,
        searchInput,
        setSearchInput,
        newPlusHeight,
        newPlusWidth,
        mealTags,
        mealTagsSelected,
        onPressTagPlus,
        onPressValidateTagsModal,
        setMealTagsSelected
    } = useMealTagsData();

    return (
        <View style={MealTagsStyle.tagsContainer}>
            {mealTags.map((tag: ItemTag) => {
                return (
                    <TagsComponent
                        key={tag.label}
                        isCross={true}
                        tag={tag}
                        mealTagsSelected={mealTagsSelected}
                        dispatch={setMealTagsSelected}
                    />
                );
            })}

            <TouchableOpacity style={MealTagsStyle.plusContainer} onPress={onPressTagPlus}>
                <View style={MealTagsStyle.tags}>
                    <CustomSvg
                        asset={assetPlus}
                        height={newPlusHeight}
                        width={newPlusWidth}
                        style={MealTagsStyle.plus}
                    />
                </View>
            </TouchableOpacity>

            <CustomModalWithHeader
                title={'Ajouter des tags'}
                isVisible={isTagsModalVisible}
                dispatch={onPressWrongIconTagsModal}>
                <View style={MealTagsStyle.tagsModalContainer}>
                    <Text style={{ ...MealTagsStyle.tagsModalText, ...CustomFontInterBold().text }}>
                        Sélectionner un ou plusieurs tags :
                    </Text>

                    <GenericInput
                        type={InputEnum.Search}
                        input={searchInput}
                        placeHolder={'Végétarien'}
                        dispatch={setSearchInput}
                        style={MealTagsStyle.inputContainer}
                    />

                    <ScrollView style={MealTagsStyle.modalTagsScrollViewContainer} indicatorStyle={'black'}>
                        <View style={MealTagsStyle.modalTagsContainer}>
                            {ItemTags.map((tag) => {
                                if (compareStrings(tag.label, searchInput))
                                    return (
                                        <TagsComponent
                                            key={tag.label}
                                            tag={tag}
                                            isCross={false}
                                            mealTagsSelected={mealTagsSelected}
                                            dispatch={setMealTagsSelected}
                                        />
                                    );
                            })}
                        </View>
                    </ScrollView>

                    <View style={MealTagsStyle.footerTagsModalContainer}>
                        <Text style={{ ...MealTagsStyle.footerTagsModalText, ...CustomFontInterBold().text }}>
                            {mealTagsSelected.length} tags sélectionnés
                        </Text>

                        <GenericButton
                            title={'Valider'}
                            onPress={onPressValidateTagsModal}
                            style={{
                                container: MealTagsStyle.validateButtonTagsModalContainer,
                                text: MealTagsStyle.validateButtonTextTagsModal
                            }}
                        />
                    </View>
                </View>
            </CustomModalWithHeader>
        </View>
    );
};

export default observer(MealTags);

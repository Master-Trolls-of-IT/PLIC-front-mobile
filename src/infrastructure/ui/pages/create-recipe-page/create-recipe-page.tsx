import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import CreateRecipePageStyle from '~/infrastructure/ui/pages/create-recipe-page/create-recipe-page-style';
import CreateMealPageBlobsTop from '~/infrastructure/ui/pages/create-meal-page/component/background/create-meal-page-blobs-top';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useCreateRecipePageData from '~/infrastructure/ui/pages/create-recipe-page/hooks';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/texts/generic-error-text/generic-error-message';
import CustomModalWithHeader from '~/infrastructure/ui/shared/component/modal/custom-modal-with-header/custom-modal-with-header';
import MealTags from '~/infrastructure/ui/pages/create-meal-page/component/meal-tags/meal-tags';
import GenericInputWithEndText from '~/infrastructure/ui/shared/component/inputs/generic-input-with-end-text/generic-input-with-end-text';
import GenericDropdown from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown';

const CreateRecipePage = () => {
    const {
        errorMessage,
        isValidateModalVisible,
        setIsValidateModalVisible,
        recipeTitleInput,
        setRecipeTitleInput,
        recipeDurationInput,
        setRecipeDurationInput,
        recipeDifficultyInput,
        onPressCancelModal,
        onPressScanProduct,
        onPressBackArrow,
        onPressValidateButton,
        onPressValidateModalValidate,
        mealProducts
    } = useCreateRecipePageData();

    return (
        <View style={CreateRecipePageStyle.container}>
            <View style={CreateRecipePageStyle.background}>
                <CreateMealPageBlobsTop />
                <GenericBackArrowIcon goBack={onPressBackArrow} />
            </View>

            <GenericHeaderText
                firstText={'Créer votre recette'}
                secondText={'Veuillez remplir les champs ci-dessous'}
                containerStyle={CreateRecipePageStyle.headerContainer}
            />

            <GenericErrorMessage
                text={"Un champ n'est pas valide ou aucun produit n'a été ajouté"}
                error={errorMessage}
                style={CreateRecipePageStyle.errorMessage}
            />

            <GenericInput
                title={'Titre de la recette'}
                placeHolder={'Ma recette'}
                type={InputEnum.Title}
                input={recipeTitleInput}
                dispatch={setRecipeTitleInput}
                style={CreateRecipePageStyle.inputTitle}
            />

            <View style={CreateRecipePageStyle.durationAndDifficultyContainer}>
                <GenericInputWithEndText
                    title={'Durée Totale'}
                    placeHolder={'40'}
                    type={InputEnum.Duration}
                    endText={'min'}
                    input={recipeDurationInput}
                    dispatch={setRecipeDurationInput}
                    style={CreateRecipePageStyle.inputDuration}
                />
                <GenericDropdown
                    title={'Difficulté'}
                    options={[
                        { label: 'Facile', value: '0' },
                        { label: 'Moyen', value: '1' },
                        { label: 'Autre', value: '2' }
                    ]}
                    {...recipeDifficultyInput}
                    style={CreateRecipePageStyle.inputDifficulty}
                />
            </View>

            <Text style={{ ...CreateRecipePageStyle.tagsTitle, ...CustomFontInterBold().text }}>Tags</Text>
            <View style={CreateRecipePageStyle.tagsContainer}>
                <MealTags />
            </View>

            <Text style={{ ...CreateRecipePageStyle.ingredientTitle, ...CustomFontInterBold().text }}>
                Votre liste d&apos;ingrédients ajoutés
            </Text>
            <View style={CreateRecipePageStyle.ingredientTitleHairLine} />
            <SearchList itemType={ItemEnum.MealProducts} data={mealProducts} />

            <GenericButton
                title={'Scanner un produit'}
                onPress={onPressScanProduct}
                style={{
                    container: CreateRecipePageStyle.scanButtonContainer,
                    text: CreateRecipePageStyle.brownButtonText
                }}
            />

            <GenericButton
                title={'Valider'}
                onPress={onPressValidateButton}
                style={{
                    container: CreateRecipePageStyle.validateButtonContainer,
                    text: CreateRecipePageStyle.greenButtonText
                }}
            />

            <CustomModalWithHeader
                title={recipeTitleInput}
                isVisible={isValidateModalVisible}
                dispatch={setIsValidateModalVisible}>
                <View style={CreateRecipePageStyle.validateModalContainer}>
                    <Text
                        style={{ ...CreateRecipePageStyle.textValidateModalContainer, ...CustomFontInterBold().text }}>
                        {"Confirmer l'ajout de ce repas à vos repas enregistrés ?"}
                    </Text>

                    <View style={CreateRecipePageStyle.buttonValidateModalContainer}>
                        <GenericButton
                            title={'Annuler'}
                            onPress={onPressCancelModal}
                            style={{
                                container: CreateRecipePageStyle.cancelValidateModalButtonContainer,
                                text: CreateRecipePageStyle.brownButtonText
                            }}
                        />

                        <GenericButton
                            title={'Valider'}
                            onPress={onPressValidateModalValidate}
                            style={{
                                container: CreateRecipePageStyle.validateModalButtonContainer,
                                text: CreateRecipePageStyle.greenButtonText
                            }}
                        />
                    </View>
                </View>
            </CustomModalWithHeader>
        </View>
    );
};

export default observer(CreateRecipePage);

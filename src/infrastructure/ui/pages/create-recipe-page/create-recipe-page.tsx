import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import CreateRecipePageStyle from '~/infrastructure/ui/pages/create-recipe-page/create-recipe-page-style';
import CreateMealPageBlobsTop from '~/infrastructure/ui/pages/create-meal-page/component/background/create-meal-page-blobs-top';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';

import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useCreateRecipePageData from '~/infrastructure/ui/pages/create-recipe-page/hooks';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/texts/generic-error-text/generic-error-message';
import CustomModalWithHeader from '~/infrastructure/ui/shared/component/modal/custom-modal-with-header/custom-modal-with-header';
import RecipeTags from '~/infrastructure/ui/pages/create-recipe-page/component/recipe-tags/recipe-tags';
import GenericInputWithEndText from '~/infrastructure/ui/shared/component/inputs/generic-input-with-end-text/generic-input-with-end-text';
import GenericDropdown from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/recipe-item/recipe-item-style';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

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
        onPressBackArrow,
        onPressValidateButton,
        onPressNextButton,
        stepBool,
        onPressValidateModalValidate,
        newPlusHeight,
        newPlusWidth,
        assetPlus,
        onPressIngredientPlus,
        ingredientList,
        stepList,
        ModalVisible,
        searchInput,
        setSearchInput,
        onPressWrongIconModal,
        onPressValidateIngredientModal,
        onPressValidateStepModal,
        customFontInterBoldValue
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
                        { label: 'Facile', value: 'Facile' },
                        { label: 'Moyen', value: 'Moyen' },
                        { label: 'Autre', value: 'Autre' }
                    ]}
                    {...recipeDifficultyInput}
                    style={CreateRecipePageStyle.inputDifficulty}
                />
            </View>
            {!stepBool && (
                <View style={CreateRecipePageStyle.ingredientsContainer}>
                    <Text style={{ ...CreateRecipePageStyle.tagsTitle, ...customFontInterBoldValue.text }}>Tags</Text>
                    <View style={CreateRecipePageStyle.tagsContainer}>
                        <RecipeTags />
                    </View>

                    <Text style={{ ...CreateRecipePageStyle.ingredientTitle, ...customFontInterBoldValue.text }}>
                        Votre liste d&apos;ingrédients ajoutés
                    </Text>

                    <View style={CreateRecipePageStyle.titleHairLine} />

                    <View style={CreateRecipePageStyle.listContent}>
                        <Text>
                            {ingredientList.map((ingredient, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        ...RecipeItemStyle.ingredients
                                    }}>
                                    • {ingredient}
                                    {index < ingredientList.length - 1 && '\n'}
                                </Text>
                            ))}
                        </Text>
                        <TouchableOpacity style={CreateRecipePageStyle.plusContainer} onPress={onPressIngredientPlus}>
                            <View style={CreateRecipePageStyle.tags}>
                                <Text
                                    style={{
                                        ...CreateRecipePageStyle.ingredientModalText,
                                        ...customFontInterBoldValue.text
                                    }}>
                                    Ajouter un ingrédient
                                </Text>
                                <CustomSvg
                                    asset={assetPlus}
                                    height={newPlusHeight}
                                    width={newPlusWidth}
                                    style={CreateRecipePageStyle.plus}
                                />
                            </View>
                        </TouchableOpacity>
                        <CustomModalWithHeader
                            title={"Ajout d'un ingrédient"}
                            isVisible={ModalVisible}
                            dispatch={onPressWrongIconModal}>
                            <View style={CreateRecipePageStyle.tagsModalContainer}>
                                <Text
                                    style={{
                                        ...CreateRecipePageStyle.tagsModalText,
                                        ...customFontInterBoldValue.text
                                    }}>
                                    Veuillez entrer votre ingrédient :
                                </Text>

                                <GenericInput
                                    type={InputEnum.Search}
                                    input={searchInput}
                                    placeHolder={'3 poivrons'}
                                    dispatch={setSearchInput}
                                    style={CreateRecipePageStyle.inputContainer}
                                />

                                <GenericButton
                                    title={'Valider'}
                                    onPress={onPressValidateIngredientModal}
                                    style={{
                                        container: CreateRecipePageStyle.validateButtonTagsModalContainer,
                                        text: CreateRecipePageStyle.validateButtonTextTagsModal
                                    }}
                                />
                            </View>
                        </CustomModalWithHeader>
                    </View>

                    <GenericButton
                        title={'Suivant'}
                        onPress={onPressNextButton}
                        style={{
                            container: CreateRecipePageStyle.validateButtonContainer,
                            text: CreateRecipePageStyle.greenButtonText
                        }}
                    />
                </View>
            )}
            {stepBool && (
                <View style={CreateRecipePageStyle.stepsContainer}>
                    <Text style={{ ...CreateRecipePageStyle.stepTitle, ...customFontInterBoldValue.text }}>
                        Vos étapes
                    </Text>

                    <View style={CreateRecipePageStyle.titleHairLine} />

                    <View style={CreateRecipePageStyle.listContent}>
                        <Text>
                            {stepList.map((step, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        ...RecipeItemStyle.ingredients
                                    }}>
                                    • {step}
                                    {index < stepList.length - 1 && '\n'}
                                </Text>
                            ))}
                        </Text>
                        <TouchableOpacity style={CreateRecipePageStyle.plusContainer} onPress={onPressIngredientPlus}>
                            <View style={CreateRecipePageStyle.tags}>
                                <Text
                                    style={{
                                        ...CreateRecipePageStyle.ingredientModalText,
                                        ...customFontInterBoldValue.text
                                    }}>
                                    Ajouter une étape
                                </Text>
                                <CustomSvg
                                    asset={assetPlus}
                                    height={newPlusHeight}
                                    width={newPlusWidth}
                                    style={CreateRecipePageStyle.plus}
                                />
                            </View>
                        </TouchableOpacity>
                        <CustomModalWithHeader
                            title={"Ajout d'une étape"}
                            isVisible={ModalVisible}
                            dispatch={onPressWrongIconModal}>
                            <View style={CreateRecipePageStyle.tagsModalContainer}>
                                <Text
                                    style={{
                                        ...CreateRecipePageStyle.tagsModalText,
                                        ...customFontInterBoldValue.text
                                    }}>
                                    Veuillez entrer votre étape :
                                </Text>

                                <GenericInput
                                    type={InputEnum.Search}
                                    input={searchInput}
                                    placeHolder={'Faire cuire les poivrons'}
                                    dispatch={setSearchInput}
                                    style={CreateRecipePageStyle.inputContainer}
                                />

                                <GenericButton
                                    title={'Valider'}
                                    onPress={onPressValidateStepModal}
                                    style={{
                                        container: CreateRecipePageStyle.validateButtonTagsModalContainer,
                                        text: CreateRecipePageStyle.validateButtonTextTagsModal
                                    }}
                                />
                            </View>
                        </CustomModalWithHeader>
                    </View>

                    <GenericButton
                        title={'Valider'}
                        onPress={onPressValidateButton}
                        style={{
                            container: CreateRecipePageStyle.validateButtonContainer,
                            text: CreateRecipePageStyle.greenButtonText
                        }}
                    />
                </View>
            )}

            <CustomModalWithHeader
                title={recipeTitleInput}
                isVisible={isValidateModalVisible}
                dispatch={setIsValidateModalVisible}>
                <View style={CreateRecipePageStyle.validateModalContainer}>
                    <Text
                        style={{
                            ...CreateRecipePageStyle.textValidateModalContainer,
                            ...customFontInterBoldValue.text
                        }}>
                        {"Confirmer l'ajout de cette recette à vos recettes enregistrés ?"}
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

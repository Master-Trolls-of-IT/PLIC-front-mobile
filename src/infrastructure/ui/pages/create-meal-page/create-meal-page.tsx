import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import CreateMealPageStyle from '~/infrastructure/ui/pages/create-meal-page/create-meal-page-style';
import CreateMealPageBlobsTop from '~/infrastructure/ui/pages/create-meal-page/component/background/create-meal-page-blobs-top';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import TagsComponent from '~/infrastructure/ui/pages/create-meal-page/component/tags/tags-component';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useCreateMealPageData from '~/infrastructure/ui/pages/create-meal-page/hooks';
import GenericErrorMessage from '~/infrastructure/ui/shared/component/texts/generic-error-text/generic-error-message';

const CreateMealPage = () => {
    const {
        errorMessage,
        goBack,
        mealTitleInput,
        setMealTitleInput,
        onPressScanProduct,
        onPressValidateButton,
        productsList
    } = useCreateMealPageData();

    return (
        <View style={CreateMealPageStyle.container}>
            <View style={CreateMealPageStyle.background}>
                <CreateMealPageBlobsTop />
                <GenericBackArrowIcon goBack={goBack} />
            </View>

            <GenericHeaderText
                firstText={'Créer votre repas'}
                secondText={'Veuillez remplir les champs ci-dessous'}
                containerStyle={CreateMealPageStyle.headerContainer}
            />

            <GenericErrorMessage
                text={"Un champ n'est pas valide ou aucun produit n'a été ajouté"}
                error={errorMessage}
                style={CreateMealPageStyle.errorMessage}
            />

            <GenericInput
                title={'Titre du repas'}
                placeHolder={'Mon Repas'}
                type={InputEnum.Title}
                input={mealTitleInput}
                dispatch={setMealTitleInput}
                style={CreateMealPageStyle.inputTitle}
            />

            <Text style={{ ...CreateMealPageStyle.tagsTitle, ...CustomFontInterBold().text }}>Tags</Text>
            <TagsComponent />

            <Text style={{ ...CreateMealPageStyle.ingredientTitle, ...CustomFontInterBold().text }}>
                Votre liste de produits ajoutés
            </Text>
            <View style={CreateMealPageStyle.ingredientTitleHairLine} />
            <SearchList itemType={ItemEnum.MealProducts} data={productsList} />

            <GenericButton
                title={'Scanner un produit'}
                onPress={onPressScanProduct}
                style={{ container: CreateMealPageStyle.scanButtonContainer, text: CreateMealPageStyle.scanButtonText }}
            />

            <GenericButton
                title={'Valider'}
                onPress={onPressValidateButton}
                style={{
                    container: CreateMealPageStyle.validateButtonContainer,
                    text: CreateMealPageStyle.validateButtonText
                }}
            />
        </View>
    );
};

export default observer(CreateMealPage);

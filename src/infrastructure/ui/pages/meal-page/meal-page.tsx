import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import MealPageStyle from '~/infrastructure/ui/pages/meal-page/meal-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import useMealPageData from '~/infrastructure/ui/pages/meal-page/hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import MealPageBlobsTop from '~/infrastructure/ui/pages/meal-page/component/background/meal-page-blobs-top';
import { MockedMeal } from '~/infrastructure/ui/shared/helper/mocked/mocked-meal';

const MealPage = () => {
    const { mealList, onPressCreateMeal } = useMealPageData();

    return (
        <View style={MealPageStyle.container}>
            <View style={MealPageStyle.background}>
                <MealPageBlobsTop />
            </View>

            <GenericHeaderText
                firstText={'Vos Repas'}
                secondText={'Créer un repas ou visualisez un repas enregistré'}
                containerStyle={MealPageStyle.headerContainer}
            />

            <SearchList itemType={ItemEnum.Meal} data={MockedMeal} />

            <GenericButton
                title={'Créer un repas'}
                onPress={onPressCreateMeal}
                style={{
                    container: MealPageStyle.buttonContainer,
                    text: MealPageStyle.buttonText
                }}
            />
        </View>
    );
};

export default observer(MealPage);

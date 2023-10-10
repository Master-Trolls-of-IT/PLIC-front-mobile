import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import MealPageStyle from '~/infrastructure/ui/pages/meal-page/meal-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HistoricalPageStyle from '~/infrastructure/ui/pages/historical-page/historical-page-style';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import HistoricalPageBlobsTop from '~/infrastructure/ui/pages/historical-page/component/background/historical-page-blobs-top';
import { MealType } from '~/domain/entities/constants/meal-page-meal-type';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import { MealDiet } from '~/domain/entities/constants/meal-item-diet-type';
import MealItem from '~/infrastructure/ui/shared/component/item/meal-item/meal-item';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const MealPage = () => {
    const mockdata: MealItemProps[] = [
        {
            title: 'REPAS COMPLET 1',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            nb_of_products: 8,
            mealType: [MealType.Japonais],
            mealDiet: [MealDiet.Végétarien]
        },
        {
            title: 'REPAS COMPLET 2',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            nb_of_products: 8,
            mealType: [MealType.Japonais],
            mealDiet: [MealDiet.Végétarien]
        },
        {
            title: 'REPAS COMPLET 3',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            nb_of_products: 8,
            mealType: [MealType.Japonais],
            mealDiet: [MealDiet.Végétarien]
        },
        {
            title: 'REPAS COMPLET 4',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            nb_of_products: 8,
            mealType: [MealType.Japonais],
            mealDiet: [MealDiet.Végétarien]
        },
        {
            title: 'REPAS COMPLET 5',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            nb_of_products: 8,
            mealType: [MealType.Japonais, MealType.Japonais, MealType.Japonais],
            mealDiet: [MealDiet.Végétarien]
        },
        {
            title: 'REPAS COMPLET 6',
            score: 82,
            ingredients: ['Tomates', 'Oeufs', 'Poivrons', 'Eau'],
            nb_of_products: 8,
            mealType: [MealType.Japonais],
            mealDiet: [MealDiet.Végétarien]
        }
    ];
    return (
        <View style={MealPageStyle.container}>
            <View style={MealPageStyle.background}>
                <HistoricalPageBlobsTop />
            </View>
            <GenericHeaderText
                firstText={'Vos Repas'}
                secondText={'Créer un repas ou visualisez un repas enregistré·'}
                containerStyle={MealPageStyle.headerContainer}
            />
            <SearchList itemType={ItemEnum.Meal} data={mockdata} />
            <View style={MealPageStyle.addButton}>
                <TouchableOpacity>
                    <CustomSvg
                        asset={require('~/domain/entities/assets/meal-page/add-meal-button.svg')}
                        style={MealPageStyle.plusImage}
                        height={70}
                        width={70}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default observer(MealPage);

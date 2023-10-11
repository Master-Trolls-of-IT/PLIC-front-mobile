import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useMealPageActiveItemData from '~/infrastructure/ui/pages/meal-page/component/active-meal/hooks';
import MealPageActiveItemStyle from '~/infrastructure/ui/pages/meal-page/component/active-meal/meal-page-active-item-style';
import { MealPageActiveItemProps } from '~/domain/interfaces/props/meal-page-active-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';
import ConsumedProductItem from '~/infrastructure/ui/shared/component/item/consumed-product-item/consumed-product-item';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import GenericDropdown from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown';

const MealPageActiveItem = ({ onPressMealMenu }: MealPageActiveItemProps) => {
    const { horizontalScrollLineAsset, interBoldText, inputMealName, inputTag, mockData } = useMealPageActiveItemData();

    return (
        <View style={MealPageActiveItemStyle.scanModal}>
            <TouchableOpacity onPress={onPressMealMenu} style={MealPageActiveItemStyle.scrollLine}>
                <CustomSvg asset={horizontalScrollLineAsset} height={25} width={60} />
            </TouchableOpacity>
            <View style={MealPageActiveItemStyle.mainContainer}>
                <View style={MealPageActiveItemStyle.titleContainer}>
                    <Text style={MealPageActiveItemStyle.title}>Créer votre repas</Text>
                    <TouchableOpacity onPress={onPressMealMenu}>
                        <Text style={MealPageActiveItemStyle.okButton}>OK</Text>
                    </TouchableOpacity>
                </View>

                <View style={MealPageActiveItemStyle.mealDescriptionContainer}>
                    <View style={MealPageActiveItemStyle.mealName}>
                        <GenericInput
                            title={'Nom du repas'}
                            type={InputEnum.Name}
                            placeHolder={'Nom du repas'}
                            {...inputMealName}
                        />
                    </View>
                    <View style={MealPageActiveItemStyle.mealTags}>
                        <GenericDropdown
                            title={'Tags du repas'}
                            options={[
                                { label: 'Japanese', value: '0' },
                                { label: 'Végétarien', value: '1' }
                            ]}
                            {...inputTag}
                            style={{ flex: 1.5 }}
                        />
                    </View>
                </View>
                <View style={MealPageActiveItemStyle.productListContainer}>
                    <Text style={{ ...MealPageActiveItemStyle.columnTitle, ...interBoldText }}>
                        Produits dans le repas
                    </Text>
                    <View style={MealPageActiveItemStyle.content}>
                        <ConsumedProductItem key={1} {...(mockData[0] as ConsumedProductItemProps)} />
                    </View>
                </View>
                <View style={MealPageActiveItemStyle.addProductsContainer}>
                    <Text style={{ ...MealPageActiveItemStyle.columnTitle, ...interBoldText }}>Ajoutez un produit</Text>
                    <View style={MealPageActiveItemStyle.content}>
                        <GenericButton
                            title={'Scannez votre produits'}
                            onPress={() => 'setModal(true)'}
                            style={{
                                container: MealPageActiveItemStyle.brownButtonContainer,
                                text: MealPageActiveItemStyle.brownButtonText
                            }}
                        />
                        <GenericButton
                            title={'Historique des produits consommés'}
                            onPress={() => 'setModal(true)'}
                            style={{
                                container: MealPageActiveItemStyle.greenButtonContainer,
                                text: MealPageActiveItemStyle.greenButtonText
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default MealPageActiveItem;

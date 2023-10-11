import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useMealPageActiveItemData from '~/infrastructure/ui/pages/meal-page/component/active-meal/hooks';
import MealPageActiveItemStyle from '~/infrastructure/ui/pages/meal-page/component/active-meal/meal-page-active-item-style';
import ScanPageScannedItemStyle from '~/infrastructure/ui/pages/scan-page/component/scanned-item/scan-page-scanned-item-style';
import { MealPageActiveItemProps } from '~/domain/interfaces/props/meal-page-active-item-props';

const MealPageActiveItem = ({ onPressMealMenu }: MealPageActiveItemProps) => {
    const { horizontalScrollLineAsset, interBoldText } = useMealPageActiveItemData();

    return (
        <View style={MealPageActiveItemStyle.scanModal}>
            <TouchableOpacity onPress={onPressMealMenu} style={ScanPageScannedItemStyle.scrollLine}>
                <CustomSvg asset={horizontalScrollLineAsset} height={25} width={60} />
            </TouchableOpacity>
            <View style={MealPageActiveItemStyle.MainContainer}>
                <View style={MealPageActiveItemStyle.MealDescriptionContainer}>
                    <View style={MealPageActiveItemStyle.Content}></View>
                    <View style={MealPageActiveItemStyle.MealName}>
                        <Text style={{ ...MealPageActiveItemStyle.columnLeft, ...interBoldText }}>Nom</Text>
                    </View>
                    <View style={MealPageActiveItemStyle.MealTags}>
                        <Text style={{ ...MealPageActiveItemStyle.columnRight, ...interBoldText }}>Tags</Text>
                    </View>
                </View>
                <View style={MealPageActiveItemStyle.ProductListContainer}>
                    <Text style={{ ...MealPageActiveItemStyle.columnTitle, ...interBoldText }}>Produits scannés</Text>
                    <View style={MealPageActiveItemStyle.Content}></View>
                </View>
                <View style={MealPageActiveItemStyle.AddProductsContainer}>
                    <Text style={{ ...MealPageActiveItemStyle.columnTitle, ...interBoldText }}>Ajoutez un produit</Text>
                    <View style={MealPageActiveItemStyle.Content}>
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

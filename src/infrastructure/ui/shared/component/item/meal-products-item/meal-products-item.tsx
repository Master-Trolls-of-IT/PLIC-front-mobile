import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Bar } from 'react-native-progress';
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import useCustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular-hooks';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import MealProductsItemStyle from '~/infrastructure/ui/shared/component/item/meal-products-item/meal-products-item-style';
import useMealProductsItemData from '~/infrastructure/ui/shared/component/item/meal-products-item/hooks';
import { MealProductItemProps } from '~/domain/interfaces/props/search-list/meal-product-item-props';

const MealProductsItem = ({ id, name, brand, consumedQuantity, score, image, style }: MealProductItemProps) => {
    const {
        animatedItemStyle,
        onPressProduct,
        scorePercentage,
        scoreColor,
        onPressDeleteMealProduct,
        onPressEditMealProductQuantity,
        isExpended
    } = useMealProductsItemData({ score });

    return (
        <Animated.View style={[animatedItemStyle, MealProductsItemStyle.item, style]}>
            <TouchableOpacity style={MealProductsItemStyle.container} activeOpacity={1} onPress={onPressProduct}>
                <View style={MealProductsItemStyle.header}>
                    <View style={MealProductsItemStyle.imageContainer}>
                        {image ? (
                            <Image style={MealProductsItemStyle.image} source={{ uri: image }} />
                        ) : (
                            <Text style={MealProductsItemStyle.imageText}>Image indisponible</Text>
                        )}
                    </View>

                    <View style={MealProductsItemStyle.titleField}>
                        <Text style={{ ...MealProductsItemStyle.title, ...useCustomFontInterBold().text }}>
                            {brand}
                        </Text>
                        <Text
                            style={{ ...MealProductsItemStyle.description, ...useCustomFontInterRegular().text }}
                            numberOfLines={3}>
                            {name}
                        </Text>
                    </View>
                    <View style={MealProductsItemStyle.scoreField}>
                        <View>
                            <Bar
                                style={{ ...MealProductsItemStyle.bar, borderLeftColor: scoreColor }}
                                useNativeDriver
                                progress={isNaN(scorePercentage) ? 0 : scorePercentage}
                                width={60}
                                height={9}
                                color={scoreColor}
                                unfilledColor={ColorEnum.ExtraOpaqueGrey}
                                animated={false}
                            />
                        </View>
                        <Text style={{ ...MealProductsItemStyle.score, ...useCustomFontInterBold().text }}>
                            {isNaN(score) ? 0 : score}
                        </Text>
                    </View>
                </View>

                {isExpended && (
                    <Animated.View
                        entering={FadeIn.duration(1200)}
                        exiting={FadeOutUp.duration(200)}
                        style={MealProductsItemStyle.quantityContainer}>
                        <View style={MealProductsItemStyle.quantityTitleContainer}>
                            <Text style={MealProductsItemStyle.quantityTitle}>
                                Votre quantité consommée : {consumedQuantity} g
                            </Text>
                        </View>
                        <GenericButton
                            title="Modifier la quantité consommée"
                            onPress={() => onPressEditMealProductQuantity()}
                            style={{
                                container: MealProductsItemStyle.editButtonContainer,
                                text: MealProductsItemStyle.buttonText
                            }}
                        />
                        <GenericButton
                            title="Supprimer ce produit consommé"
                            onPress={() => onPressDeleteMealProduct(id)}
                            style={{
                                container: MealProductsItemStyle.deleteButtonContainer,
                                text: MealProductsItemStyle.buttonText
                            }}
                        />
                    </Animated.View>
                )}
            </TouchableOpacity>
        </Animated.View>
    );
};

export default MealProductsItem;

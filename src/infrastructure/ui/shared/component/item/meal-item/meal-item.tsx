import { View, Animated, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
const MealItem = ({ title, nb_of_products, score, ingredients, mealType, mealDiet }: MealItemProps) => {
    return (
        <Animated.View style={MealItemStyle.item}>
            <TouchableOpacity>
                <View style={MealItemStyle.container}>
                    <View style={MealItemStyle.imageContainer}>
                        <CustomSvg
                            asset={require('~/infrastructure/ui/shared/component/item/meal-item/assets/icon-restaurant.svg')}
                            style={MealItemStyle.image}
                            height={91.67}
                            width={68.75}
                        />
                    </View>
                    <View style={MealItemStyle.textField}>
                        <Text style={{ ...MealItemStyle.title, ...useCustomFontInterBold().text }}>{title}</Text>
                        <View style={MealItemStyle.secondText}>
                            <Text style={{ ...MealItemStyle.productCount, ...useCustomFontInterBold().text }}>
                                {nb_of_products} Produits •{' '}
                            </Text>
                            <Text style={{ ...MealItemStyle.score, ...useCustomFontInterBold().text }}>
                                Score: {score}
                            </Text>
                        </View>
                        <Text style={{ ...MealItemStyle.ingredients, ...useCustomFontInterBold().text }}>
                            {ingredients.join(' • ')}
                        </Text>
                        <View style={MealItemStyle.mealTags}>
                            <Text>
                                <Text style={{ ...MealItemStyle.mealDiet, ...useCustomFontInterBold().text }}>
                                    {mealDiet.join(' • ')}
                                </Text>
                                <Text style={{ ...MealItemStyle.mealType, ...useCustomFontInterBold().text }}>
                                    {mealType.length ? ' • ' + mealType.join(' • ') : ''}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default MealItem;

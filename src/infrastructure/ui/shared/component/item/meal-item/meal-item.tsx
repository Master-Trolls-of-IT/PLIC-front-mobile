import { View, Animated, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import useMealItemData from '~/infrastructure/ui/shared/component/item/meal-item/hooks';

const MealItem = ({ title, numberOfProducts, score, ingredients, mealTags, style }: MealItemProps) => {
    const {
        favouriteIcon,
        toggleFavourite,
        scoreStyle,
        restaurantIcon,
        imageNewHeight,
        imageNewWidth,
        favouriteNewHeight,
        favouriteNewWidth
    } = useMealItemData({ score });

    return (
        <Animated.View style={{ ...MealItemStyle.item, ...style }}>
            <TouchableOpacity>
                <View style={MealItemStyle.container}>
                    <View style={MealItemStyle.imageContainer}>
                        <CustomSvg asset={restaurantIcon} height={imageNewHeight} width={imageNewWidth} />
                    </View>

                    <View style={MealItemStyle.textField}>
                        <Text style={{ ...MealItemStyle.title, ...useCustomFontInterBold().text }}>{title}</Text>
                        <View style={MealItemStyle.secondText}>
                            <Text style={{ ...MealItemStyle.productCount, ...useCustomFontInterBold().text }}>
                                {numberOfProducts} Produits •{' '}
                            </Text>
                            <Text style={{ ...scoreStyle, ...useCustomFontInterBold().text }}>Score: {score}</Text>
                        </View>

                        <Text style={{ ...MealItemStyle.ingredients, ...useCustomFontInterBold().text }}>
                            {ingredients.join(' • ')}
                        </Text>

                        <View style={MealItemStyle.mealTags}>
                            <Text style={{ ...useCustomFontInterBold().text }}>
                                {mealTags.map((mealTag, index) => (
                                    <Text
                                        key={index}
                                        style={{
                                            ...MealItemStyle.mealTags,
                                            color: mealTag.color
                                        }}>
                                        {mealTag.label}
                                        {index < mealTags.length - 1 && ' • '}
                                    </Text>
                                ))}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={toggleFavourite} style={MealItemStyle.favourite}>
                        <CustomSvg asset={favouriteIcon} height={favouriteNewHeight} width={favouriteNewWidth} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default observer(MealItem);

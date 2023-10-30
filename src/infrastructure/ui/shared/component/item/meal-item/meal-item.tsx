import { Animated, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useMealItemData from '~/infrastructure/ui/shared/component/item/meal-item/hooks';

const MealItem = ({ id, title, isFavourite, numberOfProducts, score, products, tags, style }: MealItemProps) => {
    const {
        favouriteIcon,
        toggleFavorite,
        scoreStyle,
        restaurantIcon,
        imageNewHeight,
        imageNewWidth,
        favouriteNewHeight,
        favouriteNewWidth,
        isExpanded,
        setIsExpanded
    } = useMealItemData({ score, isFavourite });
    return (
        <Animated.View style={{ ...MealItemStyle.item, ...style }}>
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
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
                            {products
                                .map((product) => {
                                    return product.productInfo.name;
                                })
                                .join(' • ')}
                        </Text>

                        <View style={MealItemStyle.mealTags}>
                            <Text style={{ ...useCustomFontInterBold().text }}>
                                {tags.map((mealTag, index) => (
                                    <Text
                                        key={index}
                                        style={{
                                            ...MealItemStyle.mealTags,
                                            color: mealTag.color
                                        }}>
                                        {mealTag.label}
                                        {index < tags.length - 1 && ' • '}
                                    </Text>
                                ))}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            toggleFavorite(id);
                        }}
                        style={MealItemStyle.favourite}>
                        <CustomSvg asset={favouriteIcon} height={favouriteNewHeight} width={favouriteNewWidth} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            {isExpanded && (
                <View>
                    <Text>{'test'}</Text>
                </View>
            )}
        </Animated.View>
    );
};

export default observer(MealItem);

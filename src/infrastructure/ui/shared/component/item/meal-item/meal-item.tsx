import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';

import React from 'react';
import { observer } from 'mobx-react';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useMealItemData from '~/infrastructure/ui/shared/component/item/meal-item/hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';

const MealItem = ({ id, title, isFavourite, numberOfProducts, score, products, tags, style }: MealItemProps) => {
    const {
        favouriteIcon,
        toggleFavourite,
        scoreStyle,
        restaurantIcon,
        deleteIcon,
        editIcon,
        imageNewHeight,
        imageNewWidth,
        favouriteNewHeight,
        favouriteNewWidth,
        deleteNewHeight,
        deleteNewWidth,
        editNewHeight,
        editNewWidth,
        isExpanded,
        toggleExpand,
        animatedItemStyle,
        showExpandedView,
        showButtonsAnimationTime,
        productNames,
        consumeMeal
    } = useMealItemData({ id, score, isFavourite, products });
    return (
        <Animated.View style={[MealItemStyle.item, style, animatedItemStyle]}>
            <TouchableOpacity onPress={toggleExpand}>
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
                            {productNames}
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

                    <TouchableOpacity onPress={toggleFavourite} style={MealItemStyle.favourite}>
                        <CustomSvg asset={favouriteIcon} height={favouriteNewHeight} width={favouriteNewWidth} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            {isExpanded && showExpandedView && (
                <Animated.View
                    style={{ ...MealItemStyle.expandedSection }}
                    entering={FadeIn.duration(showButtonsAnimationTime)}
                    exiting={FadeOutUp.duration(showButtonsAnimationTime)}>
                    <CustomSvg asset={deleteIcon} width={deleteNewWidth} height={deleteNewHeight} />
                    <GenericButton
                        title="Consommer ce repas"
                        style={{ text: MealItemStyle.buttonText, container: MealItemStyle.consumeButtonContainer }}
                        onPress={consumeMeal}
                    />
                    <CustomSvg asset={editIcon} width={editNewWidth} height={editNewHeight} />
                </Animated.View>
            )}
        </Animated.View>
    );
};

export default observer(MealItem);

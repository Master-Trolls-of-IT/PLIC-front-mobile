import { Image, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { observer } from 'mobx-react';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/item/recipe-item/recipe-item-style';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useRecipeItemData from '~/infrastructure/ui/shared/component/item/recipe-item/hooks';

const RecipeItem = (recipeItem: RecipeItemProps) => {
    const { scoreStyle, star, profile, onPressViewDetail, image, author, rating } = useRecipeItemData(recipeItem);

    return (
        <View style={[RecipeItemStyle.item, recipeItem.style]}>
            <TouchableOpacity
                onPress={() => {
                    onPressViewDetail(recipeItem);
                }}>
                <View style={RecipeItemStyle.topContainer}>
                    <View style={RecipeItemStyle.imageContainer}>
                        <Image source={image} style={RecipeItemStyle.image} />
                    </View>
                    <View style={RecipeItemStyle.textField}>
                        <Text style={{ ...RecipeItemStyle.title, ...useCustomFontInterBold().text }}>
                            {recipeItem.title}
                        </Text>
                        <View style={RecipeItemStyle.secondText}>
                            <CustomSvg asset={star} height={23} width={23} style={RecipeItemStyle.star} />
                            <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text }}>
                                {rating}
                            </Text>
                            <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text }}>
                                {' '}
                                ({recipeItem.numberOfRatings} évaluations)
                            </Text>
                        </View>
                        <View style={RecipeItemStyle.secondText}>
                            <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text }}>
                                {recipeItem.duration} {'min'} • {recipeItem.difficulty} •{' '}
                            </Text>
                            <Text
                                style={{
                                    ...RecipeItemStyle.favourite,
                                    ...scoreStyle,
                                    ...useCustomFontInterBold().text
                                }}>
                                Score: {recipeItem.score}
                            </Text>
                        </View>

                        <Text style={{ ...RecipeItemStyle.ingredients, ...useCustomFontInterBold().text }}>
                            {recipeItem.ingredients.join(', ')}
                        </Text>
                    </View>
                </View>
                <View style={RecipeItemStyle.bottomContainer}>
                    <View style={RecipeItemStyle.authorContainer}>
                        <CustomSvg asset={profile} height={22} width={22} />
                        <Text
                            style={{
                                ...RecipeItemStyle.authorContainerText,
                                ...useCustomFontInterBold().text,
                                marginLeft: 5
                            }}>
                            {author}
                        </Text>
                    </View>
                    <Text style={{ ...RecipeItemStyle.mealTags, ...useCustomFontInterBold().text }}>
                        {recipeItem.tags.map((recipeTag, index) => (
                            <Text
                                key={index}
                                style={{
                                    ...RecipeItemStyle.mealTags,
                                    color: recipeTag.color
                                }}>
                                {recipeTag.label}
                                {index < recipeItem.tags.length - 1 && ' • '}
                            </Text>
                        ))}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default observer(RecipeItem);

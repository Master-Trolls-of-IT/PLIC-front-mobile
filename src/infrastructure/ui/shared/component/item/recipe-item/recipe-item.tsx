import { Image, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { observer } from 'mobx-react';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/item/recipe-item/recipe-item-style';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useRecipeItemData from '~/infrastructure/ui/shared/component/item/recipe-item/hooks';

const RecipeItem = ({ recipeItem, style }: RecipeItemProps) => {
    const { scoreStyle, star, profile, onPressViewDetail } = useRecipeItemData({ recipeItem });

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    onPressViewDetail(recipeItem);
                }}>
                <View style={[RecipeItemStyle.item, style]}>
                    <View style={RecipeItemStyle.container}>
                        <View style={RecipeItemStyle.imageContainer}>
                            <Image source={{ uri: recipeItem.image }} style={RecipeItemStyle.image} />
                        </View>
                        <View style={RecipeItemStyle.textField}>
                            <Text style={{ ...RecipeItemStyle.title, ...useCustomFontInterBold().text }}>
                                {recipeItem.title}
                            </Text>
                            <View style={RecipeItemStyle.secondText}>
                                <CustomSvg asset={star} height={20} width={20} />
                                <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text }}>
                                    {recipeItem.rating}
                                </Text>
                                <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text }}>
                                    {'  '}({recipeItem.numberOfRatings} évaluations)
                                </Text>
                            </View>
                            <View style={RecipeItemStyle.secondText}>
                                <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text }}>
                                    {recipeItem.duration} {'min'} • {recipeItem.difficulty} •{' '}
                                </Text>
                                <Text style={{ ...scoreStyle, ...useCustomFontInterBold().text }}>
                                    Score: {recipeItem.score}
                                </Text>
                            </View>

                            <Text style={{ ...RecipeItemStyle.ingredients, ...useCustomFontInterBold().text }}>
                                {recipeItem.ingredients.join(', ')}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={RecipeItemStyle.mealTags}>
                            <View style={RecipeItemStyle.authorContainer}>
                                <CustomSvg asset={profile} height={20} width={20} />
                                <Text
                                    style={{
                                        ...RecipeItemStyle.favourite,
                                        ...useCustomFontInterBold().text,
                                        marginLeft: 5
                                    }}>
                                    {recipeItem.author}
                                </Text>
                            </View>
                            <Text style={{ ...useCustomFontInterBold().text }}>
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
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default observer(RecipeItem);

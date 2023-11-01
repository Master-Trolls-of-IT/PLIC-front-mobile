import { Image, Text, View } from 'react-native';

import React from 'react';
import { observer } from 'mobx-react';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/item/recipe-item/recipe-item-style';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useRecipeItemData from '~/infrastructure/ui/shared/component/item/recipe-item/hooks';

const RecipeItem = ({
    id,
    title,
    isFavourite,
    score,
    ingredients,
    tags,
    style,
    image,
    rating,
    numberOfRatings,
    duration,
    difficulty,
    author
}: RecipeItemProps) => {
    const { scoreStyle, star, profile } = useRecipeItemData({ id, score, isFavourite, ingredients });

    return (
        <View style={[RecipeItemStyle.item, style]}>
            <View style={RecipeItemStyle.container}>
                <View style={RecipeItemStyle.imageContainer}>
                    <Image source={{ uri: image }} style={RecipeItemStyle.image} />
                </View>
                <View style={RecipeItemStyle.textField}>
                    <Text style={{ ...RecipeItemStyle.title, ...useCustomFontInterBold().text }}>{title}</Text>
                    <View style={RecipeItemStyle.secondText}>
                        <CustomSvg asset={star} height={20} width={20} />
                        <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text }}>{rating}</Text>
                        <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text }}>
                            {'  '}({numberOfRatings} évaluations)
                        </Text>
                    </View>
                    <View style={RecipeItemStyle.secondText}>
                        <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text }}>
                            {duration} {'min'} • {difficulty} •{' '}
                        </Text>
                        <Text style={{ ...scoreStyle, ...useCustomFontInterBold().text }}>Score: {score}</Text>
                    </View>

                    <Text style={{ ...RecipeItemStyle.ingredients, ...useCustomFontInterBold().text }}>
                        {ingredients.join(', ')}
                    </Text>
                </View>
            </View>
            <View>
                <View style={RecipeItemStyle.mealTags}>
                    <View style={RecipeItemStyle.authorContainer}>
                        <CustomSvg asset={profile} height={20} width={20} />
                        <Text style={{ ...RecipeItemStyle.favourite, ...useCustomFontInterBold().text, marginLeft: 5 }}>
                            {author}
                        </Text>
                    </View>
                    <Text style={{ ...useCustomFontInterBold().text }}>
                        {tags.map((recipeTag, index) => (
                            <Text
                                key={index}
                                style={{
                                    ...RecipeItemStyle.mealTags,
                                    color: recipeTag.color
                                }}>
                                {recipeTag.label}
                                {index < tags.length - 1 && ' • '}
                            </Text>
                        ))}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default observer(RecipeItem);

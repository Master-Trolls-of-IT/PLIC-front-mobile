import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/recipe-item/recipe-item-style';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useRecipeItemData from '~/infrastructure/ui/shared/component/recipe-item/hooks';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import { ActiveRecipeItemProps } from '~/domain/interfaces/props/recipe-item/active-recipe-item-props';
import CustomFontInterSemiBold from '~/application/utils/font/custom-font-inter-semi-bold';

const ActiveRecipeItem = ({ toggleFavourite, goBack, activeRecipe }: ActiveRecipeItemProps) => {
    const {
        unfilledFavouriteAsset,
        horizontalScrollLineAsset,
        scoreStyle,
        sendReview,
        image,
        author,
        rating,
        star,
        profile,
        ingredients
    } = useRecipeItemData({
        activeRecipe
    });

    return (
        <View style={RecipeItemStyle.recipeModal}>
            <TouchableOpacity onPress={toggleFavourite} style={RecipeItemStyle.favourite}>
                <CustomSvg asset={unfilledFavouriteAsset} height={30} width={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goBack} style={RecipeItemStyle.scrollLine}>
                <CustomSvg asset={horizontalScrollLineAsset} height={25} width={60} />
            </TouchableOpacity>
            <View style={RecipeItemStyle.headerContainer}>
                {activeRecipe?.image ? (
                    <Image style={RecipeItemStyle.image} source={image} />
                ) : (
                    <Text style={RecipeItemStyle.imageText}>Image indisponible</Text>
                )}
                <View style={RecipeItemStyle.descriptionContainer}>
                    <Text style={{ ...RecipeItemStyle.title, ...useCustomFontInterBold().text }}>
                        {activeRecipe?.title}
                    </Text>

                    <View style={RecipeItemStyle.review}>
                        <CustomSvg asset={star} height={23} width={23} style={RecipeItemStyle.star} />
                        <Text style={{ ...RecipeItemStyle.reviewText, ...useCustomFontInterBold().text }}>
                            {rating} ({activeRecipe?.numberOfRatings} évautions)
                        </Text>
                    </View>
                    <View style={RecipeItemStyle.mealTags}>
                        <Text style={{ ...useCustomFontInterBold().text }}>
                            {activeRecipe?.tags.map((recipeTag, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        ...RecipeItemStyle.mealTags,
                                        color: recipeTag.color
                                    }}>
                                    {recipeTag.label}
                                    {index < activeRecipe?.tags.length - 1 && ' • '}
                                </Text>
                            ))}
                        </Text>
                    </View>
                    <View style={RecipeItemStyle.authorAndScoreContainer}>
                        <View style={RecipeItemStyle.author}>
                            <CustomSvg asset={profile} height={22} width={22} />
                            <Text style={{ ...RecipeItemStyle.authorText, ...useCustomFontInterBold().text }}>
                                {author}
                            </Text>
                        </View>
                        <Text style={{ ...scoreStyle, ...useCustomFontInterBold().text, ...RecipeItemStyle.score }}>
                            Score: {activeRecipe?.score}
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView style={RecipeItemStyle.contentContainer}>
                <View style={RecipeItemStyle.ingredientsHeader}>
                    <Text style={{ ...RecipeItemStyle.ingredientsText, ...useCustomFontInterBold().text }}>
                        Ingédients • {activeRecipe?.kcal} Kcal par portion
                    </Text>
                </View>
                <View style={RecipeItemStyle.ingredientsContent}>
                    <Text>
                        {ingredients.map((ingredient: string, index: number) => (
                            <Text
                                key={index}
                                style={{
                                    ...RecipeItemStyle.ingredients,
                                    ...CustomFontInterSemiBold().text
                                }}>
                                • {ingredient}
                                {index < (activeRecipe?.ingredients.length ?? 0) - 1 && '\n'}
                            </Text>
                        ))}
                    </Text>
                </View>
                <View style={RecipeItemStyle.preperationHeader}>
                    <Text style={{ ...RecipeItemStyle.preperationText, ...useCustomFontInterBold().text }}>
                        Préparation
                    </Text>
                </View>
                <View style={RecipeItemStyle.preperationContent}>
                    <Text>
                        {activeRecipe?.steps.map((step, index) => (
                            <Text
                                key={index}
                                style={{
                                    ...RecipeItemStyle.ingredients,
                                    ...CustomFontInterSemiBold().text
                                }}>
                                {index + 1}. {step}
                                {index < activeRecipe.steps.length - 1 && '\n'}
                            </Text>
                        ))}
                    </Text>
                </View>
                <TouchableOpacity onPress={sendReview} style={RecipeItemStyle.userReviewContainer1}>
                    <View style={RecipeItemStyle.userReviewContainer2}>
                        <Text style={{ ...RecipeItemStyle.userReview, ...useCustomFontInterBold().text }}>
                            Donnez nous votre avis !
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default ActiveRecipeItem;

import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/recipe-item/recipe-item-style';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useRecipeItemData from '~/infrastructure/ui/shared/component/recipe-item/hooks';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import { ActiveRecipeItemProps } from '~/domain/interfaces/props/recipe-item/active-recipe-item-props';
const ActiveRecipeItem = ({ toggleFavourite, goBack, activeRecipe }: ActiveRecipeItemProps) => {
    const { unfilledFavouriteAsset, horizontalScrollLineAsset, scoreStyle, sendReview } = useRecipeItemData({
        activeRecipe
    });

    return (
        <View style={RecipeItemStyle.recipeModal}>
            <TouchableOpacity onPress={toggleFavourite} style={RecipeItemStyle.favourite}>
                <CustomSvg asset={unfilledFavouriteAsset} height={35} width={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goBack} style={RecipeItemStyle.scrollLine}>
                <CustomSvg asset={horizontalScrollLineAsset} height={25} width={60} />
            </TouchableOpacity>
            <View style={RecipeItemStyle.headerContainer}>
                <View style={RecipeItemStyle.imageContainer}>
                    {activeRecipe?.image ? (
                        <Image style={RecipeItemStyle.image} source={{ uri: activeRecipe?.image }} />
                    ) : (
                        <Text style={RecipeItemStyle.imageText}>Image indisponible</Text>
                    )}
                </View>
                <View style={RecipeItemStyle.descriptionContainer}>
                    <Text style={{ ...RecipeItemStyle.title, ...useCustomFontInterBold().text }}>
                        {activeRecipe?.title}
                    </Text>

                    <View style={RecipeItemStyle.review}>
                        <Text style={{ ...RecipeItemStyle.reviewText, ...useCustomFontInterBold().text }}>
                            {activeRecipe?.rating} Out of {activeRecipe?.numberOfRatings} ratings.
                        </Text>
                    </View>
                    <View style={RecipeItemStyle.mealTags}>
                        <Text style={{ ...useCustomFontInterBold().text }}>
                            {activeRecipe?.tags.map((mealTag, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        ...RecipeItemStyle.mealTags,
                                        color: mealTag.color
                                    }}>
                                    {mealTag.label}
                                    {index < activeRecipe?.tags.length - 1 && ' • '}
                                </Text>
                            ))}
                        </Text>
                    </View>
                    <View style={RecipeItemStyle.authorAndScoreContainer}>
                        <View style={RecipeItemStyle.author}>
                            <Text style={{ ...RecipeItemStyle.authorText, ...useCustomFontInterBold().text }}>
                                {activeRecipe?.author}
                            </Text>
                        </View>
                        <View style={RecipeItemStyle.score}>
                            <Text style={{ ...scoreStyle, ...useCustomFontInterBold().text }}>
                                Score: {activeRecipe?.score}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView style={RecipeItemStyle.contentContainer}>
                <View style={RecipeItemStyle.ingredientsContainer}>
                    <View style={RecipeItemStyle.ingredientsHeader}>
                        <Text style={{ ...RecipeItemStyle.ingredientsText, ...useCustomFontInterBold().text }}>
                            Ingédients • {activeRecipe?.kcal} Kcal par portion
                        </Text>
                    </View>
                    <View style={RecipeItemStyle.ingredientsContent}>
                        <Text>
                            {activeRecipe?.ingredients.map((ingredient, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        ...RecipeItemStyle.ingredients
                                    }}>
                                    • {ingredient}
                                    {index < activeRecipe?.ingredients.length - 1 && '\n'}
                                </Text>
                            ))}
                        </Text>
                    </View>
                </View>
                <View style={RecipeItemStyle.preperationContainer}>
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
                                        ...RecipeItemStyle.ingredients
                                    }}>
                                    {index + 1}. {step}
                                    {index < activeRecipe.steps.length - 1 && '\n'}
                                </Text>
                            ))}
                        </Text>
                    </View>
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

import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/recipe-item/recipe-item-style';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import { RecipeItemProps } from '~/domain/interfaces/props/recipe-item/recipe-item-props';
import useRecipeItemData from '~/infrastructure/ui/shared/component/recipe-item/hooks';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
const ActiveRecipeItem = ({ toggleFavourite, recipe, goBack }: RecipeItemProps) => {
    const {
        unfilledFavouriteAsset,
        horizontalScrollLineAsset,
        scoreStyle,
        sendReview,
        deleteButtonStyle,
        editButtonStyle
    } = useRecipeItemData({ recipe });
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
                    {recipe?.image ? (
                        <Image style={RecipeItemStyle.image} source={{ uri: recipe?.image }} />
                    ) : (
                        <Text style={RecipeItemStyle.imageText}>Image indisponible</Text>
                    )}
                </View>
                <View style={RecipeItemStyle.descriptionContainer}>
                    <Text style={{ ...RecipeItemStyle.title, ...useCustomFontInterBold().text }}>{recipe.name}</Text>

                    <View style={RecipeItemStyle.review}>
                        <Text style={{ ...RecipeItemStyle.reviewText, ...useCustomFontInterBold().text }}>
                            4.3( à voir comment bien faire)
                        </Text>
                    </View>
                    <View style={RecipeItemStyle.mealTags}>
                        <Text style={{ ...useCustomFontInterBold().text }}>
                            {recipe.tags.map((mealTag, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        ...RecipeItemStyle.mealTags,
                                        color: mealTag.color
                                    }}>
                                    {mealTag.label}
                                    {index < recipe.tags.length - 1 && ' • '}
                                </Text>
                            ))}
                        </Text>
                    </View>
                    <View style={RecipeItemStyle.authorAndScoreContainer}>
                        <View style={RecipeItemStyle.author}>
                            <Text style={{ ...RecipeItemStyle.authorText, ...useCustomFontInterBold().text }}>
                                {recipe.author}
                            </Text>
                        </View>
                        <View style={RecipeItemStyle.score}>
                            <Text style={{ ...scoreStyle, ...useCustomFontInterBold().text }}>
                                Score: {recipe.score}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ScrollView style={RecipeItemStyle.contentContainer}>
                <View style={RecipeItemStyle.ingredientsContainer}>
                    <View style={RecipeItemStyle.ingredientsHeader}>
                        <Text style={{ ...RecipeItemStyle.ingredientsText, ...useCustomFontInterBold().text }}>
                            Ingédients • {recipe.kcal} Kcal par portion
                        </Text>
                    </View>
                    <View style={RecipeItemStyle.ingredientsContent}>
                        <Text>
                            {recipe.ingredients.map((ingredient, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        ...RecipeItemStyle.ingredients
                                    }}>
                                    • {ingredient}
                                    {index < recipe.ingredients.length - 1 && '\n'}
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
                            {recipe.recipe.map((step, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        ...RecipeItemStyle.ingredients
                                    }}>
                                    {index + 1}. {step}
                                    {index < recipe.recipe.length - 1 && '\n'}
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
                <View style={RecipeItemStyle.buttonContainer}>
                    <GenericButton title="Supprimer" onPress={() => {}} style={deleteButtonStyle} />
                    <GenericButton title="Modifier" onPress={() => {}} style={editButtonStyle} />
                </View>
            </ScrollView>
        </View>
    );
};

export default ActiveRecipeItem;

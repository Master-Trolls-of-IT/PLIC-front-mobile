import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/recipe-item/recipe-item-style';
import ScannedItemStyle from '~/infrastructure/ui/shared/component/scanned-item/scanned-item-style';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import { RecipeItemProps } from '~/domain/interfaces/props/recipe-item/recipe-item-props';
import useRecipeItemData from '~/infrastructure/ui/shared/component/recipe-item/hooks';
const ActiveRecipeItem = ({ toggleFavourite, recipe }: RecipeItemProps) => {
    const {
        unfilledFavouriteAsset,
        horizontalScrollLineAsset,
        ecoScore,
        chooseRightNutriScoreImage,
        onPressGoBack,
        showRightEcoScore
    } = useRecipeItemData({ recipe });
    return (
        <View style={RecipeItemStyle.scanModal}>
            <TouchableOpacity onPress={toggleFavourite} style={RecipeItemStyle.favourite}>
                <CustomSvg asset={unfilledFavouriteAsset} height={35} width={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressGoBack} style={RecipeItemStyle.scrollLine}>
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
            </View>
            <View style={RecipeItemStyle.scoreContainer}>
                <View style={RecipeItemStyle.nutriscoreContainer}>
                    <CustomSvg
                        asset={chooseRightNutriScoreImage()}
                        height={150}
                        width={150}
                        style={{ alignSelf: 'center' }}
                    />
                </View>
                {showRightEcoScore}
            </View>
        </View>
    );
};

export default ActiveRecipeItem;

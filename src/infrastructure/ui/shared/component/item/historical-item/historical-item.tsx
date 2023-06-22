import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';
import { Bar } from 'react-native-progress';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import useHistoricalItemData from '~/infrastructure/ui/shared/component/item/historical-item/hooks';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import useCustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular-hooks';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import HistoricalItemStyle from '~/infrastructure/ui/shared/component/item/historical-item/historical-item-style';

const HistoricalItem = ({
    name,
    description,
    score,
    image,
    isFavourite,
    toggleFavourite,
    data,
    style
}: HistoricalItemProps) => {
    const { isExpended, onPress, animatedItemStyle, favouriteIcon, scoreColor, scorePercentage } =
        useHistoricalItemData(isFavourite, score);

    return (
        <Animated.View style={[animatedItemStyle, HistoricalItemStyle.item, style]}>
            <TouchableOpacity style={HistoricalItemStyle.container} activeOpacity={1} onPress={onPress}>
                <View style={HistoricalItemStyle.header}>
                    <View style={HistoricalItemStyle.imageContainer}>
                        {image ? (
                            <Image style={HistoricalItemStyle.image} source={{ uri: image }} />
                        ) : (
                            <Text style={HistoricalItemStyle.imageText}>Image indisponible</Text>
                        )}
                    </View>

                    <View style={HistoricalItemStyle.titleField}>
                        <Text style={{ ...HistoricalItemStyle.title, ...useCustomFontInterBold().text }}>{name}</Text>
                        <Text
                            style={{ ...HistoricalItemStyle.description, ...useCustomFontInterRegular().text }}
                            numberOfLines={3}>
                            {description}
                        </Text>
                    </View>
                    <View style={HistoricalItemStyle.scoreField}>
                        <View>
                            <Bar
                                style={{ ...HistoricalItemStyle.bar, borderLeftColor: scoreColor }}
                                useNativeDriver
                                progress={isNaN(scorePercentage) ? 0 : scorePercentage}
                                width={60}
                                height={9}
                                color={scoreColor}
                                unfilledColor={ColorEnum.ExtraOpaqueGrey}
                                animated={false}
                            />
                        </View>
                        <Text style={{ ...HistoricalItemStyle.score, ...useCustomFontInterBold().text }}>
                            {isNaN(score) ? 0 : score}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={toggleFavourite} style={HistoricalItemStyle.favourite}>
                        <CustomSvg asset={favouriteIcon} height={30} width={30} />
                    </TouchableOpacity>
                </View>

                {isExpended && (
                    <Animated.View
                        entering={FadeIn.duration(1100)}
                        exiting={FadeOutUp.duration(300)}
                        style={HistoricalItemStyle.myIntakesContainer}>
                        <View style={HistoricalItemStyle.myIntakesTitleContainer}>
                            <Text style={HistoricalItemStyle.myIntakesTitle}>Apports pour 100g</Text>
                        </View>

                        <View style={HistoricalItemStyle.myIntakesNutrientsContainer}>
                            <View style={HistoricalItemStyle.itemLine}>
                                <Text style={HistoricalItemStyle.itemLineContent}>Énergie</Text>
                                <Text style={HistoricalItemStyle.itemLineContent}>
                                    {data?.energyKj} kJ / {data?.energyKcal} Kcal
                                </Text>
                            </View>
                            <View style={HistoricalItemStyle.itemLine}>
                                <Text style={HistoricalItemStyle.itemLineContent}>Matières grasses</Text>
                                <Text style={HistoricalItemStyle.itemLineContent}>{data?.fat} g</Text>
                            </View>
                            <View style={HistoricalItemStyle.itemLine}>
                                <Text style={HistoricalItemStyle.itemSameLineContent}>dont acides gras saturés</Text>
                                <Text style={HistoricalItemStyle.itemSameLineContent}>{data?.saturatedFat} g</Text>
                            </View>
                            <View style={HistoricalItemStyle.itemLine}>
                                <Text style={HistoricalItemStyle.itemLineContent}>Glucides</Text>
                                <Text style={HistoricalItemStyle.itemLineContent}>{data?.carbohydrates} g</Text>
                            </View>
                            <View style={HistoricalItemStyle.itemLine}>
                                <Text style={HistoricalItemStyle.itemSameLineContent}>dont sucres</Text>
                                <Text style={HistoricalItemStyle.itemSameLineContent}>{data?.sugar} g</Text>
                            </View>
                            <View style={HistoricalItemStyle.itemLine}>
                                <Text style={HistoricalItemStyle.itemLineContent}>Fibres alimentaires</Text>
                                <Text style={HistoricalItemStyle.itemLineContent}>{data?.fiber} g</Text>
                            </View>
                            <View style={HistoricalItemStyle.itemLine}>
                                <Text style={HistoricalItemStyle.itemLineContent}>Protéines</Text>
                                <Text style={HistoricalItemStyle.itemLineContent}>{data?.proteins} g</Text>
                            </View>
                            <View style={HistoricalItemStyle.itemLine}>
                                <Text style={HistoricalItemStyle.itemLineContent}>Sel</Text>
                                <Text style={HistoricalItemStyle.itemLineContent}>{data?.salt} g</Text>
                            </View>
                        </View>
                        <GenericButton
                            title="Ajouter aux produits consommés"
                            onPress={() => {}}
                            style={{
                                container: HistoricalItemStyle.addButtonContainer,
                                text: HistoricalItemStyle.addButtonText
                            }}
                        />
                    </Animated.View>
                )}
            </TouchableOpacity>
        </Animated.View>
    );
};

export default HistoricalItem;
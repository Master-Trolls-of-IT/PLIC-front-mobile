import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';
import { Bar } from 'react-native-progress';
import { observer } from 'mobx-react';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import useCustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular-hooks';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import ConsumedProductItemStyle from '~/infrastructure/ui/shared/component/item/consumed-product-item/consumed-product-item-style';
import useConsumedProductItemData from '~/infrastructure/ui/shared/component/item/consumed-product-item/hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';

const ConsumedProductItem = ({
    id,
    name,
    brand,
    consumedQuantity,
    score,
    image,
    isFavourite,
    data,
    style
}: ConsumedProductItemProps) => {
    const {
        isExpended,
        onPressProduct,
        animatedItemStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        onPressDeleteConsumedProduct,
        round,
        toggleFavoriteConsumedProducts
    } = useConsumedProductItemData({ consumedQuantity, isFavourite, score });

    return (
        <Animated.View style={[animatedItemStyle, ConsumedProductItemStyle.item, style]}>
            <TouchableOpacity style={ConsumedProductItemStyle.container} activeOpacity={1} onPress={onPressProduct}>
                <View style={ConsumedProductItemStyle.header}>
                    <View style={ConsumedProductItemStyle.imageContainer}>
                        {image ? (
                            <Image style={ConsumedProductItemStyle.image} source={{ uri: image }} />
                        ) : (
                            <Text style={ConsumedProductItemStyle.imageText}>Image indisponible</Text>
                        )}
                    </View>

                    <View style={ConsumedProductItemStyle.titleField}>
                        <Text style={{ ...ConsumedProductItemStyle.title, ...useCustomFontInterBold().text }}>
                            {brand}
                        </Text>
                        <Text
                            style={{ ...ConsumedProductItemStyle.description, ...useCustomFontInterRegular().text }}
                            numberOfLines={3}>
                            {name}
                        </Text>
                    </View>
                    <View style={ConsumedProductItemStyle.scoreField}>
                        <View>
                            <Bar
                                style={{ ...ConsumedProductItemStyle.bar, borderLeftColor: scoreColor }}
                                useNativeDriver
                                progress={isNaN(scorePercentage) ? 0 : scorePercentage}
                                width={60}
                                height={9}
                                color={scoreColor}
                                unfilledColor={ColorEnum.ExtraOpaqueGrey}
                                animated={false}
                            />
                        </View>
                        <Text style={{ ...ConsumedProductItemStyle.score, ...useCustomFontInterBold().text }}>
                            {isNaN(score) ? 0 : score}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            toggleFavoriteConsumedProducts(id);
                        }}
                        style={ConsumedProductItemStyle.favourite}>
                        <CustomSvg asset={favouriteIcon} height={30} width={30} />
                    </TouchableOpacity>
                </View>

                {isExpended && (
                    <Animated.View
                        entering={FadeIn.duration(1200)}
                        exiting={FadeOutUp.duration(200)}
                        style={ConsumedProductItemStyle.myIntakesContainer}>
                        <View style={ConsumedProductItemStyle.myIntakesTitleContainer}>
                            <Text style={ConsumedProductItemStyle.myIntakesTitle}>
                                Apports pour votre quantité consommée : {consumedQuantity} g
                            </Text>
                        </View>

                        <View style={ConsumedProductItemStyle.myIntakesNutrientsContainer}>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Énergie</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>
                                    {round(data?.energyKj)} kJ / {round(data?.energyKcal)} Kcal
                                </Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Matières grasses</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>{round(data?.fat)} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemSameLineContent}>
                                    dont acides gras saturés
                                </Text>
                                <Text style={ConsumedProductItemStyle.itemSameLineContent}>
                                    {round(data?.saturatedFat)} g
                                </Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Glucides</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>
                                    {round(data?.carbohydrates)} g
                                </Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemSameLineContent}>dont sucres</Text>
                                <Text style={ConsumedProductItemStyle.itemSameLineContent}>{round(data?.sugar)} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Fibres alimentaires</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>{round(data?.fiber)} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Protéines</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>{round(data?.proteins)} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Sel</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>{round(data?.salt)} g</Text>
                            </View>
                        </View>
                        <GenericButton
                            title="Modifier la quantité consommée"
                            onPress={() => {}}
                            style={{
                                container: ConsumedProductItemStyle.addButtonContainer,
                                text: ConsumedProductItemStyle.addButtonText
                            }}
                        />
                        <GenericButton
                            title="Supprimer ce produit consommé"
                            onPress={() => onPressDeleteConsumedProduct(id)}
                            style={{
                                container: ConsumedProductItemStyle.deleteButtonContainer,
                                text: ConsumedProductItemStyle.addButtonText
                            }}
                        />
                    </Animated.View>
                )}
            </TouchableOpacity>
        </Animated.View>
    );
};

export default observer(ConsumedProductItem);

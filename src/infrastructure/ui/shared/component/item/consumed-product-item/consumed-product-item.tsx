import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';
import { Bar } from 'react-native-progress';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import useCustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular-hooks';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-products-props';
import ConsumedProductItemStyle from '~/infrastructure/ui/shared/component/item/consumed-product-item/consumed-product-item-style';
import useConsumedProductItemData from '~/infrastructure/ui/shared/component/item/consumed-product-item/hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';

const ConsumedProductItem = ({
    id,
    name,
    description,
    score,
    image,
    isFavourite,
    toggleFavourite,
    data,
    style
}: ConsumedProductItemProps) => {
    const {
        isExpended,
        onPress,
        animatedItemStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        onPressDeleteConsumedProduct
    } = useConsumedProductItemData(isFavourite, score);

    return (
        <Animated.View style={[animatedItemStyle, ConsumedProductItemStyle.item, style]}>
            <TouchableOpacity style={ConsumedProductItemStyle.container} activeOpacity={1} onPress={onPress}>
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
                            {name}
                        </Text>
                        <Text
                            style={{ ...ConsumedProductItemStyle.description, ...useCustomFontInterRegular().text }}
                            numberOfLines={3}>
                            {description}
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
                    <TouchableOpacity onPress={toggleFavourite} style={ConsumedProductItemStyle.favourite}>
                        <CustomSvg asset={favouriteIcon} height={30} width={30} />
                    </TouchableOpacity>
                </View>

                {isExpended && (
                    <Animated.View
                        entering={FadeIn.duration(1100)}
                        exiting={FadeOutUp.duration(300)}
                        style={ConsumedProductItemStyle.myIntakesContainer}>
                        <View style={ConsumedProductItemStyle.myIntakesTitleContainer}>
                            <Text style={ConsumedProductItemStyle.myIntakesTitle}>Apports pour 100g</Text>
                        </View>

                        <View style={ConsumedProductItemStyle.myIntakesNutrientsContainer}>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Énergie</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>
                                    {data?.energyKj} kJ / {data?.energyKcal} Kcal
                                </Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Matières grasses</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>{data?.fat} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemSameLineContent}>
                                    dont acides gras saturés
                                </Text>
                                <Text style={ConsumedProductItemStyle.itemSameLineContent}>{data?.saturatedFat} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Glucides</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>{data?.carbohydrates} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemSameLineContent}>dont sucres</Text>
                                <Text style={ConsumedProductItemStyle.itemSameLineContent}>{data?.sugar} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Fibres alimentaires</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>{data?.fiber} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Protéines</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>{data?.proteins} g</Text>
                            </View>
                            <View style={ConsumedProductItemStyle.itemLine}>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>Sel</Text>
                                <Text style={ConsumedProductItemStyle.itemLineContent}>{data?.salt} g</Text>
                            </View>
                        </View>
                        <GenericButton
                            title="Modifier la quantité"
                            onPress={() => {}}
                            style={{
                                container: ConsumedProductItemStyle.addButtonContainer,
                                text: ConsumedProductItemStyle.addButtonText
                            }}
                        />
                        <GenericButton
                            title="Supprimer ce produit"
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

export default ConsumedProductItem;

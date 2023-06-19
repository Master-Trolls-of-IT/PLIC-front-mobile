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
    const {
        isExpended,
        HistoricalItemStyle,
        onPress,
        animatedItemStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        customInterBold
    } = useHistoricalItemData(isFavourite, score);
    return (
        <Animated.View style={[animatedItemStyle, HistoricalItemStyle.Item, style]}>
            <TouchableOpacity style={HistoricalItemStyle.container} activeOpacity={1} onPress={onPress}>
                <View style={HistoricalItemStyle.header}>
                    {image ? (
                        <Image style={HistoricalItemStyle.image} source={{ uri: image }} />
                    ) : (
                        <Image
                            style={HistoricalItemStyle.image}
                            source={require('~/domain/entities/assets/default-images/apple.png')}
                        />
                    )}
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
                                style={HistoricalItemStyle.bar}
                                useNativeDriver
                                progress={scorePercentage}
                                width={60}
                                height={9}
                                color={scoreColor}
                                unfilledColor={ColorEnum.ExtraOpaqueGrey}
                            />
                        </View>
                        <Text style={{ ...HistoricalItemStyle.score, ...useCustomFontInterBold().text }}>{score}</Text>
                    </View>
                    <TouchableOpacity onPress={toggleFavourite} style={HistoricalItemStyle.favourite}>
                        <CustomSvg asset={favouriteIcon} height={30} width={30} />
                    </TouchableOpacity>
                </View>
                {isExpended && (
                    <Animated.View
                        entering={FadeIn.duration(1100)}
                        exiting={FadeOutUp.duration(300)}
                        style={HistoricalItemStyle.content}>
                        <Text style={{ ...HistoricalItemStyle.contentTitle, ...customInterBold.text }}>
                            Apports pour 100g
                        </Text>
                        <View style={HistoricalItemStyle.contentInfo}>
                            <View style={HistoricalItemStyle.contentLine}>
                                <Text style={HistoricalItemStyle.lineContent}>Matières grasses</Text>
                                <Text style={HistoricalItemStyle.lineContent}>{data.lipid}</Text>
                            </View>
                            <View style={HistoricalItemStyle.contentLine}>
                                <Text style={HistoricalItemStyle.lineContent}>dont acides gras saturés</Text>
                                <Text style={HistoricalItemStyle.lineContent}>{data.fattyAcide}</Text>
                            </View>
                            <View style={HistoricalItemStyle.contentLine}>
                                <Text style={HistoricalItemStyle.lineContent}>Glucides</Text>
                                <Text style={HistoricalItemStyle.lineContent}>{data.carbohydrate}</Text>
                            </View>
                            <View style={HistoricalItemStyle.contentLine}>
                                <Text style={HistoricalItemStyle.lineContent}>dont sucre</Text>
                                <Text style={HistoricalItemStyle.lineContent}>{data.sugar}</Text>
                            </View>
                            <View style={HistoricalItemStyle.contentLine}>
                                <Text style={HistoricalItemStyle.lineContent}>Fibres alimentaires</Text>
                                <Text style={HistoricalItemStyle.lineContent}>{data.fiber}</Text>
                            </View>
                            <View style={HistoricalItemStyle.contentLine}>
                                <Text style={HistoricalItemStyle.lineContent}>Protéines</Text>
                                <Text style={HistoricalItemStyle.lineContent}>{data.protein}</Text>
                            </View>
                            <View style={HistoricalItemStyle.contentLine}>
                                <Text style={HistoricalItemStyle.lineContent}>Sel</Text>
                                <Text style={HistoricalItemStyle.lineContent}>{data.salt}</Text>
                            </View>
                            <View style={HistoricalItemStyle.contentLine}>
                                <Text style={HistoricalItemStyle.lineContent}>Energie</Text>
                                <Text style={HistoricalItemStyle.lineContent}>{data.energy}</Text>
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

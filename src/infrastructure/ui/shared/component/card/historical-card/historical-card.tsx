import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';
import { Bar } from 'react-native-progress';
import { HistoricalCardProps } from '~/domain/interfaces/props/historical-card-props';
import useHistoricalCardData from '~/infrastructure/ui/shared/component/card/historical-card/hooks';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import useCustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular-hooks';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';

const HistoricalCard = ({
    name,
    description,
    score,
    image,
    isFavourite,
    toggleFavourite,
    data,
    style
}: HistoricalCardProps) => {
    const {
        isExpended,
        HistoricalCardStyle,
        onPress,
        animatedCardStyle,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        customInterBold
    } = useHistoricalCardData(isFavourite, score);
    return (
        <Animated.View style={[animatedCardStyle, HistoricalCardStyle.card, style]}>
            <TouchableOpacity style={HistoricalCardStyle.container} activeOpacity={1} onPress={onPress}>
                <View style={HistoricalCardStyle.header}>
                    {image ? (
                        <Image
                            style={HistoricalCardStyle.image}
                            source={require('~/domain/entities/assets/default-images/apple.png')}
                        />
                    ) : (
                        <Image
                            style={HistoricalCardStyle.image}
                            source={require('~/domain/entities/assets/default-images/apple.png')}
                        />
                    )}
                    <View style={HistoricalCardStyle.titleField}>
                        <Text style={{ ...HistoricalCardStyle.title, ...useCustomFontInterBold().text }}>{name}</Text>
                        <Text
                            style={{ ...HistoricalCardStyle.description, ...useCustomFontInterRegular().text }}
                            numberOfLines={3}>
                            {description}
                        </Text>
                    </View>
                    <View style={HistoricalCardStyle.scoreField}>
                        <View>
                            <Bar
                                style={HistoricalCardStyle.bar}
                                useNativeDriver
                                progress={scorePercentage}
                                width={60}
                                height={9}
                                color={scoreColor}
                                unfilledColor={ColorEnum.ExtraOpaqueGrey}
                            />
                        </View>
                        <Text style={{ ...HistoricalCardStyle.score, ...useCustomFontInterBold().text }}>{score}</Text>
                    </View>
                    <TouchableOpacity onPress={toggleFavourite} style={HistoricalCardStyle.favourite}>
                        <CustomSvg asset={favouriteIcon} height={30} width={30} />
                    </TouchableOpacity>
                </View>
                {isExpended && (
                    <Animated.View
                        entering={FadeIn.duration(1100)}
                        exiting={FadeOutUp.duration(300)}
                        style={HistoricalCardStyle.content}>
                        <Text style={{ ...HistoricalCardStyle.contentTitle, ...customInterBold.text }}>
                            Apports pour 100g
                        </Text>
                        <View style={HistoricalCardStyle.contentInfo}>
                            <View style={HistoricalCardStyle.contentLine}>
                                <Text style={HistoricalCardStyle.lineContent}>Matières grasses</Text>
                                <Text style={HistoricalCardStyle.lineContent}>{data.lipid}</Text>
                            </View>
                            <View style={HistoricalCardStyle.contentLine}>
                                <Text style={HistoricalCardStyle.lineContent}>dont acides gras saturés</Text>
                                <Text style={HistoricalCardStyle.lineContent}>{data.fattyAcide}</Text>
                            </View>
                            <View style={HistoricalCardStyle.contentLine}>
                                <Text style={HistoricalCardStyle.lineContent}>Glucides</Text>
                                <Text style={HistoricalCardStyle.lineContent}>{data.carbohydrate}</Text>
                            </View>
                            <View style={HistoricalCardStyle.contentLine}>
                                <Text style={HistoricalCardStyle.lineContent}>dont sucre</Text>
                                <Text style={HistoricalCardStyle.lineContent}>{data.sugar}</Text>
                            </View>
                            <View style={HistoricalCardStyle.contentLine}>
                                <Text style={HistoricalCardStyle.lineContent}>Fibres alimentaires</Text>
                                <Text style={HistoricalCardStyle.lineContent}>{data.fiber}</Text>
                            </View>
                            <View style={HistoricalCardStyle.contentLine}>
                                <Text style={HistoricalCardStyle.lineContent}>Protéines</Text>
                                <Text style={HistoricalCardStyle.lineContent}>{data.protein}</Text>
                            </View>
                            <View style={HistoricalCardStyle.contentLine}>
                                <Text style={HistoricalCardStyle.lineContent}>Sel</Text>
                                <Text style={HistoricalCardStyle.lineContent}>{data.salt}</Text>
                            </View>
                            <View style={HistoricalCardStyle.contentLine}>
                                <Text style={HistoricalCardStyle.lineContent}>Energie</Text>
                                <Text style={HistoricalCardStyle.lineContent}>{data.energy}</Text>
                            </View>
                        </View>
                        <GenericButton
                            title="Ajouter aux produits consommés"
                            onPress={() => {}}
                            style={{
                                container: HistoricalCardStyle.addButtonContainer,
                                text: HistoricalCardStyle.addButtonText
                            }}
                        />
                    </Animated.View>
                )}
            </TouchableOpacity>
        </Animated.View>
    );
};

export default HistoricalCard;

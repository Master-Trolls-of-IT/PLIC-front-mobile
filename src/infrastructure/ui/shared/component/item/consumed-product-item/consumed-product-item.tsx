import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';
import { Bar } from 'react-native-progress';
import { observer } from 'mobx-react';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import ConsumedProductItemStyle from '~/infrastructure/ui/shared/component/item/consumed-product-item/consumed-product-item-style';
import useConsumedProductItemData from '~/infrastructure/ui/shared/component/item/consumed-product-item/hooks';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import CustomModalWithHeader from '~/infrastructure/ui/shared/component/modal/custom-modal-with-header/custom-modal-with-header';
import GenericInputWithSearchIconAndEndText from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon-and-end-text/generic-input-with-search-icon-and-end-text';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal/custom-modal';

const ConsumedProductItem = ({
    id,
    name,
    brand,
    barcode,
    consumedQuantity,
    score,
    image,
    isFavourite,
    data,
    isWater,
    serving,
    style
}: ConsumedProductItemProps) => {
    const {
        customFontInterBold,
        isExpended,
        onPressProduct,
        animatedItemStyle,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        isEditModalOpen,
        setIsEditModalOpen,
        editModalQuantity,
        setEditModalQuantity,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        onPressValidateDeleteModal,
        onPressDeleteButton,
        onPressEditModalButton,
        onPressCancelDeleteModal,
        onPressAddServing,
        onPressEditQuantityButton,
        round,
        toggleFavoriteConsumedProducts
    } = useConsumedProductItemData({ barcode, id, consumedQuantity, isFavourite, score, serving });

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
                        <Text style={{ ...ConsumedProductItemStyle.title, ...customFontInterBold }}>{brand}</Text>
                        <Text style={{ ...ConsumedProductItemStyle.description }} numberOfLines={3}>
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
                        <Text style={{ ...ConsumedProductItemStyle.score, ...customFontInterBold }}>
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
                            onPress={onPressEditQuantityButton}
                            style={{
                                container: ConsumedProductItemStyle.addButtonContainer,
                                text: ConsumedProductItemStyle.addButtonText
                            }}
                        />
                        <GenericButton
                            title="Supprimer ce produit consommé"
                            onPress={onPressDeleteButton}
                            style={{
                                container: ConsumedProductItemStyle.deleteButtonContainer,
                                text: ConsumedProductItemStyle.addButtonText
                            }}
                        />
                    </Animated.View>
                )}
            </TouchableOpacity>

            {isDeleteModalOpen && (
                <CustomModalWithHeader
                    title={'Supprimer le produit'}
                    isVisible={isDeleteModalOpen}
                    dispatch={setIsDeleteModalOpen}>
                    <View style={ConsumedProductItemStyle.deleteModalContainer}>
                        <Text
                            style={{
                                ...ConsumedProductItemStyle.textDeleteModalContainer,
                                ...customFontInterBold
                            }}>
                            {'Confirmer la suppression de ce produit consommé ?'}
                        </Text>

                        <View style={ConsumedProductItemStyle.buttonDeleteModalContainer}>
                            <GenericButton
                                title={'Annuler'}
                                onPress={onPressCancelDeleteModal}
                                style={{
                                    container: ConsumedProductItemStyle.deleteModalCancelButtonContainer,
                                    text: ConsumedProductItemStyle.brownButtonText
                                }}
                            />

                            <GenericButton
                                title={'Valider'}
                                onPress={onPressValidateDeleteModal}
                                style={{
                                    container: ConsumedProductItemStyle.deleteModalValidateButtonContainer,
                                    text: ConsumedProductItemStyle.greenButtonText
                                }}
                            />
                        </View>
                    </View>
                </CustomModalWithHeader>
            )}

            {isEditModalOpen && (
                <CustomModal
                    isVisible={isEditModalOpen}
                    dispatch={setIsEditModalOpen}
                    title={'Ajouter la quantité\n consommée'}
                    titleSize={22}>
                    <GenericInputWithSearchIconAndEndText
                        placeHolder={isWater ? '25' : '100'}
                        endText={isWater ? 'cl' : 'g'}
                        style={ConsumedProductItemStyle.customModalChildren}
                        input={editModalQuantity}
                        dispatch={setEditModalQuantity}
                        onPressSearchIcon={onPressEditModalButton}
                    />

                    {serving ? (
                        <GenericButton
                            title={'Ajouter une portion'}
                            onPress={onPressAddServing}
                            style={{
                                container: ConsumedProductItemStyle.quantityModalButtonContainer,
                                text: ConsumedProductItemStyle.quantityModalButtonText
                            }}
                        />
                    ) : (
                        <></>
                    )}
                </CustomModal>
            )}
        </Animated.View>
    );
};

export default observer(ConsumedProductItem);

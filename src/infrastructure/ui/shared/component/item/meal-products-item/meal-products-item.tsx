import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Bar } from 'react-native-progress';
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';
import { observer } from 'mobx-react';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';
import useCustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular-hooks';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import MealProductsItemStyle from '~/infrastructure/ui/shared/component/item/meal-products-item/meal-products-item-style';
import useMealProductsItemData from '~/infrastructure/ui/shared/component/item/meal-products-item/hooks';
import { MealProductsItemProps } from '~/domain/interfaces/props/search-list/item/meal-products-item/meal-products-item-props';
import CustomModalWithHeader from '~/infrastructure/ui/shared/component/modal/custom-modal-with-header/custom-modal-with-header';
import ModalAddQuantity from '~/infrastructure/ui/shared/component/modal/modal-add-quantity/modal-add-quantity';

const MealProductsItem = ({
    id,
    name,
    brand,
    consumedQuantity,
    score,
    image,
    isWater,
    serving,
    style
}: MealProductsItemProps) => {
    const {
        addQuantity,
        animatedItemStyle,
        customFontInterBold,
        isEditModalOpen,
        setIsEditModalOpen,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        isExpended,
        onPressEditMealProductQuantity,
        onPressProduct,
        scoreColor,
        scorePercentage,
        onPressCancelDeleteModal,
        onPressDeleteModal,
        onPressValidateDeleteModal
    } = useMealProductsItemData({ id, score });

    return (
        <Animated.View style={[animatedItemStyle, MealProductsItemStyle.item, style]}>
            <TouchableOpacity style={MealProductsItemStyle.container} activeOpacity={1} onPress={onPressProduct}>
                <View style={MealProductsItemStyle.header}>
                    <View style={MealProductsItemStyle.imageContainer}>
                        {image ? (
                            <Image style={MealProductsItemStyle.image} source={{ uri: image }} />
                        ) : (
                            <Text style={MealProductsItemStyle.imageText}>Image indisponible</Text>
                        )}
                    </View>

                    <View style={MealProductsItemStyle.titleField}>
                        <Text style={{ ...MealProductsItemStyle.title, ...useCustomFontInterBold().text }}>
                            {brand}
                        </Text>
                        <Text
                            style={{ ...MealProductsItemStyle.description, ...useCustomFontInterRegular().text }}
                            numberOfLines={3}>
                            {name}
                        </Text>
                    </View>
                    <View style={MealProductsItemStyle.scoreField}>
                        <View>
                            <Bar
                                style={{ ...MealProductsItemStyle.bar, borderLeftColor: scoreColor }}
                                useNativeDriver
                                progress={isNaN(scorePercentage) ? 0 : scorePercentage}
                                width={60}
                                height={9}
                                color={scoreColor}
                                unfilledColor={ColorEnum.ExtraOpaqueGrey}
                                animated={false}
                            />
                        </View>
                        <Text style={{ ...MealProductsItemStyle.score, ...useCustomFontInterBold().text }}>
                            {isNaN(score) ? 0 : score}
                        </Text>
                    </View>
                </View>

                {isExpended && (
                    <Animated.View
                        entering={FadeIn.duration(1200)}
                        exiting={FadeOutUp.duration(200)}
                        style={MealProductsItemStyle.quantityContainer}>
                        <View style={MealProductsItemStyle.quantityTitleContainer}>
                            <Text style={MealProductsItemStyle.quantityTitle}>
                                Votre quantité consommée : {consumedQuantity} g
                            </Text>
                        </View>
                        <GenericButton
                            title="Modifier la quantité consommée"
                            onPress={onPressEditMealProductQuantity}
                            style={{
                                container: MealProductsItemStyle.editButtonContainer,
                                text: MealProductsItemStyle.buttonText
                            }}
                        />
                        <GenericButton
                            title="Supprimer ce produit consommé"
                            onPress={onPressDeleteModal}
                            style={{
                                container: MealProductsItemStyle.deleteButtonContainer,
                                text: MealProductsItemStyle.buttonText
                            }}
                        />
                    </Animated.View>
                )}

                <ModalAddQuantity
                    title={'Modifier la quantité\n consommée'}
                    modal={isEditModalOpen}
                    setModal={setIsEditModalOpen}
                    addQuantity={addQuantity}
                    isWater={isWater}
                    serving={serving}
                    defaultQuantity={consumedQuantity}
                />

                {isDeleteModalOpen && (
                    <CustomModalWithHeader
                        title={'Supprimer le produit'}
                        isVisible={isDeleteModalOpen}
                        dispatch={setIsDeleteModalOpen}>
                        <View style={MealProductsItemStyle.deleteModalContainer}>
                            <Text
                                style={{
                                    ...MealProductsItemStyle.textDeleteModalContainer,
                                    ...customFontInterBold
                                }}>
                                {'Confirmer la suppression de ce produit du repas ?'}
                            </Text>

                            <View style={MealProductsItemStyle.buttonDeleteModalContainer}>
                                <GenericButton
                                    title={'Annuler'}
                                    onPress={onPressCancelDeleteModal}
                                    style={{
                                        container: MealProductsItemStyle.deleteModalCancelButtonContainer,
                                        text: MealProductsItemStyle.brownButtonText
                                    }}
                                />

                                <GenericButton
                                    title={'Valider'}
                                    onPress={onPressValidateDeleteModal}
                                    style={{
                                        container: MealProductsItemStyle.deleteModalValidateButtonContainer,
                                        text: MealProductsItemStyle.greenButtonText
                                    }}
                                />
                            </View>
                        </View>
                    </CustomModalWithHeader>
                )}
            </TouchableOpacity>
        </Animated.View>
    );
};

export default observer(MealProductsItem);

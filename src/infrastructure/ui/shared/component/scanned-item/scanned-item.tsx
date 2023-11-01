import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import { ScannedItemProps } from '~/domain/interfaces/props/scanned-item/scanned-item-props';
import ScannedItemStyle from '~/infrastructure/ui/shared/component/scanned-item/scanned-item-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import useScannedItemData from '~/infrastructure/ui/shared/component/scanned-item/hooks';
import ModalAddQuantity from '~/infrastructure/ui/shared/component/modal/modal-add-quantity/modal-add-quantity';

const ScannedItem = ({
    scannedProduct,
    createMealProduct,
    toggleFavourite,
    onPressScanAgain,
    onPressAddQuantity
}: ScannedItemProps) => {
    const {
        modal,
        setModal,
        chooseRightNutriScoreImage,
        horizontalScrollLineAsset,
        unfilledFavouriteAsset,
        interBoldText,
        showRightEcoScore
    } = useScannedItemData({ scannedProduct });

    // TODO: Corriger le problèmes avec les glucides dans le parsing
    return (
        <View style={ScannedItemStyle.scanModal}>
            <TouchableOpacity onPress={toggleFavourite} style={ScannedItemStyle.favourite}>
                <CustomSvg asset={unfilledFavouriteAsset} height={35} width={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressScanAgain} style={ScannedItemStyle.scrollLine}>
                <CustomSvg asset={horizontalScrollLineAsset} height={25} width={60} />
            </TouchableOpacity>
            <View style={ScannedItemStyle.headerContainer}>
                <View style={ScannedItemStyle.imageContainer}>
                    {scannedProduct?.image_url ? (
                        <Image style={ScannedItemStyle.image} source={{ uri: scannedProduct?.image_url }} />
                    ) : (
                        <Text style={ScannedItemStyle.imageText}>Image indisponible</Text>
                    )}
                </View>
                <View style={ScannedItemStyle.headerTextContainer}>
                    <Text style={{ ...CustomFontInterBold().text, ...ScannedItemStyle.brandText }}>
                        {scannedProduct?.brand ? scannedProduct?.brand : 'Marque'}
                    </Text>
                    <Text style={ScannedItemStyle.nameText}>{scannedProduct?.name}</Text>
                </View>
            </View>
            <View style={ScannedItemStyle.scoreContainer}>
                <View style={ScannedItemStyle.nutriscoreContainer}>
                    <CustomSvg
                        asset={chooseRightNutriScoreImage()}
                        height={150}
                        width={150}
                        style={{ alignSelf: 'center' }}
                    />
                </View>
                {showRightEcoScore}
            </View>

            {!scannedProduct?.isWater && (
                <View style={ScannedItemStyle.myIntakesContainer}>
                    <View style={ScannedItemStyle.myIntakesTitleContainer}>
                        <Text style={{ ...ScannedItemStyle.myIntakesTitle, ...interBoldText }}>Apports pour 100g</Text>
                    </View>

                    <View style={ScannedItemStyle.myIntakesNutrientsContainer}>
                        <View style={ScannedItemStyle.itemLine}>
                            <Text style={ScannedItemStyle.itemLineContent}>Énergie</Text>
                            <Text style={ScannedItemStyle.itemLineContent}>
                                {scannedProduct?.nutrients.energyKj} kJ / {scannedProduct?.nutrients.energyKcal} Kcal
                            </Text>
                        </View>
                        <View style={ScannedItemStyle.itemLine}>
                            <Text style={ScannedItemStyle.itemLineContent}>Matières grasses</Text>
                            <Text style={ScannedItemStyle.itemLineContent}>{scannedProduct?.nutrients.fat} g</Text>
                        </View>
                        <View style={ScannedItemStyle.itemLine}>
                            <Text style={ScannedItemStyle.itemSameLineContent}>dont acides gras saturés</Text>
                            <Text style={ScannedItemStyle.itemSameLineContent}>
                                {scannedProduct?.nutrients.saturatedFat} g
                            </Text>
                        </View>
                        <View style={ScannedItemStyle.itemLine}>
                            <Text style={ScannedItemStyle.itemLineContent}>Glucides</Text>
                            <Text style={ScannedItemStyle.itemLineContent}>
                                {scannedProduct?.nutrients.carbohydrates} g
                            </Text>
                        </View>
                        <View style={ScannedItemStyle.itemLine}>
                            <Text style={ScannedItemStyle.itemSameLineContent}>dont sucres</Text>
                            <Text style={ScannedItemStyle.itemSameLineContent}>
                                {scannedProduct?.nutrients.sugar} g
                            </Text>
                        </View>
                        <View style={ScannedItemStyle.itemLine}>
                            <Text style={ScannedItemStyle.itemLineContent}>Fibres alimentaires</Text>
                            <Text style={ScannedItemStyle.itemLineContent}>{scannedProduct?.nutrients.fiber} g</Text>
                        </View>
                        <View style={ScannedItemStyle.itemLine}>
                            <Text style={ScannedItemStyle.itemLineContent}>Protéines</Text>
                            <Text style={ScannedItemStyle.itemLineContent}>{scannedProduct?.nutrients.proteins} g</Text>
                        </View>
                        <View style={ScannedItemStyle.itemLine}>
                            <Text style={ScannedItemStyle.itemLineContent}>Sel</Text>
                            <Text style={ScannedItemStyle.itemLineContent}>{scannedProduct?.nutrients.salt} g</Text>
                        </View>
                    </View>
                </View>
            )}

            <GenericButton
                title={
                    scannedProduct?.isWater || createMealProduct
                        ? 'Ajouter la quantité consommée'
                        : 'Ajouter aux produits consommés'
                }
                onPress={() => setModal(true)}
                style={{
                    container: ScannedItemStyle.buttonContainer,
                    text: ScannedItemStyle.buttonText
                }}
            />

            <ModalAddQuantity
                modal={modal}
                setModal={setModal}
                addQuantity={onPressAddQuantity}
                isWater={scannedProduct?.isWater}
                serving={scannedProduct?.serving}
            />
        </View>
    );
};

export default ScannedItem;

import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import useScanPageScannedItemData from '~/infrastructure/ui/pages/scan-page/component/scanned-item/hooks';
import { ScanPageScannedItemProps } from '~/domain/interfaces/props/scan-page-scanned-item-props';
import ScanPageScannedItemStyle from '~/infrastructure/ui/pages/scan-page/component/scanned-item/scan-page-scanned-item-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import GenericInputWithSearchIconAndEndText from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon-and-end-text/generic-input-with-search-icon-and-end-text';

const ScanPageScannedItem = ({ scannedProduct, toggleFavourite, onPressScanAgain }: ScanPageScannedItemProps) => {
    const {
        modal,
        setModal,
        chooseRightNutriScoreImage,
        horizontalScrollLineAsset,
        quantity,
        setQuantity,
        unfilledFavouriteAsset,
        onPressModalButton,
        onPressAddServing,
        servingQuantity,
        interBoldText,
        showRightEcoScore
    } = useScanPageScannedItemData(scannedProduct, onPressScanAgain);

    // TODO: Corriger le problèmes avec les glucides dans le parsing
    return (
        <View style={ScanPageScannedItemStyle.scanModal}>
            <TouchableOpacity onPress={toggleFavourite} style={ScanPageScannedItemStyle.favourite}>
                <CustomSvg asset={unfilledFavouriteAsset} height={35} width={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressScanAgain} style={ScanPageScannedItemStyle.scrollLine}>
                <CustomSvg asset={horizontalScrollLineAsset} height={25} width={60} />
            </TouchableOpacity>
            <View style={ScanPageScannedItemStyle.headerContainer}>
                <View style={ScanPageScannedItemStyle.imageContainer}>
                    {scannedProduct?.image_url ? (
                        <Image style={ScanPageScannedItemStyle.image} source={{ uri: scannedProduct?.image_url }} />
                    ) : (
                        <Text style={ScanPageScannedItemStyle.imageText}>Image indisponible</Text>
                    )}
                </View>
                <View style={ScanPageScannedItemStyle.headerTextContainer}>
                    <Text style={{ ...CustomFontInterBold().text, ...ScanPageScannedItemStyle.brandText }}>
                        {scannedProduct?.brand ? scannedProduct?.brand : 'Marque'}
                    </Text>
                    <Text style={ScanPageScannedItemStyle.nameText}>{scannedProduct?.name}</Text>
                </View>
            </View>
            <View style={ScanPageScannedItemStyle.scoreContainer}>
                <View style={ScanPageScannedItemStyle.nutriscoreContainer}>
                    <CustomSvg
                        asset={chooseRightNutriScoreImage()}
                        height={150}
                        width={150}
                        style={{ alignSelf: 'center' }}
                    />
                </View>
                {showRightEcoScore}
            </View>

            {!scannedProduct?.iswater && (
                <View style={ScanPageScannedItemStyle.myIntakesContainer}>
                    <View style={ScanPageScannedItemStyle.myIntakesTitleContainer}>
                        <Text style={{ ...ScanPageScannedItemStyle.myIntakesTitle, ...interBoldText }}>
                            Apports pour 100g
                        </Text>
                    </View>

                    <View style={ScanPageScannedItemStyle.myIntakesNutrientsContainer}>
                        <View style={ScanPageScannedItemStyle.itemLine}>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>Énergie</Text>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>
                                {scannedProduct?.nutrients.energyKj} kJ / {scannedProduct?.nutrients.energyKcal} Kcal
                            </Text>
                        </View>
                        <View style={ScanPageScannedItemStyle.itemLine}>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>Matières grasses</Text>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>
                                {scannedProduct?.nutrients.fat} g
                            </Text>
                        </View>
                        <View style={ScanPageScannedItemStyle.itemLine}>
                            <Text style={ScanPageScannedItemStyle.itemSameLineContent}>dont acides gras saturés</Text>
                            <Text style={ScanPageScannedItemStyle.itemSameLineContent}>
                                {scannedProduct?.nutrients.saturatedFat} g
                            </Text>
                        </View>
                        <View style={ScanPageScannedItemStyle.itemLine}>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>Glucides</Text>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>
                                {scannedProduct?.nutrients.carbohydrates} g
                            </Text>
                        </View>
                        <View style={ScanPageScannedItemStyle.itemLine}>
                            <Text style={ScanPageScannedItemStyle.itemSameLineContent}>dont sucres</Text>
                            <Text style={ScanPageScannedItemStyle.itemSameLineContent}>
                                {scannedProduct?.nutrients.sugar} g
                            </Text>
                        </View>
                        <View style={ScanPageScannedItemStyle.itemLine}>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>Fibres alimentaires</Text>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>
                                {scannedProduct?.nutrients.fiber} g
                            </Text>
                        </View>
                        <View style={ScanPageScannedItemStyle.itemLine}>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>Protéines</Text>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>
                                {scannedProduct?.nutrients.proteins} g
                            </Text>
                        </View>
                        <View style={ScanPageScannedItemStyle.itemLine}>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>Sel</Text>
                            <Text style={ScanPageScannedItemStyle.itemLineContent}>
                                {scannedProduct?.nutrients.salt} g
                            </Text>
                        </View>
                    </View>
                </View>
            )}

            <GenericButton
                title={scannedProduct?.iswater ? 'Ajouter la quantité consommée' : 'Ajouter aux produits consommés'}
                onPress={() => setModal(true)}
                style={{
                    container: ScanPageScannedItemStyle.buttonContainer,
                    text: ScanPageScannedItemStyle.buttonText
                }}
            />

            <CustomModal isVisible={modal} dispatch={setModal} title={'Ajouter la quantité\n consommée'} titleSize={22}>
                <GenericInputWithSearchIconAndEndText
                    placeHolder={scannedProduct?.iswater ? '25' : '100'}
                    endText={scannedProduct?.iswater ? 'cl' : 'g'}
                    style={ScanPageScannedItemStyle.customModalChildren}
                    input={quantity}
                    dispatch={setQuantity}
                    onPressSearchIcon={onPressModalButton}></GenericInputWithSearchIconAndEndText>

                {servingQuantity ? (
                    <GenericButton
                        title={'Ajouter une portion'}
                        onPress={onPressAddServing}
                        style={{
                            container: ScanPageScannedItemStyle.quantityModalButtonContainer,
                            text: ScanPageScannedItemStyle.quantityModalButtonText
                        }}
                    />
                ) : (
                    <></>
                )}
            </CustomModal>
        </View>
    );
};

export default ScanPageScannedItem;

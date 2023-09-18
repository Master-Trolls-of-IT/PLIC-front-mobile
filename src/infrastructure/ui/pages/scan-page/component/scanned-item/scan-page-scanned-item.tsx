import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import useScanPageScannedItemData from '~/infrastructure/ui/pages/scan-page/component/scanned-item/hooks';
import { ScanPageScannedItemProps } from '~/domain/interfaces/props/scan-page-scanned-item-props';
import ScanPageScannedItemStyle from '~/infrastructure/ui/pages/scan-page/component/scanned-item/scan-page-scanned-item-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericEcoScore from '~/infrastructure/ui/pages/scan-page/component/generic-eco-score/generic-eco-score';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import GenericInputWithEndText from '~/infrastructure/ui/shared/component/inputs/generic-input-with-end-text/generic-input-with-end-text';

const ScanPageScannedItem = ({ scannedProduct, toggleFavourite, onPressScanAgain }: ScanPageScannedItemProps) => {
    const {
        modal,
        setModal,
        chooseRightNutriScoreImage,
        ecoScore,
        horizontalScrollLineAsset,
        unfilledFavouriteAsset,
        addConsumedProduct,
        onPressModalButton
    } = useScanPageScannedItemData(scannedProduct, onPressScanAgain);

    // TODO: Ajouter la marque du produit dans le parsing de la réponse de l'API OpenFOODFacts
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
                {ecoScore === 0 ? (
                    <View style={ScanPageScannedItemStyle.ecoScoreContainer}>
                        <Text style={ScanPageScannedItemStyle.ecoScoreText}>Eco-Score indisponible</Text>
                    </View>
                ) : (
                    <GenericEcoScore ecoScore={ecoScore} />
                )}
            </View>

            <View style={ScanPageScannedItemStyle.myIntakesContainer}>
                <View style={ScanPageScannedItemStyle.myIntakesTitleContainer}>
                    <Text style={{ ...ScanPageScannedItemStyle.myIntakesTitle, ...CustomFontInterBold().text }}>
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
                        <Text style={ScanPageScannedItemStyle.itemLineContent}>{scannedProduct?.nutrients.fat} g</Text>
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
                        <Text style={ScanPageScannedItemStyle.itemLineContent}>{scannedProduct?.nutrients.salt} g</Text>
                    </View>
                </View>
            </View>

            <GenericButton
                title="Ajouter aux produits consommés"
                onPress={() => addConsumedProduct(scannedProduct?.barcode, setModal)}
                style={{
                    container: ScanPageScannedItemStyle.buttonContainer,
                    text: ScanPageScannedItemStyle.buttonText
                }}
            />

            <CustomModal isVisible={modal} title={'Ajouter la quantité consommée'}>
                <GenericInputWithEndText
                    title={''}
                    placeHolder={'100'}
                    endText={'g'}
                    type={InputEnum.Number}
                    input={''}
                    dispatch={() => {}}></GenericInputWithEndText>
                <GenericButton
                    title={'Valider'}
                    onPress={onPressModalButton}
                    style={{
                        container: ScanPageScannedItemStyle.buttonContainerModale,
                        text: ScanPageScannedItemStyle.buttonTextModale
                    }}></GenericButton>
            </CustomModal>
        </View>
    );
};

export default ScanPageScannedItem;

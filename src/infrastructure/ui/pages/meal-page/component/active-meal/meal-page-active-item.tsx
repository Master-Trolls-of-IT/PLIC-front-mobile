import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import useScanPageScannedItemData from '~/infrastructure/ui/pages/scan-page/component/scanned-item/hooks';
import {ScanPageScannedItemProps} from '~/domain/interfaces/props/scan-page-scanned-item-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GenericEcoScore from '~/infrastructure/ui/pages/scan-page/component/generic-eco-score/generic-eco-score';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import GenericInputWithSearchIconAndEndText
    from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon-and-end-text/generic-input-with-search-icon-and-end-text';
import useMealPageActiveItemData from "~/infrastructure/ui/pages/meal-page/component/active-meal/hooks";
import MealPageActiveItemStyle
    from "~/infrastructure/ui/pages/meal-page/component/active-meal/meal-page-active-item-style";
import ScanPageScannedItemStyle
    from "~/infrastructure/ui/pages/scan-page/component/scanned-item/scan-page-scanned-item-style";
import {MealPageActiveItemProps} from "~/domain/interfaces/props/meal-page-active-item-props";

const MealPageActiveItem = ({onPressMealMenu}: MealPageActiveItemProps) => {
    const {horizontalScrollLineAsset} = useMealPageActiveItemData();

    return (
        <View style={MealPageActiveItemStyle.scanModal}>

            <TouchableOpacity onPress={onPressMealMenu} style={ScanPageScannedItemStyle.scrollLine}>
                <CustomSvg asset={horizontalScrollLineAsset} height={25} width={60}/>
            </TouchableOpacity>

            <GenericButton
                title={'Scannez votre produits'}
                onPress={() => 'setModal(true)'}
                style={{
                    container: MealPageActiveItemStyle.brownButtonContainer,
                    text: MealPageActiveItemStyle.buttonText
                }}
            />
            <GenericButton
                title={'Historique des produits consommés'}
                onPress={() => 'setModal(true)'}
                style={{
                    container: MealPageActiveItemStyle.greenButtonContainer,
                    text: MealPageActiveItemStyle.buttonText
                }}
            />
        </View>
    )
        ;
};

export default MealPageActiveItem;

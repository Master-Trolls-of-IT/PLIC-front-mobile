import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericDropDown from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import { AddWidgetModalProps } from '~/domain/interfaces/props/AddWidgetModalProps';
import AddWidgetModalStyle from '~/infrastructure/ui/pages/widget-page/component/add-widget-modale/add-widget-modal-style';
import useAddWidgetModalData from '~/infrastructure/ui/pages/widget-page/component/add-widget-modale/hooks';

const AddWidgetModal = ({
    isAddSmallWidgetModalOpen,
    toggleModal,
    chosenWidget,
    setChosenWidget,
    nutrientsOptions,
    setFirstNutrient,
    setSecondNutrient,
    setThirdNutrient,
    handleModalConfirm
}: AddWidgetModalProps) => {
    const {
        anecdotesWidgetAsset,
        chosenWidgetAsset,
        energyWidgetAsset,
        ecoscoreWidgetAsset,
        smallMultipleWidgetAsset,
        smallSingleWidgetAsset,
        waterWidgetAsset
    } = useAddWidgetModalData();

    return (
        <CustomModal
            isVisible={isAddSmallWidgetModalOpen}
            dispatch={toggleModal}
            title="Personnalisation"
            titleSize={24}>
            <View style={AddWidgetModalStyle.addModalContent}>
                <View style={AddWidgetModalStyle.scrollSelectContainer}>
                    <ScrollView
                        style={AddWidgetModalStyle.scrollSelect}
                        contentContainerStyle={AddWidgetModalStyle.scrollSelectContent}
                        indicatorStyle={'black'}>
                        <TouchableOpacity onPress={() => setChosenWidget(WidgetEnum.Anecdote)}>
                            <Image
                                source={anecdotesWidgetAsset}
                                style={{
                                    ...AddWidgetModalStyle.imageContainer,
                                    opacity: chosenWidget == WidgetEnum.Anecdote ? 0.5 : 1
                                }}
                            />
                            {chosenWidget == WidgetEnum.Anecdote && (
                                <View style={AddWidgetModalStyle.chosenWidget}>
                                    <CustomSvg asset={chosenWidgetAsset} height={60} width={60} />
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChosenWidget(WidgetEnum.Energy)}>
                            <CustomSvg
                                asset={energyWidgetAsset}
                                height={75}
                                width={75}
                                style={{ opacity: chosenWidget == WidgetEnum.Energy ? 0.5 : 1 }}
                            />
                            {chosenWidget == WidgetEnum.Energy && (
                                <View style={AddWidgetModalStyle.chosenWidget}>
                                    <CustomSvg asset={chosenWidgetAsset} height={50} width={50} />
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChosenWidget(WidgetEnum.EcoScore)}>
                            <CustomSvg
                                asset={ecoscoreWidgetAsset}
                                height={75}
                                width={75}
                                style={{ opacity: chosenWidget == WidgetEnum.EcoScore ? 0.5 : 1 }}
                            />
                            {chosenWidget == WidgetEnum.EcoScore && (
                                <View style={AddWidgetModalStyle.chosenWidget}>
                                    <CustomSvg asset={chosenWidgetAsset} height={50} width={50} />
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChosenWidget(WidgetEnum.SmallMultiple)}>
                            <CustomSvg
                                asset={smallMultipleWidgetAsset}
                                height={75}
                                width={75}
                                style={{ opacity: chosenWidget == WidgetEnum.SmallMultiple ? 0.5 : 1 }}
                            />
                            {chosenWidget == WidgetEnum.SmallMultiple && (
                                <View style={AddWidgetModalStyle.chosenWidget}>
                                    <CustomSvg asset={chosenWidgetAsset} height={50} width={50} />
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChosenWidget(WidgetEnum.SmallSingle)}>
                            <CustomSvg
                                asset={smallSingleWidgetAsset}
                                height={75}
                                width={75}
                                style={{ opacity: chosenWidget == WidgetEnum.SmallSingle ? 0.5 : 1 }}
                            />
                            {chosenWidget == WidgetEnum.SmallSingle && (
                                <View style={AddWidgetModalStyle.chosenWidget}>
                                    <CustomSvg asset={chosenWidgetAsset} height={50} width={50} />
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setChosenWidget(WidgetEnum.Water)}>
                            <Image
                                source={waterWidgetAsset}
                                style={{
                                    ...AddWidgetModalStyle.imageContainer,
                                    opacity: chosenWidget == WidgetEnum.Water ? 0.5 : 1
                                }}
                            />
                            {chosenWidget == WidgetEnum.Water && (
                                <View style={AddWidgetModalStyle.chosenWidget}>
                                    <CustomSvg asset={chosenWidgetAsset} height={60} width={60} />
                                </View>
                            )}
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {chosenWidget === WidgetEnum.SmallSingle && (
                    <>
                        <Text style={AddWidgetModalStyle.modalDropdownAreaText}>Widget Mes Apports</Text>
                        <View style={AddWidgetModalStyle.modalDropdownArea}>
                            <GenericDropDown
                                title="1er nutriment"
                                options={nutrientsOptions}
                                dispatch={setFirstNutrient}
                                style={{ marginTop: 10 }}
                            />
                        </View>
                    </>
                )}
                {chosenWidget === WidgetEnum.SmallMultiple && (
                    <>
                        <Text style={AddWidgetModalStyle.modalDropdownAreaText}>Widget Mes Apports</Text>

                        <View style={AddWidgetModalStyle.modalDropdownArea}>
                            <GenericDropDown
                                title="1er nutriment"
                                options={nutrientsOptions}
                                dispatch={setFirstNutrient}
                            />
                            <GenericDropDown
                                title="2e nutriment"
                                options={nutrientsOptions}
                                dispatch={setSecondNutrient}
                            />
                            <GenericDropDown
                                title="3e nutriment"
                                options={nutrientsOptions}
                                dispatch={setThirdNutrient}
                            />
                        </View>
                    </>
                )}
                {chosenWidget !== WidgetEnum.Slot && (
                    <View style={AddWidgetModalStyle.modalFooter}>
                        <GenericButton
                            title="Confirmer"
                            onPress={handleModalConfirm}
                            style={{
                                container: AddWidgetModalStyle.confirmButtonStyleContainer,
                                text: AddWidgetModalStyle.confirmButtonText
                            }}
                        />
                    </View>
                )}
            </View>
        </CustomModal>
    );
};

export default AddWidgetModal;

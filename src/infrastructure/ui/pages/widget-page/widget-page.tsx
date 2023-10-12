import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import WidgetPageStyle from '~/infrastructure/ui/pages/widget-page/widget-page-style';
import LoginPageTreeClassicLogo from '~/infrastructure/ui/pages/settings-page/component/background/tree-classic-logo';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import WidgetPageBlobsTop from '~/infrastructure/ui/pages/widget-page/component/background/widget-page-blobs-top';
import WidgetPageBlobsBottom from '~/infrastructure/ui/pages/widget-page/component/background/widget-page-blobs-bottom';
import SmallBlankWidget from '~/infrastructure/ui/pages/widget-page/component/small-widget/small-blank-widget';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import LargeBlankWidget from '~/infrastructure/ui/pages/widget-page/component/large-widget/large-blank-widget';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericDropDown from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown';
import useWidgetPageData from '~/infrastructure/ui/pages/widget-page/hooks';

const WidgetPage = () => {
    const {
        setWidgetDropped,
        handlePageConfig,
        isErrorModal,
        setIsErrorModal,
        handleModalConfirm,
        isAddSmallWidgetModalOpen,
        toggleModal,
        confirmButtonStyle,
        setSecondNutrient,
        setFirstNutrient,
        nutrientsOptions,
        setThirdNutrient,
        goBack,
        setChoosenWidget,
        choosenWidget,
        widgetField
    } = useWidgetPageData();
    return (
        <View style={WidgetPageStyle.container}>
            <View style={WidgetPageStyle.background}>
                <WidgetPageBlobsTop />
                <WidgetPageBlobsBottom />
                <LoginPageTreeClassicLogo />
                <GenericBackArrowIcon goBack={goBack} />
            </View>
            <View style={WidgetPageStyle.contentContainer}>
                <GenericHeaderText
                    firstText="Vos widgets"
                    secondText="Personnalisez vos widgets"
                    containerStyle={WidgetPageStyle.headerContainer}
                />
                <View style={WidgetPageStyle.widgetStart}>
                    <SmallBlankWidget setWidgetDropped={setWidgetDropped} />
                    <LargeBlankWidget setWidgetDropped={setWidgetDropped} />
                </View>
                <Text style={WidgetPageStyle.instructions}>Glissez vos widgets ci-dessous</Text>
                <View style={WidgetPageStyle.widgetArrival}>{widgetField}</View>
                <View style={WidgetPageStyle.footer}>
                    <GenericButton title="Confirmer" onPress={handlePageConfig} style={confirmButtonStyle} />
                </View>
            </View>
            <CustomModal
                isVisible={isAddSmallWidgetModalOpen}
                dispatch={toggleModal}
                title="Personnalisation"
                titleSize={24}>
                <View style={WidgetPageStyle.addModalContent}>
                    <View style={WidgetPageStyle.scrollSelectContainer}>
                        <ScrollView
                            style={WidgetPageStyle.scrollSelect}
                            contentContainerStyle={WidgetPageStyle.scrollSelectContent}>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.Anecdote)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-anecdotes.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.Anecdote && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.Calorie)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-calories.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.Calorie && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.EcoScore)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-eco-score.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.EcoScore && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.SmallMultiple)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-mes-apports-multiple.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.SmallMultiple && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.SmallBasic)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-mes-apports-simple.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.SmallBasic && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    {choosenWidget === WidgetEnum.SmallBasic && (
                        <>
                            <Text style={WidgetPageStyle.modalDropdownAreaText}>Widget Mes Apports</Text>
                            <View style={WidgetPageStyle.modalDropdownArea}>
                                <GenericDropDown
                                    title="1er nutriment"
                                    options={nutrientsOptions}
                                    dispatch={setFirstNutrient}
                                />
                            </View>
                        </>
                    )}
                    {choosenWidget === WidgetEnum.SmallMultiple && (
                        <>
                            <Text style={WidgetPageStyle.modalDropdownAreaText}>Widget Mes Apports</Text>

                            <View style={WidgetPageStyle.modalDropdownArea}>
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
                    {choosenWidget !== WidgetEnum.Slot && (
                        <View style={WidgetPageStyle.modalFooter}>
                            <GenericButton title="Confirmer" onPress={handleModalConfirm} style={confirmButtonStyle} />
                        </View>
                    )}
                </View>
            </CustomModal>
            <CustomModal isVisible={isErrorModal} dispatch={setIsErrorModal} title="Entrée non valide" titleSize={22} />
        </View>
    );
};

export default observer(WidgetPage);

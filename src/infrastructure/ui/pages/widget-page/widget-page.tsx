import React from 'react';
import { Text, View } from 'react-native';
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
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal/custom-modal';
import useWidgetPageData from '~/infrastructure/ui/pages/widget-page/hooks';
import AddWidgetModal from '~/infrastructure/ui/pages/widget-page/component/add-widget-modale/add-widget-modal';

const WidgetPage = () => {
    const {
        setWidgetDropped,
        handlePageConfig,
        isErrorModal,
        setIsErrorModal,
        handleModalConfirm,
        isAddSmallWidgetModalOpen,
        toggleModal,
        setSecondNutrient,
        setFirstNutrient,
        nutrientsOptions,
        setThirdNutrient,
        goBack,
        setChosenWidget,
        chosenWidget,
        widgetField
    } = useWidgetPageData();

    // TODO : Change Custom Modal
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
                    <GenericButton
                        title="Confirmer"
                        onPress={handlePageConfig}
                        style={{
                            container: WidgetPageStyle.confirmButtonStyleContainer,
                            text: WidgetPageStyle.confirmButtonText
                        }}
                    />
                </View>
            </View>

            <AddWidgetModal
                isAddSmallWidgetModalOpen={isAddSmallWidgetModalOpen}
                toggleModal={toggleModal}
                chosenWidget={chosenWidget}
                setChosenWidget={setChosenWidget}
                nutrientsOptions={nutrientsOptions}
                setFirstNutrient={setFirstNutrient}
                setSecondNutrient={setSecondNutrient}
                setThirdNutrient={setThirdNutrient}
                handleModalConfirm={handleModalConfirm}
            />
            <CustomModal isVisible={isErrorModal} dispatch={setIsErrorModal} title="Entrée non valide" titleSize={22} />
        </View>
    );
};

export default observer(WidgetPage);

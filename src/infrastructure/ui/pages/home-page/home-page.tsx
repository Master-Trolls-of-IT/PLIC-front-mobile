import React from 'react';
import { observer } from 'mobx-react';
import { ActivityIndicator, Animated, View } from 'react-native';
import { HomePageContext } from './context';
import HomePageAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HomePageBasket from '~/infrastructure/ui/pages/home-page/component/background/home-page-basket';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import HomePageBlobsTop from '~/infrastructure/ui/pages/home-page/component/background/home-page-blobs-top';
import useHomePageData from '~/infrastructure/ui/pages/home-page/hooks';
import EcoScore from '~/infrastructure/ui/shared/component/widgets/eco-score/widget-ecoscore';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import LargeIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes';
import HomePageSettings from '~/infrastructure/ui/pages/home-page/component/settings/home-page-settings';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import StartupPageStyle from '~/infrastructure/ui/pages/startup-page/startup-page-style';

const HomePage = () => {
    const {
        anecdoteObject,
        dailyNutrientsGoal,
        dailyNutrientsEarned,
        username,
        chooseRightDynamicImage,
        ecoScore,
        isSettingsOpen,
        handleOpenSettings,
        handleCloseSettings,
        slideAnimBottom,
        isSettingsLoading,
        isConfirmModalOpen,
        setIsConfirmModalOpen,
        setConfirmChanges
    } = useHomePageData();

    return (
        <HomePageContext.Provider
            value={{
                handleOpenSettings: handleOpenSettings,
                handleCloseSettings: handleCloseSettings
            }}>
            <View>
                <View style={HomePageStyle.background}>
                    <HomePageBlobsTop />
                </View>
                <View style={HomePageStyle.container}>
                    <View style={HomePageStyle.header}>
                        <GenericHeaderText
                            firstText={'Votre Résumé'}
                            secondText={`Bonjour ${username},`}
                            containerStyle={HomePageStyle.headerContainer}
                            showHomePageHeader={true}
                        />
                    </View>

                    <HomePageBasket asset={chooseRightDynamicImage()} />

                    <View style={HomePageStyle.widgetContainer}>
                        <View style={HomePageStyle.widgetContainerFirstRow}>
                            <LargeIntakes
                                energy={{
                                    nutrientType: NutrientsEnum.Energy,
                                    earned: dailyNutrientsEarned.energy,
                                    goal: dailyNutrientsGoal.energy
                                }}
                                firstNutrient={{
                                    nutrientType: NutrientsEnum.Protein,
                                    earned: dailyNutrientsEarned.protein,
                                    goal: dailyNutrientsGoal.protein
                                }}
                                secondNutrient={{
                                    nutrientType: NutrientsEnum.Lipid,
                                    earned: dailyNutrientsEarned.lipid,
                                    goal: dailyNutrientsGoal.lipid
                                }}
                                thirdNutrient={{
                                    nutrientType: NutrientsEnum.Carbohydrate,
                                    earned: dailyNutrientsEarned.carbohydrate,
                                    goal: dailyNutrientsGoal.carbohydrate
                                }}
                            />
                        </View>

                        <View style={HomePageStyle.widgetContainerTwoWidgetRow}>
                            <HomePageAnecdote {...anecdoteObject} />
                            <EcoScore ecoScore={ecoScore} />
                        </View>
                    </View>
                </View>
                {isSettingsOpen && (
                    <Animated.View
                        style={[HomePageStyle.settingsPage, { transform: [{ translateY: slideAnimBottom }] }]}>
                        <HomePageSettings />
                    </Animated.View>
                )}
                {isSettingsLoading && (
                    <View style={HomePageStyle.settingsPageLoading}>
                        <ActivityIndicator size={'large'} color={ColorEnum.ClassicGrey} />
                    </View>
                )}
                <CustomModal
                    isVisible={isConfirmModalOpen}
                    dispatch={setIsConfirmModalOpen}
                    title="Confirmer les changements"
                    titleSize={25}>
                    <GenericButton
                        title="Oui"
                        onPress={() => {
                            setConfirmChanges(true);
                            setIsConfirmModalOpen(false);
                        }}
                        style={{
                            container: StartupPageStyle.modalButton,
                            text: StartupPageStyle.modalTextButton
                        }}
                    />
                    <GenericButton
                        title="Annuler"
                        onPress={() => {
                            setConfirmChanges(false);
                            setIsConfirmModalOpen(false);
                        }}
                        style={{
                            container: StartupPageStyle.modalButton,
                            text: StartupPageStyle.modalTextButton
                        }}
                    />
                </CustomModal>
            </View>
        </HomePageContext.Provider>
    );
};

export default observer(HomePage);

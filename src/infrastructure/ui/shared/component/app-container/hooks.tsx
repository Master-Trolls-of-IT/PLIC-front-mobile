import { useMemo, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import isContentGroup from '~/infrastructure/ui/shared/helper/is-content-group';
import { navigationRef } from '~/infrastructure/ui/shared/helper/navigation-ref';

const useAppContainerData = () => {
    const {
        NavigationStore: { navigate }
    } = useStore();

    const [activeScreen, setActiveScreen] = useState(PagesEnum.StartUpPage);
    const [previousScreen, setPreviousScreen] = useState(PagesEnum.StartUpPage);
    const [isFooterEnable, setIsFooterEnable] = useState(false);

    navigationRef.addListener('state', (event) => {
        setPreviousScreen((prevState) => {
            if (event.data.state != undefined) {
                return activeScreen;
            } else {
                return prevState;
            }
        });

        setActiveScreen((prevState) => {
            if (event.data.state != undefined) {
                return event.data.state.routes[event.data.state.routes.length - 1].name as PagesEnum;
            } else {
                return prevState;
            }
        });
    });

    useMemo(() => {
        setIsFooterEnable(isContentGroup(activeScreen));
    }, [activeScreen]);

    const onPressIcon = (route: PagesEnum) => {
        return () => {
            navigate(route);
        };
    };

    const animatedMealIconStyle = StyleSheet.create({ icon: {} });
    const animatedScanIconStyle = StyleSheet.create({ icon: {} });
    const animatedHomeIconStyle = StyleSheet.create({ icon: {} });
    const animatedRecipeIconStyle = StyleSheet.create({ icon: {} });
    const animatedGameIconStyle = StyleSheet.create({ icon: {} });
    const animatedSlideBar = StyleSheet.create({ slideBar: { left: 12 } });

    const isMealPageSlideBar =
        activeScreen == PagesEnum.MealPage ||
        (previousScreen == PagesEnum.MealPage && activeScreen == PagesEnum.CreateMealPage);
    const isScanPageSlideBar =
        activeScreen == PagesEnum.ScanPage ||
        (previousScreen == PagesEnum.ScanPage && activeScreen == PagesEnum.HistoricalPage) ||
        (previousScreen == PagesEnum.ScanPage && activeScreen == PagesEnum.ConsumedProducts);

    if (isMealPageSlideBar) {
        animatedMealIconStyle.icon = { marginBottom: 20 };
        animatedSlideBar.slideBar = { left: 12 };
    } else if (isScanPageSlideBar) {
        animatedScanIconStyle.icon = { marginBottom: 20 };
        animatedSlideBar.slideBar = { left: 12 + Dimensions.get('screen').width / 5 };
    } else if (activeScreen == PagesEnum.RecipePage) {
        animatedRecipeIconStyle.icon = { marginBottom: 20 };
        animatedSlideBar.slideBar = { left: 12 + (3 * Dimensions.get('screen').width) / 5 };
    } else if (activeScreen == PagesEnum.GamePage) {
        animatedGameIconStyle.icon = { marginBottom: 20 };
        animatedSlideBar.slideBar = { left: 12 + (4 * Dimensions.get('screen').width) / 5 };
    } else {
        animatedHomeIconStyle.icon = { marginBottom: 25 };
        animatedSlideBar.slideBar = { left: 12 + (2 * Dimensions.get('screen').width) / 5 };
    }

    const mealPageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-meal-page.svg');
    const scanPageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-scan-page.svg');
    const homePageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-small-white-logo.svg');
    const recipePageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-recipe-page.svg');
    const gamePageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-game-page.svg');

    const newHeight = 50;
    const newWidth = 50;

    return {
        animatedGameIconStyle,
        animatedMealIconStyle,
        animatedHomeIconStyle,
        animatedRecipeIconStyle,
        animatedScanIconStyle,
        animatedSlideBar,
        gamePageAsset,
        isFooterEnable,
        mealPageAsset,
        homePageAsset,
        recipePageAsset,
        scanPageAsset,
        newHeight,
        newWidth,
        onPressIcon,
        setIsFooterEnable
    };
};

export default useAppContainerData;

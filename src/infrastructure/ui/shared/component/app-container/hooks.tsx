import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import isContentGroup from '~/infrastructure/ui/shared/helper/is-content-group';

const useAppContainerData = () => {
    const {
        NavigationStore: { activeScreen, previousScreen, navigate }
    } = useStore();

    const [isFooterEnable, setIsFooterEnable] = useState(false);

    useEffect(() => {
        setIsFooterEnable(isContentGroup(activeScreen));
    }, [activeScreen, isFooterEnable, navigate]);

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
        (previousScreen == PagesEnum.MealPage && activeScreen == PagesEnum.HistoricalPage);
    const isScanPageSlideBar =
        activeScreen == PagesEnum.ScanPage ||
        (previousScreen == PagesEnum.ScanPage && activeScreen == PagesEnum.HistoricalPage);

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
        onPressIcon
    };
};

export default useAppContainerData;

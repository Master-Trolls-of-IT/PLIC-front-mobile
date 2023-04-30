import { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import isContentGroup from '~/infrastructure/ui/shared/helper/isContentGroup';

const useAppContainerData = () => {
    const {
        NavigationStore: { activeScreen, navigate }
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

    const [footerY, setFooterY] = useState(750);
    const footerRef = useRef<View>(null);

    footerRef.current?.measure(
        (_x: number, _y: number, _weight: number, _height: number, _pageX: number, pageY: number) => {
            setFooterY(pageY - 5);
        }
    );

    const animatedMealIconStyle = StyleSheet.create({ icon: {} });
    const animatedScanIconStyle = StyleSheet.create({ icon: {} });
    const animatedHomeIconStyle = StyleSheet.create({ icon: {} });
    const animatedRecipeIconStyle = StyleSheet.create({ icon: {} });
    const animatedGameIconStyle = StyleSheet.create({ icon: {} });
    const animatedSlideBar = StyleSheet.create({ slideBar: {} });

    if (activeScreen == PagesEnum.MealPage) {
        animatedMealIconStyle.icon = { marginBottom: 20 };
        animatedSlideBar.slideBar = { left: 12 };
    } else if (activeScreen == PagesEnum.ScanPage) {
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
        footerRef,
        footerY,
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

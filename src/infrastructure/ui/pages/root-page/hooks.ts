import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useRef, useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useRootPageData = ({ oldNavigation }: { oldNavigation: any }) => {
    const Stack = createNativeStackNavigator();
    const {
        NavigationStore: { activeScreen, navigate, setActiveScreen }
    } = useStore();

    const onPressIcon = (route: PagesEnum) => {
        return () => {
            navigate(route);
            setActiveScreen(route);
        };
    };

    const [footerY, setFooterY] = useState(750);
    const footerRef = useRef<View>(null);

    footerRef.current?.measure(
        (_x: number, _y: number, _weight: number, _height: number, _pageX: number, pageY: number) => {
            setFooterY(pageY - 5);
        }
    );

    const animatedHistoricalIconStyle = StyleSheet.create({ icon: {} });
    const animatedScanIconStyle = StyleSheet.create({ icon: {} });
    const animatedHomeIconStyle = StyleSheet.create({ icon: {} });
    const animatedRecipeIconStyle = StyleSheet.create({ icon: {} });
    const animatedGameIconStyle = StyleSheet.create({ icon: {} });
    const animatedSlideBar = StyleSheet.create({ slideBar: {} });

    if (activeScreen == PagesEnum.HistoricalPage) {
        animatedHistoricalIconStyle.icon = { marginBottom: 20 };
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

    const historicalPageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-historical-page.svg');
    const scanPageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-scan-page.svg');
    const homePageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-small-white-logo.svg');
    const recipePageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-recipe-page.svg');
    const gamePageAsset = require('~/domain/entities/assets/icon/footer-icon/icon-game-page.svg');

    const newHeight = 50;
    const newWidth = 50;

    const gestureEnbaled = { gestureEnabled: true };
    const gestureDisbaled = { gestureEnbaled: false };

    const returnObject = {
        animatedGameIconStyle,
        animatedHistoricalIconStyle,
        animatedHomeIconStyle,
        animatedRecipeIconStyle,
        animatedScanIconStyle,
        animatedSlideBar,
        footerRef,
        footerY,
        gamePageAsset,
        historicalPageAsset,
        homePageAsset,
        recipePageAsset,
        scanPageAsset,
        gestureEnbaled,
        gestureDisbaled,
        newHeight,
        newWidth,
        onPressIcon,
        Stack
    };

    try {
        oldNavigation.reset({ index: 0, root: [{ name: PagesEnum.RootPage }] });
    } catch (e) {
        return returnObject;
    }

    return returnObject;
};

export default useRootPageData;

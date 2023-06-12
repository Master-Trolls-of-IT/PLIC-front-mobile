import * as NavigationBar from 'expo-navigation-bar';
import { useCallback, useEffect } from 'react';
import { Keyboard, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore } from '~/infrastructure/controllers/store';

const useAppData = () => {
    const barVisibility = NavigationBar.useVisibility();
    const Stack = createNativeStackNavigator();

    const rootStore = createStore();

    if (Platform.OS === 'android') NavigationBar.setBackgroundColorAsync('#00000000');

    const gestureEnabled = { gestureEnabled: true };
    const gestureDisabled = { gestureEnabled: false };

    const navigationConfig = useCallback(async () => {
        await NavigationBar.setVisibilityAsync('hidden');
    }, []);

    useEffect(() => {
        if (Platform.OS === 'android') void navigationConfig();

        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            if (Platform.OS === 'android') void navigationConfig();
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            if (Platform.OS === 'android') void navigationConfig();
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [navigationConfig]);

    useEffect(() => {
        if (Platform.OS === 'android') void navigationConfig();
    }, [barVisibility, navigationConfig]);

    return { rootStore, Stack, gestureDisabled, gestureEnabled };
};

export default useAppData;

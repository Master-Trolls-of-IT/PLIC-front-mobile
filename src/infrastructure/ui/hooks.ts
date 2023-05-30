import * as NavigationBar from 'expo-navigation-bar';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore } from '~/infrastructure/controllers/store';

const useAppData = () => {
    const [barVisibility, setBarVisibility] = useState<'visible' | 'hidden'>('hidden');
    const Stack = createNativeStackNavigator();
    const rootStore = createStore();

    if (Platform.OS === 'android')
        NavigationBar.addVisibilityListener(({ visibility }) => {
            if (visibility === 'visible') {
                setBarVisibility(visibility);
            }
        });

    LogBox.ignoreLogs([/.*mobx-persist-store.*/]);

    useEffect(() => {
        const navigationConfig = async () => {
            await NavigationBar.setVisibilityAsync(barVisibility);
        };

        if (Platform.OS === 'android') void navigationConfig();
    }, [barVisibility]);

    const gestureEnabled = { gestureEnabled: true };
    const gestureDisabled = { gestureEnabled: false };

    return { rootStore, Stack, gestureDisabled, gestureEnabled };
};

export default useAppData;

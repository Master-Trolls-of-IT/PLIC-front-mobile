import * as NavigationBar from 'expo-navigation-bar';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore } from '~/infrastructure/controllers/store';

const useAppData = () => {
    const [barVisibility, setBarVisibility] = useState<'visible' | 'hidden'>();
    const Stack = createNativeStackNavigator();
    const rootStore = createStore();

    if (Platform.OS === 'android')
        NavigationBar.addVisibilityListener(({ visibility }) => {
            if (visibility === 'visible') {
                setBarVisibility(visibility);
            }
        });

    const navigationConfig = async () => {
        await NavigationBar.setVisibilityAsync('hidden');
    };

    useEffect(() => {
        if (Platform.OS === 'android') void navigationConfig();
    }, [barVisibility]);

    return { rootStore, Stack };
};

export default useAppData;

import * as NavigationBar from 'expo-navigation-bar';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

const useAppData = () => {
    const [barVisibility, setBarVisibility] = useState<'visible' | 'hidden'>();

    if (Platform.OS === 'android')
        NavigationBar.addVisibilityListener(({ visibility }) => {
            if (visibility === 'visible') {
                setBarVisibility(visibility);
            }
        });
    const navigationConfig = async () => {
        // Hide it
        NavigationBar.setVisibilityAsync('hidden');
    };

    useEffect(() => {
        void navigationConfig();
    }, [barVisibility]);
};

export default useAppData;

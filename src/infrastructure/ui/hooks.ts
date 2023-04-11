import * as NavigationBar from 'expo-navigation-bar';
import { useEffect, useState } from 'react';

const useAppData = () => {
    const [barVisibility, setBarVisibility] = useState<'visible' | 'hidden'>();

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

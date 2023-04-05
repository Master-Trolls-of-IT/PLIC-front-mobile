import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';

const useCustomFontInterRegular = () => {
    const [fontLoadedRegular, setFontLoadedRegular] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'custom-font-regular': require('~/domain/entities/assets/font/inter-regular.ttf')
            });

            setFontLoadedRegular(true);
        }

        void loadFont();
    }, []);

    if (!fontLoadedRegular) {
        return StyleSheet.create({
            text: {
                fontStyle: 'normal'
            }
        });
    }

    const customInterRegularFont = { text: { fontFamily: 'custom-font-regular' } };

    return { ...customInterRegularFont };
};

export default useCustomFontInterRegular;

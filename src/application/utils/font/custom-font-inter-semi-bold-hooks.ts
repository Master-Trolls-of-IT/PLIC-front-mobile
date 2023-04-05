import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';

const useCustomFontInterSemiBold = () => {
    const [fontLoadedSemiBold, setFontLoadedSemiBold] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'custom-font-semi-bold': require('~/domain/entities/assets/font/inter-semi-bold.ttf')
            });

            setFontLoadedSemiBold(true);
        }

        void loadFont();
    }, []);

    if (!fontLoadedSemiBold) {
        return StyleSheet.create({
            text: {
                fontStyle: 'normal'
            }
        });
    }

    const customInterSemiBoldFont = { text: { fontFamily: 'custom-font-semi-bold' } };

    return { ...customInterSemiBoldFont };
};

export default useCustomFontInterSemiBold;

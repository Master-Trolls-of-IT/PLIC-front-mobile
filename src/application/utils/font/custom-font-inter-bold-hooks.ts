import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';

const useCustomFontInterBold = () => {
    const [fontLoadedBold, setFontLoadedBold] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'custom-font-bold': require('~/domain/entities/assets/font/inter-bold.ttf')
            });

            setFontLoadedBold(true);
        }

        void loadFont();
    }, []);

    if (!fontLoadedBold) {
        return StyleSheet.create({
            text: {
                fontStyle: 'normal'
            }
        });
    }

    const customInterBoldFont = { text: { fontFamily: 'custom-font-bold' } };

    return { ...customInterBoldFont };
};

export default useCustomFontInterBold;

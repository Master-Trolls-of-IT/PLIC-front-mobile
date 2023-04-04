import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';

const CustomFontInterBold = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'custom-font-bold': require('~/domain/entities/assets/font/inter-bold.ttf')
            });

            setFontLoaded(true);
        }

        void loadFont();
    }, []);

    if (!fontLoaded) {
        return StyleSheet.create({
            text: {
                fontStyle: 'normal'
            }
        });
    }

    return StyleSheet.create({
        text: {
            fontFamily: 'custom-font-bold'
        }
    });
};

export default CustomFontInterBold;

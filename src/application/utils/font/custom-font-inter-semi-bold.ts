import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';

const CustomFontInterSemiBold = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'custom-font-semi-bold': require('~/domain/entities/assets/font/inter-semi-bold.ttf')
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
            fontFamily: 'custom-font-semi-bold'
        }
    });
};

export default CustomFontInterSemiBold;

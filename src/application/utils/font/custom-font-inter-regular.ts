import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';

const CustomFontInterRegular = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'custom-font-regular': require('~/domain/entities/assets/font/inter-regular.ttf')
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
            fontFamily: 'custom-font-regular'
        }
    });
};

export default CustomFontInterRegular;

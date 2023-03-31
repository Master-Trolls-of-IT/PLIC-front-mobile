import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text } from 'react-native';

const CustomFontInterBold = ({ text, style }: { text: string; style?: object }) => {
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
        return <Text>Loading...</Text>;
    }

    return <Text style={{ ...style, fontFamily: 'custom-font-bold' }}>{text}</Text>;
};

export default CustomFontInterBold;

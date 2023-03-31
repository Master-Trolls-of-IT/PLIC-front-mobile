import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text } from 'react-native';

const CustomFontInterRegular = ({ text, style }: { text: string; style?: object }) => {
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
        return <Text>Loading...</Text>;
    }

    return <Text style={{ ...style, fontFamily: 'custom-font-regular' }}>{text}</Text>;
};

export default CustomFontInterRegular;

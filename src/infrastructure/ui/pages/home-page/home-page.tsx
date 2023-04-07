import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const HomePage: FunctionComponent<unknown> = () => {
    const customFont = CustomFontInterBold().text;

    return (
        <View style={HomePageStyle.background}>
            <Text style={{ ...HomePageStyle.text, ...customFont }}>Home Page</Text>
        </View>
    );
};

export default HomePage;

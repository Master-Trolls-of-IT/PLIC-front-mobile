import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { useStore } from '~/infrastructure/controllers/store';

const HomePage = () => {
    const {
        LoginStore: { refreshToken, accessToken }
    } = useStore();
    return (
        <View style={HomePageStyle.background}>
            <Text style={{ ...HomePageStyle.text, ...CustomFontInterBold().text }}>Home Page</Text>
            <Text>refreshToken: {refreshToken}</Text>
            <Text>accessToken: {accessToken}</Text>
        </View>
    );
};

export default observer(HomePage);

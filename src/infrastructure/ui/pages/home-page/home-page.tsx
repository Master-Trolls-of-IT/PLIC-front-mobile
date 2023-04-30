import React, { FunctionComponent, useEffect } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { useStore } from '~/infrastructure/controllers/store';

const HomePage: FunctionComponent<any> = ({ navigation }) => {
    const {
        NavigationStore: { setNavigate }
    } = useStore();

    useEffect(() => {
        setNavigate(navigation.navigate);
    }, [setNavigate, navigation]);

    return (
        <View style={HomePageStyle.background}>
            <Text style={{ ...HomePageStyle.text, ...CustomFontInterBold().text }}>Home Page</Text>
        </View>
    );
};

export default observer(HomePage);

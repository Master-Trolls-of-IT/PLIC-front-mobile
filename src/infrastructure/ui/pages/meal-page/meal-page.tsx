import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import MealPageStyle from '~/infrastructure/ui/pages/meal-page/meal-page-style';

const MealPage = () => {
    return (
        <View style={MealPageStyle.background}>
            <Text style={{ ...MealPageStyle.text, ...CustomFontInterBold().text }}>Meal Page</Text>
        </View>
    );
};

export default observer(MealPage);

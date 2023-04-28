import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import RecipePageStyle from '~/infrastructure/ui/pages/recipes-page/recipe-page-style';

const RecipePage: FunctionComponent<any> = ({ navigation }) => {
    return (
        <View style={RecipePageStyle.background}>
            <Text style={{ ...RecipePageStyle.text, ...CustomFontInterBold().text }}>Recipe Page</Text>
        </View>
    );
};
export default observer(RecipePage);

import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import GamePageStyle from '~/infrastructure/ui/pages/game-page/game-page-style';

const GamePage: FunctionComponent<any> = ({ navigation }) => {
    return (
        <View style={GamePageStyle.background}>
            <Text style={{ ...GamePageStyle.text, ...CustomFontInterBold().text }}>Game Page</Text>
        </View>
    );
};

export default observer(GamePage);

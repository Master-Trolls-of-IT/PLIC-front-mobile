import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import HistoricalPageStyle from '~/infrastructure/ui/pages/historical-page/historical-page-style';

const HistoricalPage: FunctionComponent<any> = ({ navigation }) => {
    return (
        <View style={HistoricalPageStyle.background}>
            <Text style={{ ...HistoricalPageStyle.text, ...CustomFontInterBold().text }}>Historical Page</Text>
        </View>
    );
};

export default observer(HistoricalPage);

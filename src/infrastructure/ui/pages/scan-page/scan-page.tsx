import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import ScanPageStyle from '~/infrastructure/ui/pages/scan-page/scan-page-style';

const ScanPage: FunctionComponent<any> = ({ navigation }) => {
    return (
        <View style={ScanPageStyle.background}>
            <Text style={{ ...ScanPageStyle.text, ...CustomFontInterBold().text }}>Scan Page</Text>
        </View>
    );
};

export default observer(ScanPage);

import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import SignUpPageStyle from '~/infrastructure/ui/pages/sign-up-page/sign-up-page-style';

const SignUpPage: FunctionComponent<any> = ({ navigation }) => {
    return (
        <View style={SignUpPageStyle.background}>
            <Text style={{ ...SignUpPageStyle.text, ...CustomFontInterBold().text }}>Sign-up Page</Text>
        </View>
    );
};

export default SignUpPage;

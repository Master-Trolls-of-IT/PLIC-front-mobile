import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import SignUpPageStyle from '~/infrastructure/ui/pages/sign-up-page/sign-up-page-style';

const SignUpPage: FunctionComponent<any> = ({ navigation }) => {
    const customFont = CustomFontInterBold().text;

    return (
        <View style={SignUpPageStyle.background}>
            <Text style={{ ...SignUpPageStyle.text, ...customFont }}>Sign-up Page</Text>
        </View>
    );
};

export default SignUpPage;

import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import SignUpPageStyle from '~/infrastructure/ui/pages/sign-up-page/sign-up-page-style';
import SignUpPageBlobsTop from '~/infrastructure/ui/pages/sign-up-page/component/background/sign-up-page-blobs-top';
import SignUpPageTreeClassicLogo from '~/infrastructure/ui/pages/sign-up-page/component/background/tree-classic-logo';
import GenericHeaderText from '~/infrastructure/ui/shared/component/generic-header-text/generic-header-text';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import GenericDropDown from '~/infrastructure/ui/shared/component/generic-dropdown/generic-dropdown';

const SignUpPage: FunctionComponent<any> = ({ navigation }) => {
    return (
        <View>
            <View style={SignUpPageStyle.background}>
                <SignUpPageBlobsTop />
                <Text style={{ ...SignUpPageStyle.text, ...CustomFontInterBold().text }}>Sign-up Page</Text>
                <SignUpPageTreeClassicLogo />
            </View>
            <View>
                <GenericHeaderText
                    firstText={'Dites nous en plus,'}
                    secondText={'Veuillez remplir les champs suivants'}
                />
                <View style={SignUpPageStyle.input}>
                    <GenericDropDown title={'Genre'} type={InputTypeEnum.Genre} placeHolder={'Homme'} />
                </View>
            </View>
        </View>
    );
};

export default SignUpPage;

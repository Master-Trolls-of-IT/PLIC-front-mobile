import React from "react";
import { View, Dimensions } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import loginPageStyle from "~/infrastructure/ui/pages/login-page/login-page-style";

const LoginPage = () => {
    const loginPageBlobsTop = require('~/domain/entities/assets/login-page/login-page-blobs-top.svg');
    const loginPageBlobsBottom = require('~/domain/entities/assets/login-page/login-page-blobs-bottom.svg');
    const treeClassicLogo = require('~/domain/entities/assets/logo/tree-classic-logo.svg');

    const newHeight = Dimensions.get("screen").height / 4;
    const newWidth = Dimensions.get("screen").width;

    return (
        <View style={loginPageStyle.container}>
            <WithLocalSvg asset={loginPageBlobsTop} width={newWidth} height={newHeight}/>
            <WithLocalSvg asset={loginPageBlobsBottom} width={newWidth} height={newHeight}/>
            <WithLocalSvg asset={treeClassicLogo} style={loginPageStyle.tree}/>
        </View>
    )
}

export default LoginPage;

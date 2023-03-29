import React, { FunctionComponent } from "react";
import { Dimensions, View } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import startupPageStyle from "./startup-page-style";
import useStartupPageService from "~/application/page-service/startup-page-service";

const StartupPage: FunctionComponent<any> = ({ navigation }) => {
    useStartupPageService(navigation.navigate, 2500);

    const startupPageBlobsTop = require('~/domain/entities/assets/startup-page/startup-page-blobs-top.svg');
    const logoLargeClassic = require('~/domain/entities/assets/logo/logo-large-classic.svg');
    const startupPageBlobsBottom = require('~/domain/entities/assets/startup-page/startup-page-blobs-bottom.svg')

    const newHeight = Dimensions.get("screen").height / 3;
    const newWidth = Dimensions.get("screen").width;

    return (
        <View style={startupPageStyle.container}>
            <WithLocalSvg asset={startupPageBlobsTop} width={newWidth} height={newHeight}/>
            <WithLocalSvg asset={logoLargeClassic} width={newWidth} height={newHeight}/>
            <WithLocalSvg asset={startupPageBlobsBottom} width={newWidth} height={newHeight}/>
        </View>
    )
};

export default StartupPage;

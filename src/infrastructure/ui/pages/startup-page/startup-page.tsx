import React from "react";
import { View } from "react-native";
import startupPageStyle from "./startup-page-style";
import Svg from "~/infrastructure/ui/shared/svg/svg";
import { startupPageBlobsBottom, startupPageBlobsTop } from "~/domain/entities/constants/blobs";
import { largeClassicLogo } from "~/domain/entities/constants/logo";

const StartupPage = () => {
    return (
        <View style={startupPageStyle.container}>
            <Svg xml={startupPageBlobsTop} args={{width: "100%"}}/>
            <Svg xml={largeClassicLogo} args={{width: "100%"}}/>
            <Svg xml={startupPageBlobsBottom} args={{width: "100%"}}/>
        </View>
    )
}

export default StartupPage;

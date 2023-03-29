import React, { FunctionComponent } from "react";
import { View } from "react-native";
import startupPageStyle from "./startup-page-style";
import Svg from "~/infrastructure/ui/shared/svg/svg";
import { startupPageBlobsBottom, startupPageBlobsTop } from "~/domain/entities/constants/blobs";
import { largeClassicLogo } from "~/domain/entities/constants/logo";
import useStartupPageService from "~/application/page-service/startup-page-service";

const StartupPage: FunctionComponent<any> = ({ navigation })  => {
    useStartupPageService(navigation.navigate, 2000);

    return (
        <View style={startupPageStyle.container}>
            <Svg xml={startupPageBlobsTop} args={{width: "100%"}}/>
            <Svg xml={largeClassicLogo} args={{width: "100%"}}/>
            <Svg xml={startupPageBlobsBottom} args={{width: "100%"}}/>
        </View>
    )
}

export default StartupPage;

import { SvgXml } from "react-native-svg";
import React from "react";
import { SvgType } from "~/domain/entities/types/svg-type";

const Svg = ({xml, style, args}: SvgType) => {
    return (
        <SvgXml xml={xml} style={style} {...args}/>
    )
}

export default Svg;

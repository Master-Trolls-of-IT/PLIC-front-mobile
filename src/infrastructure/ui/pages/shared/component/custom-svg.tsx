import React from 'react';
import { WithLocalSvg } from 'react-native-svg';
import { CustomSvgProps } from '~/application/type/custom-svg-type';

const CustomSvg = ({ asset, style, width, height }: CustomSvgProps) => {
    return <WithLocalSvg asset={asset} style={style} width={width} height={height} />;
};

export default CustomSvg;

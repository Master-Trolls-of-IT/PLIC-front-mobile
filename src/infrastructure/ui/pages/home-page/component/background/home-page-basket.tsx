import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const HomePageBasket = ({ asset }: { asset: any }) => {
    const newWidth = Dimensions.get('screen').width;
    const newHeight = Dimensions.get('screen').height / 3.35;
    const style = { marginBottom: Dimensions.get('screen').height / 40 };

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} style={style} />;
};

export default HomePageBasket;

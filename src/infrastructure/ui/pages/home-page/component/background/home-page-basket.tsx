import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';

const HomePageBasket = ({ asset }: { asset: unknown }) => {
    const newWidth = 0.9 * Dimensions.get('screen').width;
    const newHeight = Dimensions.get('screen').height / 3.35;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} style={HomePageStyle.basketImage} />;
};

export default HomePageBasket;

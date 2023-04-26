import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import HomePageStyle from '../../home-page-style';

const HomePageBasket = () => {
    const asset = require('~/domain/entities/assets/home-page/home-page-basket.svg');

    const newWidth = Dimensions.get('screen').width;
    const newHeight = Dimensions.get('screen').height / 4;
    return <CustomSvg asset={asset} height={newHeight} width={newWidth}></CustomSvg>;
};

export default HomePageBasket;

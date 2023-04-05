import { StyleSheet } from 'react-native';
import useCustomFontInterSemiBold from '~/application/utils/font/custom-font-inter-semi-bold-hooks';

const CustomFontInterSemiBold = () => {
    const interSemiBoldFont = useCustomFontInterSemiBold();

    return StyleSheet.create({ ...interSemiBoldFont });
};

export default CustomFontInterSemiBold;

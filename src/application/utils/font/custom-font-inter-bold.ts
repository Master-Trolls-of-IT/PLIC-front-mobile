import { StyleSheet } from 'react-native';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';

const CustomFontInterBold = () => {
    const interBoldFont = useCustomFontInterBold();

    return StyleSheet.create({ ...interBoldFont });
};

export default CustomFontInterBold;

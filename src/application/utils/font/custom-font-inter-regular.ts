import { StyleSheet } from 'react-native';
import useCustomFontInterRegular from '~/application/utils/font/custom-font-inter-regular-hooks';

const CustomFontInterRegular = () => {
    const interRegularFont = useCustomFontInterRegular();

    return StyleSheet.create({ ...interRegularFont });
};

export default CustomFontInterRegular;

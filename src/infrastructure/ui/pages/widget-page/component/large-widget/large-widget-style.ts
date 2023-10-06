import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const LargeWidgetStyle = StyleSheet.create({
    container: {
        width: ((0.85 * Dimensions.get('screen').width) / 3) * 2,
        height: ((0.4 * Dimensions.get('screen').width) / 3) * 2,
        borderRadius: 20,
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: ColorEnum.SlightlyOpaqueGrey,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default LargeWidgetStyle;

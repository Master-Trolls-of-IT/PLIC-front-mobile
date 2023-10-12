import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const SmallWidgetStyle = StyleSheet.create({
    container: {
        height: ((Dimensions.get('screen').width * 0.4) / 3) * 2,
        width: ((Dimensions.get('screen').width * 0.4) / 3) * 2,
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

export default SmallWidgetStyle;

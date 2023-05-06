import { StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GenericTooltipStyle = StyleSheet.create({
    box: {
        padding: 10,
        backgroundColor: ColorEnum.ClassicBrown,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible'
    },

    text: {
        color: ColorEnum.ClassicBeige,
        lineHeight: 20
    },

    triangle: {
        width: 10,
        height: 10,
        marginTop: 0,
        left: 15,
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderBottomWidth: 10,
        borderBottomColor: ColorEnum.ClassicBrown,
        transform: [{ rotate: '180deg' }]
    }
});

export default GenericTooltipStyle;

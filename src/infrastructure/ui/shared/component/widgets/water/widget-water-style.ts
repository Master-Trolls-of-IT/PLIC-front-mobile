import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const WidgetWaterStyle = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').width * 0.4,
        width: Dimensions.get('screen').width * 0.4,
        padding: 10,
        borderRadius: 20,
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        display: 'flex',
        flexDirection: 'row'
    },

    circleContainer: {
        alignSelf: 'center'
    },

    circle: {
        alignSelf: 'center',
        paddingRight: 5
    },

    textContainer: {
        position: 'absolute',
        marginTop: 27,
        alignSelf: 'center'
    },

    quantityText: {
        color: ColorEnum.SlightlyOpaqueGrey,
        fontSize: 21 * (Dimensions.get('screen').height / 900)
    },

    goalText: {
        color: ColorEnum.SlightlyOpaqueGrey,
        alignSelf: 'center',
        marginTop: -2,
        fontSize: 14 * (Dimensions.get('screen').height / 900)
    },

    waterGlassContainer: {
        alignSelf: 'center'
    },

    upArrowContainer: {
        padding: 5,
        alignSelf: 'center',
        marginBottom: 8
    },

    downArrowContainer: {
        transform: [{ rotateX: '180 deg' }],
        alignSelf: 'center',
        padding: 5,
        marginTop: 10
    }
});

export default WidgetWaterStyle;

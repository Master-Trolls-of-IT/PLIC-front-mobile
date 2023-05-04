import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const EcoScoreStyle = StyleSheet.create({
    content: {
        backgroundColor: ColorEnum.ClassicLightGreen,
        borderRadius: 20,
        width: 0.4 * Dimensions.get('screen').width,
        height: 0.4 * Dimensions.get('screen').width
    },

    title: {
        position: 'absolute',
        fontSize: 15 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.SlightlyOpaqueGrey,
        alignSelf: 'center',
        paddingTop: 0.15 * Dimensions.get('screen').width
    },

    percentage: {
        position: 'absolute',
        fontSize: 32 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.SlightlyOpaqueGrey,
        alignSelf: 'center',
        paddingTop: 0.06 * Dimensions.get('screen').width
    },

    circle: {
        alignSelf: 'center',
        padding: 10
    },

    icon: {
        position: 'absolute',
        alignSelf: 'center',
        paddingTop: 0.22 * Dimensions.get('screen').width
    }
});

export default EcoScoreStyle;

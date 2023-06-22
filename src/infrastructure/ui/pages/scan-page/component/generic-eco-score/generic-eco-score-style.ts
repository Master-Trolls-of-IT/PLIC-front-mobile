import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GenericEcoScoreStyle = StyleSheet.create({
    content: {
        width: '45%'
    },

    ecoScore: {
        position: 'absolute',
        fontSize: 34 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.SlightlyOpaqueGrey,
        alignSelf: 'center',
        paddingTop: 0.09 * Dimensions.get('screen').width
    },

    title: {
        position: 'absolute',
        fontSize: 16 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.SlightlyOpaqueGrey,
        alignSelf: 'center',
        paddingTop: 0.19 * Dimensions.get('screen').width
    },

    circle: {
        alignSelf: 'center',
        padding: 10
    }
});

export default GenericEcoScoreStyle;

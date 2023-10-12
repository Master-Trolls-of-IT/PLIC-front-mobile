import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const WidgetSmallSingleIntakesStyle = StyleSheet.create({
    content: {
        height: Dimensions.get('screen').width * 0.4,
        width: Dimensions.get('screen').width * 0.4,
        padding: 10,
        borderRadius: 20,
        marginRight: Dimensions.get('screen').width * 0.05,
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        display: 'flex',
        flexDirection: 'column'
    },

    title: {
        fontSize: 21 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.SlightlyOpaqueGrey
    },

    circularView: {
        marginTop: 10,
        gap: -5
    },

    circle: {
        position: 'absolute',
        alignSelf: 'center'
    },

    textContainer: {
        position: 'absolute',
        marginTop: 29,
        alignSelf: 'center'
    },

    innerTitle: {
        alignSelf: 'center',
        fontSize: 18 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.SlightlyOpaqueGrey
    },

    earned: {
        marginTop: -2,
        fontSize: 33 * (Dimensions.get('screen').height / 900),
        alignSelf: 'center',
        color: ColorEnum.SlightlyOpaqueGrey
    },

    goal: {
        marginTop: -5,
        fontSize: 17 * (Dimensions.get('screen').height / 900),
        alignSelf: 'center',
        color: ColorEnum.SlightlyOpaqueGrey
    }
});

export default WidgetSmallSingleIntakesStyle;

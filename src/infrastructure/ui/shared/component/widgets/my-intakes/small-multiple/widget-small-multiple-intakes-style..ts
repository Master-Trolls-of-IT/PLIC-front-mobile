import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const WidgetSmallMultipleIntakesStyle = StyleSheet.create({
    container: {
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        borderRadius: 20,
        width: 0.4 * Dimensions.get('screen').width,
        height: 0.4 * Dimensions.get('screen').width,
        alignItems: 'center',
        padding: 3
    },

    content: {
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 22 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.SlightlyOpaqueGrey
    },

    innerTitleContainer: {
        fontSize: 21 * (Dimensions.get('screen').height / 900),
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    firstInnerTitle: {
        color: ColorEnum.SlightlyOpaqueBlue
    },

    secondInnerTitle: {
        color: ColorEnum.SlightlyOpaqueDarkGreen
    },

    thirdInnerTitle: {
        color: ColorEnum.SlightlyOpaqueDarkRed
    },

    firstProgressBar: {
        height: 9,
        color: ColorEnum.SlightlyOpaqueBlue,
        unfilledColor: ColorEnum.VeryOpaqueBlue
    },

    secondProgressBar: {
        height: 9,
        color: ColorEnum.SlightlyOpaqueDarkGreen,
        unfilledColor: ColorEnum.VeryOpaqueDarkGreen
    },

    thirdProgressBar: {
        height: 9,
        color: ColorEnum.SlightlyOpaqueDarkRed,
        unfilledColor: ColorEnum.VeryOpaqueDarkRed
    },

    barContainer: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 7
    },

    bar: {
        width: '100%',
        marginTop: 2
    }
});

export default WidgetSmallMultipleIntakesStyle;

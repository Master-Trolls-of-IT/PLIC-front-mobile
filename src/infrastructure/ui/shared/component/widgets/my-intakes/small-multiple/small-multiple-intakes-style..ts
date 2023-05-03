import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const SmallMultipleIntakesStyle = StyleSheet.create({
    container: {
        backgroundColor: '#6D4C412C',
        borderRadius: 20,
        width: 0.4 * Dimensions.get('screen').width,
        height: 0.4 * Dimensions.get('screen').width,
        alignItems: 'center',
        padding: 3
    },

    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    title: {
        fontSize: 24 * (Dimensions.get('screen').height / 900),
        color: '#2E2E2EBF'
    },

    innerTitleContainer: {
        fontSize: 21 * (Dimensions.get('screen').height / 900),
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    firstInnerTitle: {
        color: ColorEnum.SlightlyOpaqueBlue,
        fontWeight: 'bold',
        borderRadius: 5
    },

    secondInnerTitle: {
        color: ColorEnum.SlightlyOpaqueDarkGreen,
        fontWeight: 'bold'
    },

    thirdInnerTitle: {
        color: ColorEnum.SlightlyOpaqueDarkRed,
        fontWeight: 'bold'
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
    }
});

export default SmallMultipleIntakesStyle;

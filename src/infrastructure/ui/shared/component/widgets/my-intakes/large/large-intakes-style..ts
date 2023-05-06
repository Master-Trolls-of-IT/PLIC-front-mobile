import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const LargeIntakesStyle = StyleSheet.create({
    container: {
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        borderRadius: 20,
        width: 0.85 * Dimensions.get('screen').width,
        height: 0.4 * Dimensions.get('screen').width,
        alignItems: 'center',
        padding: 3
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },

    title: {
        fontSize: 21 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.SlightlyOpaqueGrey,
        marginTop: 6,
        marginBottom: 15,
        marginLeft: 10
    },

    rightSide: {
        width: 0.48 * Dimensions.get('screen').width,
        marginTop: 10
    },

    leftSide: {
        width: 0.35 * Dimensions.get('screen').width
    },

    circularView: {
        alignSelf: 'flex-start',
        marginLeft: '25%'
    },

    circle: {
        position: 'absolute',
        alignSelf: 'center'
    },

    leftInnerTitle: {
        marginTop: 18,
        fontSize: 15 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.ClassicGrey + 'C0',
        alignSelf: 'center'
    },

    leftEarned: {
        fontSize: 32 * (Dimensions.get('screen').height / 900),
        alignSelf: 'center',
        color: ColorEnum.ClassicGrey + 'C0'
    },

    leftGoal: {
        fontSize: 15 * (Dimensions.get('screen').height / 900),
        alignSelf: 'center',
        color: ColorEnum.ClassicGrey + 'C0'
    },

    innerTitleContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    firstInnerTitle: {
        color: ColorEnum.SlightlyOpaqueBlue,
        fontWeight: 'bold'
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
        width: '75%',
        alignSelf: 'center',
        marginTop: 15
    }
});

export default LargeIntakesStyle;

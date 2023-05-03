import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const LargeIntakesStyle = (color1: string, color2: string, color3: string) =>
    StyleSheet.create({
        container: {
            backgroundColor: '#6D4C412C',
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
            fontSize: 20 * (Dimensions.get('screen').height / 900),
            color: '#2E2E2EBF',
            marginTop: 6,
            marginBottom: 15,
            marginLeft: 10
        },

        rightSide: {
            width: 0.45 * Dimensions.get('screen').width,
            marginTop: 10
        },

        leftSide: {
            width: 0.35 * Dimensions.get('screen').width
        },

        circularView: {
            alignSelf: 'flex-start',
            marginLeft: 35,
            gap: -5
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
            color: ColorEnum.ClassicGrey + 'C0',
            marginTop: -7
        },

        leftGoal: {
            fontSize: 15 * (Dimensions.get('screen').height / 900),
            alignSelf: 'center',
            color: ColorEnum.ClassicGrey + 'C0',
            marginTop: -5
        },

        innerTitleContainer: {
            fontSize: 21 * (Dimensions.get('screen').height / 900),
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        innerTitle1: {
            color: color1,
            fontWeight: 'bold',
            borderRadius: 5
        },

        innerTitle2: {
            color: color2,
            fontWeight: 'bold'
        },

        innerTitle3: {
            color: color3,
            fontWeight: 'bold'
        },

        progressBar1: {
            height: 9,
            color: color1,
            unfilledColor: color1.substring(0, 7) + '40'
        },

        progressBar2: {
            height: 9,
            color: color2,
            unfilledColor: color2.substring(0, 7) + '40'
        },

        progressBar3: {
            height: 9,
            color: color3,
            unfilledColor: color3.substring(0, 7) + '40'
        },

        barContainer: {
            width: '85%',
            alignSelf: 'center',
            marginTop: 15
        }
    });

export default LargeIntakesStyle;

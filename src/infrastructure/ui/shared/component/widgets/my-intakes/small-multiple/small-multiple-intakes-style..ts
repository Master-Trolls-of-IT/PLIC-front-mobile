import { Dimensions, StyleSheet } from 'react-native';

const SmallMultipleIntakesStyle = (color1: string, color2: string, color3: string) =>
    StyleSheet.create({
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

        innerTitle1: {
            color: color1,
            fontWeight: 'bold'
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
            width: '100%',
            height: 9,
            color: color1,
            unfilledColor: color1.substring(0, 7) + '40'
        },

        progressBar2: {
            width: '100%',
            height: 9,
            color: color2,
            unfilledColor: color2.substring(0, 7) + '40'
        },

        progressBar3: {
            width: '100%',
            height: 9,
            color: color3,
            unfilledColor: color3.substring(0, 7) + '40'
        },

        barContainer: {
            width: '85%',
            alignSelf: 'center',
            marginTop: 7
        }
    });

export default SmallMultipleIntakesStyle;

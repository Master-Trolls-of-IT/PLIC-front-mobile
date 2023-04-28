import { Dimensions, StyleSheet } from 'react-native';

const SmallBasicIntakesStyle = (color: string) =>
    StyleSheet.create({
        content: {
            backgroundColor: '#6D4C412C',
            borderRadius: 20,
            width: 0.4 * Dimensions.get('screen').width,
            height: 0.4 * Dimensions.get('screen').width,
            alignItems: 'center',
            padding: 3
        },

        title: {
            fontSize: 24 * (Dimensions.get('screen').height / 900),
            color: '#2E2E2EBF'
        },

        circularView: {
            marginTop: 10,
            gap: -5
        },

        circle: {
            position: 'absolute',
            alignSelf: 'center'
        },

        innerTitle: {
            marginTop: 18,
            fontSize: 21 * (Dimensions.get('screen').height / 900),
            color: color
        },

        earned: {
            fontSize: 38 * (Dimensions.get('screen').height / 900),
            alignSelf: 'center',
            color: color
        },

        goal: {
            fontSize: 21 * (Dimensions.get('screen').height / 900),
            alignSelf: 'center',
            color: color
        }
    });

export default SmallBasicIntakesStyle;

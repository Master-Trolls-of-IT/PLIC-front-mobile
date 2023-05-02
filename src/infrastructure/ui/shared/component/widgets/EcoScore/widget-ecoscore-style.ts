import { Dimensions, StyleSheet } from 'react-native';

const EcoScoreStyle = () =>
    StyleSheet.create({
        content: {
            backgroundColor: '#6D4C412C',
            borderRadius: 20,
            width: 0.4 * Dimensions.get('screen').width,
            height: 0.4 * Dimensions.get('screen').width
        },

        title: {
            position: 'absolute',
            fontSize: 15 * (Dimensions.get('screen').height / 900),
            color: '#2E2E2EBF',
            alignSelf: 'center',
            paddingTop: 0.15 * Dimensions.get('screen').width
        },
        percentage: {
            position: 'absolute',
            fontSize: 32 * (Dimensions.get('screen').height / 900),
            color: '#2E2E2EBF',
            alignSelf: 'center',
            paddingTop: 0.06 * Dimensions.get('screen').width
        },

        circle: {
            alignSelf: 'center',
            padding: 10
        }
    });

export default EcoScoreStyle;

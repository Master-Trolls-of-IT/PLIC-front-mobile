import { Dimensions, StyleSheet } from 'react-native';

const StartUpPageStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
    },

    largeClassicLogo: {}
});

export default StartUpPageStyle;

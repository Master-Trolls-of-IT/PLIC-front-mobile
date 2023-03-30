import { Dimensions, StyleSheet } from 'react-native';

const startupPageStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
    },

    largeClassicLogo: {}
});

export default startupPageStyle;

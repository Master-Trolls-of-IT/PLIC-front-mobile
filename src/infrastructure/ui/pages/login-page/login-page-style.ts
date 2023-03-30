import { Dimensions, StyleSheet } from 'react-native';

const loginPageStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
    },

    tree: {
        position: 'absolute',
        bottom: 0,
        right: -15
    }
});

export default loginPageStyle;

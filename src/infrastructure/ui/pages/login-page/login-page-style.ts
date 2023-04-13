import { Dimensions, StyleSheet } from 'react-native';

const loginPageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
    },

    tree: {
        position: 'absolute',
        bottom: 0,
        right: -15
    },

    errorMessage: {
        left: Dimensions.get('screen').width / 25
    },

    input: {
        alignSelf: 'center',
        top: Dimensions.get('screen').height / 5.5,
        gap: 18
    },

    buttonContainer: {
        marginTop: 15,
        width: 360 * (Dimensions.get('screen').width / 400)
    },

    brownButtonContainer: {
        left: 0,
        backgroundColor: '#6D4C41',
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 123 * (Dimensions.get('screen').width / 400)
    },

    brownButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: '#EFECCA'
    },

    greenButtonContainer: {
        backgroundColor: '#84CF3D',
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 163 * (Dimensions.get('screen').width / 400),
        right: 0
    },

    greenButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: '#4B4B4B'
    }
});

export default loginPageStyle;

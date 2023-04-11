import { Dimensions, StyleSheet } from 'react-native';

const SignUpPageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        display: 'flex',
        justifyContent: 'space-between'
    },

    tree: {
        position: 'absolute',
        bottom: 0,
        right: -15,
        opacity: 0.7
    },

    text: {
        alignSelf: 'center',
        fontSize: 30
    },

    input: {
        alignSelf: 'center',
        top: Dimensions.get('screen').height / 6.8,
        gap: 14
    },

    buttonContainer: {
        marginTop: 12,
        width: 360 * (Dimensions.get('screen').width / 400)
    },

    brownButtonContainer: {
        backgroundColor: '#6D4C41',
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 96 * (Dimensions.get('screen').width / 400),
        left: 0,
        top: 0
    },

    brownButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: '#EFECCA'
    },

    greenButtonContainer: {
        backgroundColor: '#84CF3D',
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 101 * (Dimensions.get('screen').width / 400),
        right: 0,
        top: 0
    },

    greenButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: '#4B4B4B'
    }
});

export default SignUpPageStyle;

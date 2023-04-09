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
    inputContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    input: {
        width: '100%',
        top: Dimensions.get('screen').height / 8,
        gap: 18
    },
    leftInput: {
        top: Dimensions.get('screen').height / 8,
        left: 0,
        gap: 18,
        width: Dimensions.get('screen').width / 2.2,
        overflow: 'hidden'
    },
    rightInput: {
        top: Dimensions.get('screen').height / 8,
        right: 0,
        gap: 18,
        width: Dimensions.get('screen').width / 2.2,
        overflow: 'hidden'
    },
    //Make the inputs have the same width and be side by side
    twoInputs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'flex-end'
    },
    buttonContainer: {
        marginTop: 15,
        width: 343 * (Dimensions.get('screen').width / 400)
    },

    brownButtonContainer: {
        left: 0,
        top: 0,
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
        top: 0,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 163 * (Dimensions.get('screen').width / 400),
        right: 0
    },

    greenButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: '#4B4B4B'
    }
});

export default SignUpPageStyle;

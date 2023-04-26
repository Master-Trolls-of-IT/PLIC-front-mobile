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

    errorMessage: {
        top: Dimensions.get('screen').height / 6.5,
        marginLeft: Dimensions.get('screen').width / 15,
        marginRight: Dimensions.get('screen').width / 15
    },

    input: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400),
        top: Dimensions.get('screen').height / 5.6,
        paddingBottom: Dimensions.get('screen').height / 5,
        gap: 13 * (Dimensions.get('screen').height / 1000)
    },

    genderAndBirthField: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 15
    },

    weightAndHeightField: {
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('screen').width / 1.5,
        gap: 15
    },

    buttonContainer: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400)
    },

    brownButtonContainer: {
        backgroundColor: '#6D4C41',
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 96 * (Dimensions.get('screen').width / 400),
        left: 0
    },

    brownButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: '#EFECCA'
    },

    greenButtonContainer: {
        backgroundColor: '#84CF3D',
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 101 * (Dimensions.get('screen').width / 400),
        right: 0
    },

    greenButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: '#4B4B4B'
    }
});

export default SignUpPageStyle;

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

    errorMessages: {
        marginTop: 55
    },

    errorMessage: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400)
    },

    container: {
        height: Dimensions.get('screen').height,
        display: 'flex',
        flexDirection: 'column'
    },

    contentContainer: {
        height: Dimensions.get('screen').height,
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },

    input: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400),
        gap: 13 * (Dimensions.get('screen').height / 1000)
    },

    buttonContainer: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    brownButtonContainer: {
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
        width: 163 * (Dimensions.get('screen').width / 400)
    },

    greenButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: '#4B4B4B'
    }
});

export default loginPageStyle;

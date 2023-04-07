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
        top: Dimensions.get('screen').height / 5.5,
        gap: 18
    }
});

export default SignUpPageStyle;

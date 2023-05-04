import { Dimensions, StyleSheet } from 'react-native';

const GamePageStyle = StyleSheet.create({
    background: {
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        paddingBottom: 90 * (Dimensions.get('screen').height / 900),
        width: Dimensions.get('screen').width,
        justifyContent: 'center'
    },

    text: {
        alignSelf: 'center',
        fontSize: 30
    }
});

export default GamePageStyle;

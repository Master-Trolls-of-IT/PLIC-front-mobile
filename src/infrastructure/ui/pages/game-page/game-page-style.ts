import { Dimensions, StyleSheet } from 'react-native';

const GamePageStyle = StyleSheet.create({
    background: {
        backgroundColor: '#EFECCA',
        height: '100%',
        width: Dimensions.get('screen').width,
        justifyContent: 'center'
    },

    text: {
        alignSelf: 'center',
        fontSize: 30
    }
});

export default GamePageStyle;

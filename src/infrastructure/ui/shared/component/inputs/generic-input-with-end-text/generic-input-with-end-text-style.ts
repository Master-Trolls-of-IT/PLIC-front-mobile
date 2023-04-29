import { Dimensions, StyleSheet } from 'react-native';

const GenericInputWithEndTextStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 4
    },

    title: {
        paddingLeft: 25,
        color: '#6D4C41',
        fontSize: 16 * (Dimensions.get('screen').height / 725)
    },

    border: {
        height: 43 * (Dimensions.get('screen').height / 900),
        paddingLeft: 35,
        paddingRight: 25,
        borderWidth: 2,
        borderColor: '#6D4C41',
        borderRadius: 20,
        backgroundColor: '#E3DEBE',
        fontSize: 14 * (Dimensions.get('screen').height / 725)
    },

    endText: {
        position: 'absolute',
        alignSelf: 'flex-end',
        fontSize: 14 * (Dimensions.get('screen').height / 725),
        paddingRight: 15,
        paddingTop: 2,
        color: '#6D4C41'
    }
});

export default GenericInputWithEndTextStyle;
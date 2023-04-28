import { Dimensions, StyleSheet } from 'react-native';

const GenericInputWithSearchIconStyle = StyleSheet.create({
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

    containerSearchIcon: {
        position: 'absolute',
        height: '100%',
        width: '10%',
        justifyContent: 'center',
        right: 2
    },

    searchIcon: {
        alignSelf: 'center'
    }
});

export default GenericInputWithSearchIconStyle;

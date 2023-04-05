import { Dimensions, StyleSheet } from 'react-native';

const GenericInputStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 4
    },

    title: {
        paddingLeft: 25,
        color: '#6D4C41',
        fontSize: 18 * (Dimensions.get('screen').height / 725)
    },

    border: {
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 343 * (Dimensions.get('screen').width / 400),
        paddingLeft: 35,
        paddingRight: 25,
        borderWidth: 2,
        borderColor: '#6D4C41',
        borderRadius: 20,
        backgroundColor: '#E3DEBE',
        fontSize: 14 * (Dimensions.get('screen').height / 725)
    },

    showTextIcon: {
        position: 'absolute',
        marginRight: 10,
        right: 0
    },

    statusIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 32 * (Dimensions.get('screen').height / 900),
        height: 43 * (Dimensions.get('screen').height / 900),
        marginLeft: 5
    },

    tooltip: {
        position: 'absolute',
        bottom: 35,
        left: -5
    }
});

export default GenericInputStyle;

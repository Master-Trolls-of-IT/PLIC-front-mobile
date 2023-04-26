import { Dimensions, StyleSheet } from 'react-native';

const GenericDropDownStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 3
    },

    title: {
        paddingLeft: 25,
        color: '#6D4C41',
        fontSize: 16 * (Dimensions.get('screen').height / 725)
    },

    border: {
        height: 43 * (Dimensions.get('screen').height / 900),
        borderWidth: 2,
        borderColor: '#6D4C41',
        borderRadius: 20,
        backgroundColor: '#E3DEBE',
        fontSize: 14 * (Dimensions.get('screen').height / 725),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height: 50,
        zIndex: 1
    },

    inputText: {
        flex: 2,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 14 * (Dimensions.get('screen').height / 725)
    },

    icon: {
        marginRight: 10,
        alignSelf: 'center'
    },

    dropdown: {
        position: 'absolute',
        marginTop: -2,
        borderWidth: 2,
        borderColor: '#6D4C41',
        borderRadius: 20,
        backgroundColor: '#E3DEBE'
    },

    overlay: {
        width: '100%',
        height: '100%'
    },

    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.3,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        bottom: -1,
        borderColor: '#6D4C41'
    },

    itemText: {
        fontSize: 12 * (Dimensions.get('screen').height / 725),
        color: '#6D4C41'
    }
});

export default GenericDropDownStyle;

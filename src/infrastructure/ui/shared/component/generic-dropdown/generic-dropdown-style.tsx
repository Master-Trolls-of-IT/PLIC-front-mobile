import { Dimensions, StyleSheet } from 'react-native';

const GenericDropDownStyle = StyleSheet.create({
    // Make the container fill the remaining space
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
        alignSelf: 'center'
    },
    icon: {
        marginRight: 10,
        alignSelf: 'center'
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5
    },
    overlay: {},
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1
    }
});

export default GenericDropDownStyle;

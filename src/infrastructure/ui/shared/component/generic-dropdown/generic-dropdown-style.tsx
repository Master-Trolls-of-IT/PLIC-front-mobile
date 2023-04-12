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
        borderWidth: 2,
        borderColor: '#6D4C41'
    },
    overlay: {},
    item: {
        height: 45 * (Dimensions.get('screen').height / 900),
        // width: 360 * (Dimensions.get('screen').width / 400),
        paddingLeft: 10,
        paddingTop: 5,
        borderWidth: 1,
        borderColor: '#6D4C41',
        backgroundColor: '#E3DEBE',
        fontSize: 14 * (Dimensions.get('screen').height / 725)
    }
});

export default GenericDropDownStyle;

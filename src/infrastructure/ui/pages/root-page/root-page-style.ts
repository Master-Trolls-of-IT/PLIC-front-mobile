import { Dimensions, StyleSheet } from 'react-native';

const RootPageStyle = StyleSheet.create({
    background: {
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        display: 'flex',
        flexDirection: 'column-reverse'
    },

    pageContainer: {
        flex: 7.5
    },

    footerContainer: {
        height: 90 * (Dimensions.get('screen').height / 900),
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },

    slideBar: {
        position: 'absolute',
        backgroundColor: '#84CF3D',
        width: Dimensions.get('screen').width / 5 - 24,
        height: 5,
        zIndex: 2
    },

    footerBrownContainer: {
        backgroundColor: '#6D4C41',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flex: 16
    },

    iconContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row'
    },

    iconButton: {
        width: Dimensions.get('screen').width / 5,
        justifyContent: 'center'
    },

    icon: {
        alignSelf: 'center'
    }
});

export default RootPageStyle;

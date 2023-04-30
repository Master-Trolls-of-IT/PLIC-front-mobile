import { Dimensions, StyleSheet } from 'react-native';

const AppContainerStyle = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        height: 90 * (Dimensions.get('screen').height / 900),
        display: 'flex',
        flexDirection: 'column',
        bottom: 0
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
        height: 90 * (Dimensions.get('screen').height / 900),
        bottom: 0
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

export default AppContainerStyle;

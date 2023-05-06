import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const AppContainerStyle = StyleSheet.create({
    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: ColorEnum.ClassicBeige,
        bottom: 0
    },

    slideBar: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicGreen,
        width: Dimensions.get('screen').width / 5 - 24,
        bottom: 90 * (Dimensions.get('screen').height / 900),
        height: 5,
        zIndex: 2
    },

    footerBrownContainer: {
        backgroundColor: ColorEnum.ClassicBrown,
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

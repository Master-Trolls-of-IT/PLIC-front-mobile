import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const SettingsPageStyle = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        display: 'flex',
        flexDirection: 'column'
    },

    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
    },

    tree: {
        position: 'absolute',
        bottom: 0,
        right: -15
    },

    contentContainer: {
        height: '40%',
        marginTop: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    headerContainer: {
        marginLeft: '10%'
    },

    links: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
        padding: 25,
        gap: 11
    },

    link: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    touchableLink: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    linkText: {
        fontSize: 18 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    }
});

export default SettingsPageStyle;

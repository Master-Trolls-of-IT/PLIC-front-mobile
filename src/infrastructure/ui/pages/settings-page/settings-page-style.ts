import {Dimensions, StyleSheet} from 'react-native';
import {ColorEnum} from '~/domain/interfaces/enum/color-enum';

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

    deleteAccount1Container: {},
    deleteAccount1: {},

    deleteAccount1TextContainer: {
        marginTop: 10,
        paddingTop: 10,
        marginBottom: 10,
        borderTopColor: ColorEnum.VeryOpaqueBrown,
        borderTopWidth: 1
    },
    deleteAccount1Text: {
        fontWeight: 'bold',
        color: ColorEnum.ClassicBrown,
    },
    deleteAccount2Container: {},

    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,

    },
    goBackButtonStyle: {
        backgroundColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        width: 'auto',
        height: 45
    },
    goBackButtonTextStyle: {
        color: ColorEnum.ClassicBeige,
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 20,
        marginRight: 20
    },

    confirmButtonStyle: {
        backgroundColor: ColorEnum.ClassicRedIcon,
        borderRadius: 20,
        width: 'auto',
        height: 45
    },
    confirmButtonTextStyle: {
        color: ColorEnum.ClassicGrey,
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 20,
        marginRight: 20
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

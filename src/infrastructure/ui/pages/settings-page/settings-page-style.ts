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

    deletePasswordTextContainer: {
        marginVertical: 10,
        paddingTop: 10,
        borderTopColor: ColorEnum.VeryOpaqueBrown,
        borderTopWidth: 1
    },

    deletePasswordText: {
        color: ColorEnum.ClassicBrown
    },

    errorMessage: {
        margin: 5
    },

    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    goBackButtonStyle: {
        backgroundColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        width: (117 * Dimensions.get('screen').width) / 400,
        height: 45
    },

    goBackButtonTextStyle: {
        color: ColorEnum.ClassicBeige,
        fontSize: 18
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
        marginHorizontal: 20
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

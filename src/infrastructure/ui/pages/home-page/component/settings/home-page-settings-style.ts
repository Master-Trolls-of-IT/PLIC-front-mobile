import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const HomePageSettingsStyle = StyleSheet.create({
    settingsModal: {
        flex: 1
    },

    header: {
        margin: 5,
        padding: 13,
        borderBottomWidth: 0.3,
        borderBottomColor: ColorEnum.ClassicBrown
    },

    title: {
        fontSize: 22 * (Dimensions.get('screen').height / 725),
        alignSelf: 'center',
        textAlign: 'center',
        color: ColorEnum.ClassicBrown
    },

    exit: {
        position: 'absolute',
        top: 17,
        right: 17,
        fontSize: 18 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        gap: 10
    },

    firstLine: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    profilePicture: {
        alignSelf: 'center'
    },

    profilePictureEdit: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    nameAndBirth: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },

    secondLine: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },

    footer: {
        display: 'flex',
        flexDirection: 'column',
        borderTopWidth: 0.3,
        borderTopColor: ColorEnum.ClassicBrown,
        padding: 15,
        gap: 10
    },

    footerText: {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 20 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    },

    footerLink: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default HomePageSettingsStyle;

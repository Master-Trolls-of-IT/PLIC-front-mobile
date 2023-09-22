import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const PersonalDataPageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },

    tree: {
        position: 'absolute',
        bottom: 0,
        right: -15,
        opacity: 0.7
    },

    headerContainer: {
        marginLeft: '10%'
    },

    container: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        display: 'flex',
        flexDirection: 'column'
    },

    content: {
        display: 'flex',
        flexDirection: 'column',

        padding: 20,
        gap: 10,
        marginTop: 20
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

    contentContainer: {
        height: '40%',
        marginTop: '20%',
        display: 'flex',
        flexDirection: 'column'
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },

    modalTextButton: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBeige
    },

    modalButton: {
        backgroundColor: ColorEnum.ClassicBrown,
        width: 110 * (Dimensions.get('screen').width / 400),
        height: 40 * (Dimensions.get('screen').height / 900),
        marginTop: 20,
        padding: 3,
        alignSelf: 'center',
        borderRadius: 20
    }
});

export default PersonalDataPageStyle;

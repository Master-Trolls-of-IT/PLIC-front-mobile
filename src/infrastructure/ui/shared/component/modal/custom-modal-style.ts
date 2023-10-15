import { StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const CustomModalStyle = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: ColorEnum.VeryOpaqueGrey,
        justifyContent: 'center'
    },

    modalView: {
        padding: 15,
        paddingLeft: 45,
        paddingRight: 45,
        alignSelf: 'center',
        backgroundColor: ColorEnum.ClassicDarkBeige,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: ColorEnum.ClassicBrown
    },

    customModalView: {
        padding: 15,
        alignSelf: 'center',
        backgroundColor: ColorEnum.ClassicDarkBeige,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: ColorEnum.ClassicBrown
    },

    title: {
        alignSelf: 'center',
        fontSize: 24,
        textAlign: 'center',
        color: ColorEnum.ClassicBrown
    },

    wrongAsset: {
        position: 'absolute',
        right: 5,
        top: 5
    }
});

export default CustomModalStyle;

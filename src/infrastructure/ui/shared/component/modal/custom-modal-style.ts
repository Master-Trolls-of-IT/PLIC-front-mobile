import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const CustomModalStyle = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: ColorEnum.VeryOpaqueGrey,
        justifyContent: 'center'
    },

    modalView: {
        width: 0.8 * Dimensions.get('screen').width,
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
    }
});

export default CustomModalStyle;

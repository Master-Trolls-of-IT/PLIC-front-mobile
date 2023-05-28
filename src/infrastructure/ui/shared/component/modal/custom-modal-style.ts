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
        width: Dimensions.get('screen').width * 0.8,
        padding: 20,
        alignSelf: 'center',
        backgroundColor: ColorEnum.ClassicDarkBeige,
        borderRadius: 20,
        gap: 10
    }
});

export default CustomModalStyle;

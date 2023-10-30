import { StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const CustomModalWithHeaderStyle = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: ColorEnum.VeryOpaqueGrey,
        justifyContent: 'center'
    },

    modalView: {
        padding: 10,
        alignSelf: 'center',
        backgroundColor: ColorEnum.ClassicDarkBeige,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: ColorEnum.ClassicBrown
    },

    title: {
        alignSelf: 'center',
        textAlign: 'center',
        color: ColorEnum.ClassicBrown
    },

    wrongAsset: {
        position: 'absolute',
        right: 5,
        top: 5
    },

    childrenContainer: {
        borderTopWidth: 1,
        borderTopColor: ColorEnum.ClassicBrown,
        marginTop: 8,
        marginHorizontal: 5
    }
});

export default CustomModalWithHeaderStyle;

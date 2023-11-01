import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const ModalAddQuantityStyle = StyleSheet.create({
    customModalChildren: {
        paddingTop: 10
    },

    quantityModalButtonContainer: {
        marginTop: 10,
        backgroundColor: ColorEnum.ClassicGreen,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 202 * (Dimensions.get('screen').width / 400)
    },

    quantityModalButtonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.SlightlyOpaqueGrey
    }
});

export default ModalAddQuantityStyle;

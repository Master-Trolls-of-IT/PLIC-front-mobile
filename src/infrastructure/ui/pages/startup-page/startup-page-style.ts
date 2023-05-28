import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const StartUpPageStyle = StyleSheet.create({
    container: {
        backgroundColor: ColorEnum.ClassicBeige,
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
    },

    modalText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        textAlign: 'left',
        color: ColorEnum.ClassicGrey
    },

    modalTextButton: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBeige
    },

    modalButton: {
        backgroundColor: ColorEnum.ClassicBrown,
        marginTop: 20,
        padding: 3,
        alignItems: 'center',
        borderRadius: 12
    }
});

export default StartUpPageStyle;

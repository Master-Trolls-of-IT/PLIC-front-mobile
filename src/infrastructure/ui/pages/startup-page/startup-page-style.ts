import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const StartUpPageStyle = StyleSheet.create({
    container: {
        backgroundColor: ColorEnum.ClassicBeige,
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
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

export default StartUpPageStyle;

import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GenericInputWithEndTextStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 4
    },

    title: {
        paddingLeft: 25,
        color: ColorEnum.ClassicBrown,
        fontSize: 16 * (Dimensions.get('screen').height / 725)
    },

    border: {
        height: 43 * (Dimensions.get('screen').height / 900),
        paddingLeft: 35,
        paddingRight: 25,
        borderWidth: 2,
        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        backgroundColor: ColorEnum.ClassicDarkBeige,
        fontSize: 14 * (Dimensions.get('screen').height / 725)
    },

    endText: {
        position: 'absolute',
        alignSelf: 'flex-end',
        fontSize: 14 * (Dimensions.get('screen').height / 725),
        paddingRight: 15,
        paddingTop: 2,
        color: ColorEnum.ClassicBrown
    }
});

export default GenericInputWithEndTextStyle;

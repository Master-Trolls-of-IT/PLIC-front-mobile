import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GenericInputStyle = StyleSheet.create({
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

    showTextIcon: {
        position: 'absolute',
        marginRight: 10,
        right: 0
    },

    statusIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 32 * (Dimensions.get('screen').height / 900),
        height: 43 * (Dimensions.get('screen').height / 900),
        marginLeft: 5
    },

    tooltip: {
        position: 'absolute',
        bottom: 35,
        left: -5
    }
});

export default GenericInputStyle;

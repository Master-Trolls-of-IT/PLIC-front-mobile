import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const WidgetSlotStyle = StyleSheet.create({
    slot: {
        height: Dimensions.get('screen').width * 0.4,
        width: Dimensions.get('screen').width * 0.4,
        borderRadius: 20,
        margin: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    firstBlock: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderTopWidth: 4, // Épaisseur de la bordure
        borderLeftWidth: 4, // Épaisseur de la bordure
        borderColor: ColorEnum.ClassicBrown, // Couleur de la bordure
        width: 33, // Longueur de la bordure dans le coin
        height: 33,
        borderTopLeftRadius: 20
    },

    secondBlock: {
        position: 'absolute',
        top: 0,
        right: 0,
        borderTopWidth: 4, // Épaisseur de la bordure
        borderRightWidth: 4, // Épaisseur de la bordure
        borderColor: ColorEnum.ClassicBrown, // Couleur de la bordure
        width: 33, // Longueur de la bordure dans le coin
        height: 33,
        borderTopRightRadius: 20
    },

    thirdBlock: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        borderBottomWidth: 4, // Épaisseur de la bordure
        borderLeftWidth: 4, // Épaisseur de la bordure
        borderColor: ColorEnum.ClassicBrown, // Couleur de la bordure
        width: 33, // Longueur de la bordure dans le coin
        height: 33,
        borderBottomLeftRadius: 20
    },

    fourthBlock: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderBottomWidth: 4, // Épaisseur de la bordure
        borderRightWidth: 4, // Épaisseur de la bordure
        borderColor: ColorEnum.ClassicBrown, // Couleur de la bordure
        width: 33, // Longueur de la bordure dans le coin
        height: 33,
        borderBottomRightRadius: 20
    }
});

export default WidgetSlotStyle;

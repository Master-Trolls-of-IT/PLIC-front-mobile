import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const MealPageStyle = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    background: {
        backgroundColor: ColorEnum.ClassicBeige,
        height: '100%',
        width: Dimensions.get('screen').width,
        position: 'absolute'
    },

    headerContainer: {
        marginTop: '28%',
        marginLeft: '10%'
    },

    text: {
        alignSelf: 'center',
        fontSize: 30
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 14,
        right: 10,
        backgroundColor: ColorEnum.ClassicGreen,
        borderRadius: 20,
        width: 158 * (Dimensions.get('screen').width / 400),
        height: 45
    },

    buttonText: {
        color: ColorEnum.ClassicGrey,
        fontSize: 18
    }
});

export default MealPageStyle;

import { StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const MealItemStyle = StyleSheet.create({
    item: {
        width: '95%',
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        marginTop: 5,
        padding: 5,
        borderRadius: 20,
        alignSelf: 'center'
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    image: {
        width: 110,
        height: 110
    },

    imageContainer: {
        height: 110,
        width: '35%',
        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center'
    },
    textField: {
        width: ' 60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        borderWidth: 2
    },

    titleField: {},
    textContainer: {}
});

export default MealItemStyle;

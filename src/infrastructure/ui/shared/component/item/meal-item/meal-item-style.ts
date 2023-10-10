import { StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const MealItemStyle = StyleSheet.create({
    item: {
        width: '95%',
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        marginBottom: 10,
        padding: 5,
        borderRadius: 20,
        alignSelf: 'center'
    },

    container: {
        display: 'flex',
        flexDirection: 'row'
    },

    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        width: '30%'
    },

    textField: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column'
    },

    title: {
        fontSize: 18,
        color: ColorEnum.ClassicBlack,
        marginTop: 3
    },

    favourite: { width: '10%', height: '50%' },

    productCount: {
        fontSize: 14
    },

    secondText: {
        display: 'flex',
        flexDirection: 'row'
    },

    ingredients: {
        fontSize: 12,
        color: ColorEnum.SlightlyOpaqueGrey,
        flexWrap: 'wrap',
        maxWidth: '80%'
    },

    mealTags: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxWidth: '90%' },
    mealType: { fontSize: 12, color: ColorEnum.ClassicBrown },
    mealDiet: { fontSize: 12, color: ColorEnum.ClassicDarkGreen },
    score: { fontSize: 14, color: ColorEnum.ClassicDarkGreen }
});

export default MealItemStyle;

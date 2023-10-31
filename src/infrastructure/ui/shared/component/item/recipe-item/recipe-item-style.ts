import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const RecipeItemStyle = StyleSheet.create({
    item: {
        width: '95%',
        minHeight: 134,
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        marginBottom: 10,
        padding: 5,
        borderRadius: 20,
        alignSelf: 'center'
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 164,
        marginBottom: 0
    },

    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 115,
        margin: 10
    },

    textField: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 0
    },

    title: {
        fontSize: 24,
        color: ColorEnum.ClassicGrey,
        marginTop: 3,
        marginBottom: 5,
        flexWrap: 'wrap',
        maxWidth: '90%',
        textTransform: 'uppercase'
    },

    favourite: {
        height: '100%'
    },

    productCount: {
        fontSize: 14
    },

    secondText: {
        color: ColorEnum.ClassicGrey,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 3
    },

    ingredients: {
        fontSize: 12,
        color: ColorEnum.SlightlyOpaqueGrey,
        flexWrap: 'wrap',
        maxWidth: '80%'
    },

    mealTags: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 14,
        marginTop: -25,
        margin: 5
    },
    authorContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
        width: '40%'
    },

    image: {
        width: 115,
        height: 115,
        borderRadius: 20,
        borderColor: ColorEnum.ClassicBrown,
        borderWidth: 2
    },

    score: {
        fontSize: 14
    },

    consumeButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        borderRadius: 20,
        width: 223 * (Dimensions.get('screen').width / 400),
        height: 43
    },

    buttonText: {
        fontSize: 18,
        color: ColorEnum.ClassicGrey
    },

    expandedSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    }
});

export default RecipeItemStyle;

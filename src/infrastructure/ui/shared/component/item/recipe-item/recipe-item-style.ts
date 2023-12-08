import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const RecipeItemStyle = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },

    item: {
        width: '95%',
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        marginBottom: 10,
        padding: 5,
        borderRadius: 20,
        alignSelf: 'center'
    },

    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5
    },

    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textField: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 5
    },

    title: {
        fontSize: 18,
        color: ColorEnum.ClassicGrey
    },

    star: {
        marginTop: 1
    },

    favourite: {
        marginTop: 4,
        marginLeft: 3,
        fontSize: 14,
        height: '100%'
    },

    productCount: {
        fontSize: 14
    },

    secondText: {
        color: ColorEnum.ClassicGrey,
        display: 'flex',
        flexDirection: 'row'
    },

    ingredients: {
        fontSize: 12,
        marginTop: 5,
        color: ColorEnum.SlightlyOpaqueGrey,
        flexWrap: 'wrap',
        maxWidth: '90%'
    },

    mealTags: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 14,
        marginRight: 5
    },

    bottomContainer: {
        width: '95%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    authorContainer: {
        display: 'flex',
        flexDirection: 'row'
    },

    authorContainerText: {
        alignSelf: 'center'
    },

    image: {
        width: 100,
        height: 100,
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

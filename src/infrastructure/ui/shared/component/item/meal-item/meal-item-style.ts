import { Dimensions, StyleSheet } from 'react-native';
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
        color: ColorEnum.ClassicGrey,
        marginTop: 3
    },

    favourite: {
        width: '10%',
        height: '50%'
    },

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

    mealTags: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '90%',
        fontSize: 12,
        marginTop: 5
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
    },

    textDeleteModalContainer: {
        marginTop: 8,
        color: ColorEnum.ClassicBrown,
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        textAlign: 'justify',
        marginBottom: 5
    },

    buttonDeleteModalContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 5
    },

    deleteModalCancelButtonContainer: {
        backgroundColor: ColorEnum.ClassicBrown,
        width: 117 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400)
    },

    brownButtonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBeige
    },

    deleteModalValidateButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        width: 95 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400)
    },

    greenButtonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicGrey
    },

    redDeleteText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicRedWidget
    },

    validateModalContainer: {
        width: 0.72 * Dimensions.get('screen').width
    }
});

export default MealItemStyle;

import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const MealProductsItemStyle = StyleSheet.create({
    item: {
        width: '95%',
        paddingTop: 5,
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        marginBottom: 10,
        borderRadius: 20,
        alignSelf: 'center'
    },

    container: {
        height: '100%',
        width: '100%'
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '95%',
        alignSelf: 'center',
        paddingTop: 10,
        paddingLeft: 5
    },

    imageContainer: {
        borderColor: ColorEnum.ClassicBrown,
        width: '35%',
        height: 70,
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        textAlign: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },

    imageText: {
        fontSize: 16,
        color: ColorEnum.ClassicBrown,
        textAlign: 'center'
    },

    titleField: {
        display: 'flex',
        flexDirection: 'column',
        width: '37%',
        left: 8
    },

    title: {
        fontSize: 16,
        textAlign: 'center',
        color: ColorEnum.ClassicBrown,
        marginTop: 3
    },

    description: {
        fontSize: 14,
        textAlign: 'center',
        flexWrap: 'wrap',
        color: ColorEnum.ClassicBrown,
        marginTop: 3
    },

    scoreField: {
        display: 'flex',
        flexDirection: 'row',
        width: '20%'
    },

    bar: {
        transform: [{ rotateZ: '-90deg' }],
        borderWidth: 0,
        left: -10,
        top: 0.035 * Dimensions.get('screen').height,
        borderLeftWidth: 3
    },

    score: {
        fontSize: 24,
        fontWeight: 'bold',
        right: 20,
        color: ColorEnum.VeryOpaqueGrey,
        alignSelf: 'center'
    },

    quantityContainer: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 10
    },

    quantityTitleContainer: {
        borderBottomColor: ColorEnum.ClassicBrown,
        borderBottomWidth: 1
    },

    quantityTitle: {
        fontSize: 15,
        color: ColorEnum.ClassicBrown,
        paddingBottom: 6,
        width: '100%',
        fontWeight: 'bold'
    },

    editButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        width: 329 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400),
        marginTop: 10,
        alignSelf: 'center'
    },

    deleteButtonContainer: {
        backgroundColor: ColorEnum.ClassicRedIcon,
        width: 329 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400),
        marginTop: 10,
        alignSelf: 'center'
    },

    buttonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicGrey
    }
});

export default MealProductsItemStyle;

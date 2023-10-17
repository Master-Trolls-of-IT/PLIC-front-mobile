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
    },

    quantityModalButtonContainer: {
        marginTop: 10,
        backgroundColor: ColorEnum.ClassicGreen,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 202 * (Dimensions.get('screen').width / 400)
    },

    quantityModalButtonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.SlightlyOpaqueGrey
    },

    customModalChildren: {
        paddingTop: 10
    },

    deleteModalContainer: {
        width: 0.72 * Dimensions.get('screen').width
    },

    textDeleteModalContainer: {
        marginTop: 8,
        color: ColorEnum.ClassicBrown,
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        textAlign: 'justify'
    },

    buttonDeleteModalContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 5
    },

    brownButtonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBeige
    },

    greenButtonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicGrey
    },

    deleteModalCancelButtonContainer: {
        backgroundColor: ColorEnum.ClassicBrown,
        width: 117 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400)
    },

    deleteModalValidateButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        width: 95 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400)
    }
});

export default MealProductsItemStyle;

import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
const RecipeItemStyle = StyleSheet.create({
    recipeModal: {
        position: 'absolute',
        width: '102%',
        alignSelf: 'center',
        backgroundColor: ColorEnum.ClassicBeige,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 2,
        borderColor: ColorEnum.ClassicBrown,
        borderBottomWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 10,
        maxHeight: 500 * (Dimensions.get('screen').height / 725)
    },

    favourite: {
        position: 'absolute',
        right: 20,
        top: 10
    },

    scrollLine: {
        alignSelf: 'center'
    },

    headerContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'center',
        gap: 10
    },

    contentContainer: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        borderTopWidth: 1,
        borderColor: ColorEnum.ClassicBrown,
        alignSelf: 'center',
        marginTop: 5
    },

    reviewText: {
        alignSelf: 'center',
        marginLeft: 3,
        fontSize: 14,
        color: ColorEnum.ClassicGrey
    },

    ingredientsHeader: {
        marginHorizontal: 10,
        marginTop: 10
    },

    ingredientsContent: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 3,
        paddingTop: 8,
        borderTopWidth: 1,
        borderColor: ColorEnum.ClassicBrown
    },

    preperationContent: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 3,
        paddingTop: 8,
        borderTopWidth: 1,
        borderColor: ColorEnum.ClassicBrown
    },

    preperationHeader: {
        marginHorizontal: 10,
        marginTop: 20
    },

    ingredientsText: {
        color: ColorEnum.ClassicBrown,
        fontSize: 16 * (Dimensions.get('screen').height / 725)
    },

    preperationText: {
        color: ColorEnum.ClassicBrown,
        fontSize: 16 * (Dimensions.get('screen').height / 725)
    },

    authorText: {
        marginLeft: 4,
        alignSelf: 'center',
        color: ColorEnum.ClassicGrey,
        fontSize: 12 * (Dimensions.get('screen').height / 725)
    },

    ingredients: {
        lineHeight: 24,
        color: ColorEnum.ClassicBrown,
        fontSize: 14 * (Dimensions.get('screen').height / 725)
    },

    userReviewContainer1: {
        alignItems: 'baseline'
    },

    userReviewContainer2: {
        marginLeft: 10,
        borderBottomWidth: 2,
        borderColor: ColorEnum.ClassicGrey
    },

    userReview: {
        color: ColorEnum.ClassicGrey,
        fontSize: 12 * (Dimensions.get('screen').height / 725),
        marginTop: 10
    },

    imageContainer: {
        justifyContent: 'center',
        marginLeft: 10
    },

    image: {
        width: 105,
        height: 105,
        borderRadius: 20,
        borderColor: ColorEnum.ClassicBrown,
        borderWidth: 2
    },

    imageText: {
        fontSize: 16,
        color: ColorEnum.ClassicBrown,
        alignSelf: 'center'
    },

    headerTextContainer: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    brandText: {
        fontSize: 20 * (Dimensions.get('screen').height / 900),
        textAlign: 'center',
        color: ColorEnum.ClassicBrown
    },

    nameText: {
        marginTop: 5,
        fontSize: 18 * (Dimensions.get('screen').height / 900),
        textAlign: 'center',
        color: ColorEnum.ClassicBrown
    },

    score: {
        alignSelf: 'center',
        fontSize: 12 * (Dimensions.get('screen').height / 725)
    },

    nutriscoreContainer: {
        alignSelf: 'center',
        width: '45%'
    },

    ecoScoreContainer: {
        alignSelf: 'center',
        width: '45%'
    },

    ecoScoreText: {
        fontSize: 20,
        textAlign: 'center',
        color: ColorEnum.ClassicBrown
    },

    myIntakesContainer: {
        width: '95%',
        alignSelf: 'center',
        marginBottom: 15
    },

    myIntakesTitleContainer: {
        borderBottomColor: ColorEnum.ClassicBrown,
        borderBottomWidth: 1
    },

    myIntakesTitle: {
        fontSize: 18,
        color: ColorEnum.ClassicBrown,
        paddingBottom: 8,
        width: '100%'
    },

    myIntakesNutrientsContainer: {
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },

    itemLine: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemLineContent: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 6 * (Dimensions.get('screen').height / 400),
        color: ColorEnum.ClassicBrown
    },

    itemSameLineContent: {
        fontSize: 18,
        marginLeft: 5,
        color: ColorEnum.ClassicBrown
    },

    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 43 * (Dimensions.get('screen').width / 400),
        marginVertical: 10
    },

    buttonText: {
        fontSize: 18,
        alignSelf: 'center',
        color: ColorEnum.ClassicGrey
    },

    buttonTextModal: {
        fontSize: 18
    },

    customModalChildren: {
        paddingTop: 10
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

    descriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        marginRight: 10
    },

    title: {
        fontSize: 18,
        color: ColorEnum.ClassicGrey
    },

    review: {
        marginLeft: -2,
        marginTop: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    star: {
        marginTop: -1
    },

    mealTags: {
        marginTop: 4,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '90%',
        fontSize: 16
    },

    authorAndScoreContainer: {
        marginTop: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    author: {
        display: 'flex',
        flexDirection: 'row'
    }
});
export default RecipeItemStyle;

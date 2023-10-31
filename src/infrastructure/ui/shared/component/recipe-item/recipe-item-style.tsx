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
        borderWidth: 4,
        borderColor: ColorEnum.ClassicBrown,
        borderBottomWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 30,
        maxHeight: 600 * (Dimensions.get('screen').height / 725)
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
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
        alignSelf: 'center',
        gap: 10
    },
    contentContainer: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        borderTopWidth: 2,
        borderColor: ColorEnum.ClassicBrown,
        alignSelf: 'center',
        marginTop: 5
    },
    reviewText: {
        fontSize: 11,
        color: ColorEnum.ClassicGrey
    },
    ingredientsContainer: {},
    ingredientsHeader: {
        marginHorizontal: 10,
        marginTop: 10
    },
    ingredientsContent: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 3,
        paddingTop: 8,
        borderTopWidth: 2,
        borderColor: ColorEnum.ClassicBrown
    },
    preperationContent: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 3,
        paddingTop: 8,
        borderTopWidth: 2,
        borderColor: ColorEnum.ClassicBrown,
        height: '100%'
    },
    preperationContainer: {},
    preperationHeader: {
        marginHorizontal: 10,
        marginTop: 10
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
        color: ColorEnum.ClassicGrey,
        fontSize: 12 * (Dimensions.get('screen').height / 725)
    },
    ingredients: {
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
        borderColor: ColorEnum.ClassicBrown,
        width: 140,
        height: 90,
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        marginLeft: 10
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12
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

    scoreContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
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
        width: '100%',
        height: 43 * (Dimensions.get('screen').width / 400)
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
    titleContainer: {},
    title: {
        fontSize: 18,
        color: ColorEnum.ClassicGrey,
        marginTop: 4,
        marginLeft: 4
    },
    review: {
        marginHorizontal: 4,
        marginTop: 4
    },
    mealTags: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '90%',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 4
    },
    authorAndScoreContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 4,
        marginTop: 4
    },
    author: {},
    score: {}
});
export default RecipeItemStyle;

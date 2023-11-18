import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const CreateRecipePageStyle = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    durationAndDifficultyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignSelf: 'center'
    },

    ingredientsContent: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 3,
        paddingTop: 8
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

    errorMessage: {
        width: '90%',
        marginLeft: 20,
        marginTop: 3
    },

    inputTitle: {
        width: '60%',
        marginLeft: 15,
        marginTop: Dimensions.get('screen').height * 0.02
    },

    inputDuration: {
        width: '40%',
        marginLeft: 15,
        marginTop: Dimensions.get('screen').height * 0.02
    },
    inputDifficulty: {
        width: '40%',
        marginLeft: 15,
        marginTop: Dimensions.get('screen').height * 0.02
    },

    tagsTitle: {
        color: ColorEnum.ClassicBrown,
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        marginLeft: Dimensions.get('screen').width * 0.1,
        marginTop: Dimensions.get('screen').height * 0.02
    },

    tagsContainer: {
        borderTopColor: ColorEnum.ClassicBrown,
        borderTopWidth: 1,
        marginTop: 5,
        width: '92%',
        alignSelf: 'center'
    },

    ingredientTitle: {
        color: ColorEnum.ClassicBrown,
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        marginLeft: Dimensions.get('screen').width * 0.1,
        marginTop: Dimensions.get('screen').height * 0.02
    },

    ingredientTitleHairLine: {
        borderTopWidth: 1,
        borderTopColor: ColorEnum.ClassicBrown,
        marginTop: 3,
        alignSelf: 'center',
        width: '92%'
    },

    scanButtonContainer: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBrown,
        width: 201 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400),
        bottom: 10,
        left: 12
    },

    brownButtonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBeige
    },

    validateButtonContainer: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicGreen,
        width: 95 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400),
        bottom: 10,
        right: 12
    },

    greenButtonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicGrey
    },

    validateModalContainer: {
        width: 0.72 * Dimensions.get('screen').width
    },

    textValidateModalContainer: {
        marginTop: 8,
        color: ColorEnum.ClassicBrown,
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        textAlign: 'justify'
    },

    buttonValidateModalContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 5
    },

    cancelValidateModalButtonContainer: {
        backgroundColor: ColorEnum.ClassicBrown,
        width: 117 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400)
    },

    validateModalButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        width: 95 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400)
    },

    tags: {
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 6,
        borderRadius: 10
    },

    tagsModalContainer: {
        width: 0.82 * Dimensions.get('screen').width
    },

    tagsModalText: {
        marginTop: 15,
        textAlign: 'justify',
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    },

    ingredientModalText: {
        marginHorizontal: 5,
        textAlign: 'justify',
        fontSize: 13 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    },

    inputContainer: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 5
    },

    plusContainer: {
        marginTop: 10,
        justifyContent: 'center'
    },

    plus: {
        alignSelf: 'center'
    },

    modalTagsScrollViewContainer: {
        marginTop: 8,
        height: 0.15 * Dimensions.get('screen').height
    },

    modalTagsContainer: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },

    validateButtonTagsModalContainer: {
        marginTop: 10,
        backgroundColor: ColorEnum.ClassicGreen,
        width: 95 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400)
    },

    validateButtonTextTagsModal: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicGrey
    },

    footerTagsModalContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    footerTagsModalText: {
        marginTop: 5,
        textAlign: 'justify',
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    }
});

export default CreateRecipePageStyle;

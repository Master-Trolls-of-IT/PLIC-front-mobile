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
        marginTop: Dimensions.get('screen').height * 0.02,
        borderBottomColor: ColorEnum.ClassicBrown,
        borderBottomWidth: 1
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
    }
});

export default CreateRecipePageStyle;

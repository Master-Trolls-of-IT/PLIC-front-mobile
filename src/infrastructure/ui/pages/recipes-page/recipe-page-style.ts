import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const RecipePageStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },

    recipeContainer: {
        alignItems: 'center',
        marginBottom: 100
    },

    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 16
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    ingredients: {
        fontSize: 16
    },

    background: {
        backgroundColor: ColorEnum.ClassicBeige,
        height: '100%',
        width: Dimensions.get('screen').width,
        position: 'absolute',
        zIndex: -1
    },

    headerContainer: {
        marginTop: '20%',
        marginLeft: '10%'
    },

    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    brownButtonContainer: {
        backgroundColor: ColorEnum.ClassicBrown,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 123 * (Dimensions.get('screen').width / 400)
    },

    brownButtonText: {
        fontSize: 16,
        color: ColorEnum.ClassicBeige
    },

    greenButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 163 * (Dimensions.get('screen').width / 400)
    },

    greenButtonText: {
        fontSize: 16,
        color: ColorEnum.SlightlyOpaqueGrey
    }
});

export default RecipePageStyle;

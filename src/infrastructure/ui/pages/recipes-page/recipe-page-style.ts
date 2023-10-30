import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const RecipePageStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorEnum.ClassicBeige,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },

    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: -120,
        marginLeft: -100
    },

    recipeItem: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 16,
        marginBottom: 16,
        width: '100%',
        maxWidth: 400,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    ingredients: {
        fontSize: 16
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

    buttonContainer: {
        position: 'absolute',
        bottom: 14,
        right: 10,
        backgroundColor: ColorEnum.ClassicGreen,
        borderRadius: 20,
        width: 158 * (Dimensions.get('screen').width / 400),
        height: 45
    },

    buttonText: {
        color: ColorEnum.ClassicGrey,
        fontSize: 18
    }
});

export default RecipePageStyle;

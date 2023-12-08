import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const RecipePageStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },

    background: {
        backgroundColor: ColorEnum.ClassicBeige,
        height: '100%',
        width: Dimensions.get('screen').width,
        position: 'absolute'
    },

    header: {
        marginTop: '33%',
        marginLeft: '10%'
    },

    title: {
        fontSize: 18,
        textTransform: 'uppercase'
    },

    ingredients: {
        fontSize: 16
    },

    headerContainer: {
        marginTop: '20%',
        marginLeft: '10%'
    },

    buttonContainer: {
        position: 'absolute',
        width: '95%',
        bottom: 14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },

    brownButtonContainer: {
        backgroundColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        width: 144 * (Dimensions.get('screen').width / 400),
        height: 45
    },

    brownButtonText: {
        fontSize: 18,
        color: ColorEnum.ClassicBeige
    },

    greenButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        borderRadius: 20,
        width: 185 * (Dimensions.get('screen').width / 400),
        height: 45
    },

    greenButtonText: {
        color: ColorEnum.ClassicGrey,
        fontSize: 18
    }
});

export default RecipePageStyle;

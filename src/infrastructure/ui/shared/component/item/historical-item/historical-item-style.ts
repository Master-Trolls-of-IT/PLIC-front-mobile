import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const HistoricalItemStyle = StyleSheet.create({
    item: {
        width: '95%',
        paddingTop: 5,
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 12
    },

    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '95%',
        alignSelf: 'center',
        marginTop: -4
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

    favourite: {
        paddingLeft: 5,
        width: '10%',
        height: '50%',
        alignSelf: 'center'
    },

    myIntakesContainer: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 10
    },

    myIntakesTitleContainer: {
        borderBottomColor: ColorEnum.ClassicBrown,
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    myIntakesTitle: {
        fontSize: 18,
        color: ColorEnum.ClassicBrown,
        paddingBottom: 6,
        width: '100%',
        fontWeight: 'bold'
    },

    myIntakesNutrientsContainer: {
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
        fontSize: 16,
        marginLeft: 5,
        marginTop: 5 * (Dimensions.get('screen').height / 400),
        color: ColorEnum.ClassicBrown
    },

    itemSameLineContent: {
        fontSize: 16,
        marginLeft: 5,
        color: ColorEnum.ClassicBrown
    },

    contentLine: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    lineContent: {
        fontSize: 16,
        margin: 3,
        color: ColorEnum.ClassicBrown
    },

    addButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        width: 329 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400),
        marginTop: 10,
        alignSelf: 'center'
    },

    addButtonText: {
        fontSize: 18
    }
});

export default HistoricalItemStyle;

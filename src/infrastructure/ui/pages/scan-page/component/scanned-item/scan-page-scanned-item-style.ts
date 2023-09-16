import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const ScanPageScannedItemStyle = StyleSheet.create({
    scanModal: {
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
        height: '82%'
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
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    imageContainer: {
        borderColor: ColorEnum.ClassicBrown,
        width: '45%',
        height: '100%',
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center'
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
        height: '20%',
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
        marginTop: 12
    },

    myIntakesTitleContainer: {
        borderBottomColor: ColorEnum.ClassicBrown,
        borderBottomWidth: StyleSheet.hairlineWidth
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
        backgroundColor: ColorEnum.ClassicGreen,
        width: 329 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400),
        marginTop: 8,
        padding: 10,
        alignSelf: 'center'
    },

    buttonText: {
        fontSize: 18
    },

    buttonContainerModale: {
        backgroundColor: ColorEnum.ClassicGreen,
        width: 115 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400),
        marginTop: 8,
        padding: 10,
        alignSelf: 'center'
    },

    buttonTextModale: {
        fontSize: 18
    }
});

export default ScanPageScannedItemStyle;

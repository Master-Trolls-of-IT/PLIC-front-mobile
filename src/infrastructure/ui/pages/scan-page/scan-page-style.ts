import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const ScanPageStyle = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height - 90 * (Dimensions.get('screen').height / 900),
        display: 'flex',
        flexDirection: 'column'
    },

    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: '250%',
        width: Dimensions.get('screen').width
    },

    headerContainer: {
        marginTop: '20%',
        marginLeft: '10%'
    },

    scanContainer: {
        height: Dimensions.get('screen').height * 0.37,
        width: Dimensions.get('screen').height * 0.37,
        margin: 20,
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 25,
        justifyContent: 'center'
    },

    scanBox: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 21
    },

    firstBoxScan: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: '104%',
        width: '70%',
        alignSelf: 'center'
    },

    secondBoxScan: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: '70%',
        width: '103%',
        alignSelf: 'center'
    },

    reloadIconContainer: {
        position: 'absolute',
        bottom: '3%',
        right: '3%'
    },

    errorMessageContainer: {
        marginLeft: '5%'
    },

    text: {
        marginBottom: 15,
        marginTop: 20,
        alignSelf: 'center',
        color: ColorEnum.ClassicBrown,
        fontSize: 18
    },

    inputContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        height: '23%',
        width: 360 * (Dimensions.get('screen').width / 400),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 5
    },

    buttonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 360 * (Dimensions.get('screen').width / 400)
    },

    buttonText: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicGrey
    }
});

export default ScanPageStyle;

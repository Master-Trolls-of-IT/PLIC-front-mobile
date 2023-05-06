import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const ScanPageStyle = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 24
    },

    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: '250%',
        width: Dimensions.get('screen').width
    },

    scanContainer: {
        height: '80%',
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 5,
        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 25,
        justifyContent: 'center'
    },

    firstBoxScan: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: '103%',
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

    text: {
        alignSelf: 'center',
        color: ColorEnum.ClassicBrown,
        fontSize: 18
    },

    inputContainer: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400),
        gap: 20 * (Dimensions.get('screen').height / 1000)
    },

    buttonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 360 * (Dimensions.get('screen').width / 400)
    },

    buttonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicGrey
    }
});

export default ScanPageStyle;

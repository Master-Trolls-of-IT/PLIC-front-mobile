import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const loginPageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
    },

    tree: {
        position: 'absolute',
        bottom: 0,
        right: -15
    },

    headerContainer: {
        marginLeft: '10%'
    },

    errorMessage: {
        marginLeft: Dimensions.get('screen').width / 15,
        marginRight: Dimensions.get('screen').width / 15
    },

    container: {
        height: Dimensions.get('screen').height,
        display: 'flex',
        flexDirection: 'column'
    },

    contentContainer: {
        height: '40%',
        marginTop: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    input: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400),
        height: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    buttonContainer: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    brownButtonContainer: {
        backgroundColor: ColorEnum.ClassicBrown,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 123 * (Dimensions.get('screen').width / 400)
    },

    brownButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBeige
    },

    greenButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 163 * (Dimensions.get('screen').width / 400)
    },

    greenButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.SlightlyOpaqueGrey
    }
});

export default loginPageStyle;

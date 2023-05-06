import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const SignUpPageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        display: 'flex',
        justifyContent: 'space-between'
    },

    tree: {
        position: 'absolute',
        bottom: 0,
        right: -15,
        opacity: 0.7
    },

    text: {
        alignSelf: 'center',
        fontSize: 30
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
        height: Dimensions.get('screen').height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },

    input: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400),
        height: '62%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    genderAndBirthField: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },

    weightAndHeightField: {
        display: 'flex',
        flexDirection: 'row',
        width: '70%'
    },

    buttonContainer: {
        alignSelf: 'center',
        width: 360 * (Dimensions.get('screen').width / 400),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    brownButtonContainer: {
        backgroundColor: ColorEnum.ClassicBrown,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 96 * (Dimensions.get('screen').width / 400)
    },

    brownButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBeige
    },

    greenButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 101 * (Dimensions.get('screen').width / 400)
    },

    greenButtonText: {
        fontSize: 16 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.SlightlyOpaqueGrey
    }
});

export default SignUpPageStyle;

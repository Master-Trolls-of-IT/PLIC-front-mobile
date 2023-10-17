import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const CreateMealScanPageStyle = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        display: 'flex',
        flexDirection: 'column',
        gap: 25
    },

    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
    },

    headerContainer: {
        marginTop: '28%',
        marginLeft: '10%'
    },

    scanBox: {
        marginTop: 10,
        alignSelf: 'center',
        width: '90%',
        height: '40%',
        justifyContent: 'center'
    },

    scan: {
        height: '98%',
        width: '98%',
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 21
    },

    scanContainerTopLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderTopWidth: 5,
        borderLeftWidth: 5,
        borderColor: ColorEnum.ClassicBrown,
        width: 55,
        height: 55,
        borderTopLeftRadius: 22
    },

    scanContainerTopRight: {
        position: 'absolute',
        top: 0,
        right: 0,
        borderTopWidth: 5,
        borderRightWidth: 5,
        borderColor: ColorEnum.ClassicBrown,
        width: 55,
        height: 55,
        borderTopRightRadius: 22
    },

    scanContainerBottomLeft: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        borderColor: ColorEnum.ClassicBrown,
        width: 55,
        height: 55,
        borderBottomLeftRadius: 22
    },

    scanContainerBottomRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderBottomWidth: 5,
        borderRightWidth: 5,
        borderColor: ColorEnum.ClassicBrown,
        width: 55,
        height: 55,
        borderBottomRightRadius: 22
    },

    text: {
        fontSize: 14 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown,
        alignSelf: 'center'
    },

    inputContainer: {
        alignSelf: 'center'
    }
});

export default CreateMealScanPageStyle;

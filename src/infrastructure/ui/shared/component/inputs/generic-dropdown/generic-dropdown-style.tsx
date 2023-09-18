import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GenericDropDownStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 3,
        overflow: 'hidden'
    },

    title: {
        paddingLeft: 25,
        color: ColorEnum.ClassicBrown,
        fontSize: 16 * (Dimensions.get('screen').height / 725)
    },

    border: {
        height: 43 * (Dimensions.get('screen').height / 900),
        borderWidth: 2,
        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        backgroundColor: ColorEnum.ClassicDarkBeige,
        fontSize: 14 * (Dimensions.get('screen').height / 725),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputText: {
        flex: 2,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 14 * (Dimensions.get('screen').height / 725)
    },

    icon: {
        marginRight: 10,
        alignSelf: 'center'
    },

    dropdown: {
        position: 'absolute',
        marginTop: -2,
        borderWidth: 2,
        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        backgroundColor: ColorEnum.ClassicDarkBeige,
        overflow: 'hidden'
    },

    overlay: {
        width: '100%',
        height: '100%'
    },

    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.3,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        bottom: -1,
        borderColor: ColorEnum.ClassicBrown,
        overflow: 'hidden'
    },

    itemText: {
        fontSize: 12 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    },

    selectedItem: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.3,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        bottom: -1,
        backgroundColor: ColorEnum.ClassicBrown,
        borderColor: ColorEnum.ClassicBrown
    },

    selectedItemText: {
        fontSize: 12 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBeige
    }
});

export default GenericDropDownStyle;

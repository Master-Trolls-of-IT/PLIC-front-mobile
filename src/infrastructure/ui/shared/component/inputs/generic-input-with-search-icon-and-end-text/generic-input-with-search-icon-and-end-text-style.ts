import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GenericInputWithSearchIconAndEndTextStyle = StyleSheet.create({
    container: {
        height: 43 * (Dimensions.get('screen').height / 900),
        width: 139 * (Dimensions.get('screen').width / 400),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 4
    },

    title: {
        paddingLeft: 25,
        color: ColorEnum.ClassicBrown,
        fontSize: 16 * (Dimensions.get('screen').height / 725)
    },

    border: {
        height: 43 * (Dimensions.get('screen').height / 900),
        paddingLeft: 35,
        paddingRight: 25,
        borderWidth: 2,
        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        backgroundColor: ColorEnum.ClassicDarkBeige,
        fontSize: 14 * (Dimensions.get('screen').height / 725)
    },

    containerSearchIcon: {
        position: 'absolute',
        height: '100%',
        justifyContent: 'center',
        right: 12
    },

    searchIcon: {
        alignSelf: 'center'
    },

    endText: {
        position: 'absolute',
        alignSelf: 'flex-end',
        fontSize: 17 * (Dimensions.get('screen').height / 725),
        paddingRight: 45,
        paddingTop: 2,
        color: ColorEnum.ClassicBrown
    }
});

export default GenericInputWithSearchIconAndEndTextStyle;

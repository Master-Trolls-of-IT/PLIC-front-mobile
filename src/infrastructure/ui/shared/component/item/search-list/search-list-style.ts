import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const SearchListStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 0.68 * Dimensions.get('screen').height
    },

    searchContainer: {
        width: '90%',
        alignSelf: 'center',
        borderBottomColor: ColorEnum.ClassicBrown,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop: 15,
        paddingBottom: 15
    },

    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '98%',
        alignSelf: 'center',
        height: '200%',
        marginTop: 12
    },

    noData: {
        fontSize: 21,
        color: ColorEnum.ClassicBrown,
        alignSelf: 'center',
        marginTop: '50%'
    }
});

export default SearchListStyle;

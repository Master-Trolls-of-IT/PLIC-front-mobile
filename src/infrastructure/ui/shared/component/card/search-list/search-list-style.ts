import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const SearchListStyle = StyleSheet.create({
    container: {
        width: 0.9 * Dimensions.get('screen').width,
        height: 0.68 * Dimensions.get('screen').height,
        alignSelf: 'center'
    },

    searchContainer: {
        borderBottomColor: ColorEnum.ClassicBrown,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 15
    },

    search: {},

    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        marginTop: 20,
        paddingTop: -20
    },

    noData: {
        fontSize: 21,
        color: ColorEnum.ClassicBrown,
        alignSelf: 'center',
        marginTop: '50%'
    }
});

export default SearchListStyle;

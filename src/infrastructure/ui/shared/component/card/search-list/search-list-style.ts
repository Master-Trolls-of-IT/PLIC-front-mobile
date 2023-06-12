import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const SearchListStyle = StyleSheet.create({
    container: {
        width: 0.9 * Dimensions.get('screen').width,
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
        height: 0.6 * Dimensions.get('screen').height,
        marginTop: 20,
        paddingTop: -20
    }
});

export default SearchListStyle;

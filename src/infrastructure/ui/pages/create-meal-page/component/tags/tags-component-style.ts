import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const TagsComponentStyle = StyleSheet.create({
    tagsContainer: {
        borderTopColor: ColorEnum.ClassicBrown,
        borderTopWidth: 1,
        marginTop: 5,
        alignSelf: 'center',
        width: '92%',
        paddingTop: 11,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },

    tags: {
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 6,
        borderRadius: 10
    },

    circle: {
        width: 16,
        height: 16,
        borderRadius: 16 / 2,
        marginTop: 1
    },

    tagsText: {
        marginLeft: 6,
        fontSize: 12 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    },

    crossContainer: {
        marginLeft: 3,
        marginTop: 1,
        padding: 3,
        justifyContent: 'center'
    },

    cross: {
        alignSelf: 'center'
    },

    plusContainer: {
        justifyContent: 'center'
    },

    plus: {
        alignSelf: 'center'
    }
});

export default TagsComponentStyle;

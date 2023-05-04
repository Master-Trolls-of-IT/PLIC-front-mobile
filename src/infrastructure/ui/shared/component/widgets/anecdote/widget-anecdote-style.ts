import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const anecdoteWidgetStyle = StyleSheet.create({
    anecdoteContainer: {
        height: Dimensions.get('screen').width * 0.4,
        width: Dimensions.get('screen').width * 0.4,
        padding: 10,
        borderRadius: 20,
        marginRight: Dimensions.get('screen').width * 0.05,
        backgroundColor: ColorEnum.ExtraOpaqueBrown
    },

    title: {
        color: ColorEnum.SlightlyOpaqueGrey,
        fontSize: 12 * (Dimensions.get('screen').height / 500)
    },

    text: {
        height: '100%',
        bottom: '20%',
        textAlignVertical: 'center',
        color: ColorEnum.SlightlyOpaqueGrey,
        fontSize: 7 * (Dimensions.get('screen').height / 500)
    },

    icon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
        right: Dimensions.get('screen').width * 0.01
    }
});

export default anecdoteWidgetStyle;

import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const WidgetAnecdoteStyle = StyleSheet.create({
    anecdoteContainer: {
        height: Dimensions.get('screen').width * 0.4,
        width: Dimensions.get('screen').width * 0.4,
        padding: 10,
        borderRadius: 20,
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        display: 'flex',
        flexDirection: 'column'
    },

    title: {
        color: ColorEnum.SlightlyOpaqueGrey,
        fontSize: 12 * (Dimensions.get('screen').height / 500)
    },

    textContainer: {
        height: '80%',
        justifyContent: 'center'
    },

    text: {
        color: ColorEnum.SlightlyOpaqueGrey,
        fontSize: 8 * (Dimensions.get('screen').height / 530),
        marginBottom: 10
    },

    icon: {
        position: 'absolute',
        bottom: 0,
        right: Dimensions.get('screen').width * 0.01
    }
});

export default WidgetAnecdoteStyle;

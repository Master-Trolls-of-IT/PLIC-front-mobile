import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const anecdoteWidgetStyle = StyleSheet.create({
    anecdoteContainer: {
        height: Dimensions.get('screen').width * 0.4,
        width: Dimensions.get('screen').width * 0.4,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        borderRadius: 20,
        padding: 10,
        marginRight: Dimensions.get('screen').width * 0.05
    },

    title: {
        flex: 3,
        alignSelf: 'auto',
        color: ColorEnum.SlightlyOpaqueGrey,
        fontSize: 10 * (Dimensions.get('screen').height / 500)
    },

    textContainer: {
        flex: 11,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0
    },

    text: {
        color: ColorEnum.SlightlyOpaqueGrey,
        fontSize: 7 * (Dimensions.get('screen').height / 500)
    },

    icon: {
        flex: 3,
        alignSelf: 'flex-end',
        left: Dimensions.get('screen').width / 100,
        bottom: Dimensions.get('screen').width / 60
    },

    //TO DELETE
    temporaryIntake: {
        height: Dimensions.get('screen').width * 0.35,
        width: Dimensions.get('screen').width * 0.85,
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        borderRadius: 20,
        padding: 10,
        marginBottom: Dimensions.get('screen').height / 30
    }
});

export default anecdoteWidgetStyle;

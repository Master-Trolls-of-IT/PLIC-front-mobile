import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const WidgetEnergyStyle = StyleSheet.create({
    widgetContainer: {
        height: Dimensions.get('screen').width * 0.4,
        width: Dimensions.get('screen').width * 0.4,
        padding: 10,
        borderRadius: 20,
        backgroundColor: ColorEnum.ClassicLightGreen,
        display: 'flex',
        flexDirection: 'column'
    },

    circularView: {
        alignSelf: 'center'
    },

    circle: {
        position: 'absolute',
        alignSelf: 'center'
    },

    innerTitle: {
        marginTop: 18,
        fontSize: 15 * (Dimensions.get('screen').height / 900),
        color: ColorEnum.ClassicGrey + 'C0',
        alignSelf: 'center'
    },

    earned: {
        fontSize: 32 * (Dimensions.get('screen').height / 900),
        alignSelf: 'center',
        color: ColorEnum.ClassicGrey + 'C0'
    },

    goal: {
        fontSize: 15 * (Dimensions.get('screen').height / 900),
        alignSelf: 'center',
        color: ColorEnum.ClassicGrey + 'C0'
    }
});

export default WidgetEnergyStyle;

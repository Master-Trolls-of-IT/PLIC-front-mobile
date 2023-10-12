import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const WidgetPageStyle = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        display: 'flex',
        flexDirection: 'column'
    },

    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'space-between'
    },

    tree: {
        position: 'absolute',
        bottom: 0,
        right: -15,
        opacity: 0.7
    },

    contentContainer: {
        marginTop: '30%',
        display: 'flex',
        flexDirection: 'column'
    },

    headerContainer: {
        marginLeft: '10%'
    },

    widgetStart: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },

    instructions: {
        marginTop: 20,
        marginHorizontal: 8,
        paddingHorizontal: 12,
        color: ColorEnum.ClassicBrown,
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 7,
        borderBottomWidth: 0.7,
        borderBottomColor: ColorEnum.ClassicBrown
    },

    widgetArrival: {
        display: 'flex',
        flexDirection: 'column',
        width: Dimensions.get('screen').width
    },

    widgetArrivalRow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: Dimensions.get('screen').width * 0.05,
        gap: Dimensions.get('screen').width * 0.1
    },

    confirmButtonStyleContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        borderRadius: 20,
        width: 129,
        height: 45
    },

    confirmButtonText: {
        color: ColorEnum.ClassicGrey,
        fontSize: 18
    },

    footer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: 20
    }
});

export default WidgetPageStyle;

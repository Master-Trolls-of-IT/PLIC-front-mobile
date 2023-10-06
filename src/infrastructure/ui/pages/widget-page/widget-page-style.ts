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
        flexDirection: 'column'
    },

    widgetArrivalRow: {
        display: 'flex',
        flexDirection: 'row'
    },

    footer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: 20
    }
});

export default WidgetPageStyle;

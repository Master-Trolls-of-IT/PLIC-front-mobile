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

    footer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: 20
    },

    addModalContent: {
        display: 'flex',
        flexDirection: 'column',
        borderTopWidth: 0.4,
        borderTopColor: ColorEnum.ClassicBrown,
        width: Dimensions.get('screen').width * 0.75,
        marginHorizontal: -Dimensions.get('screen').width * 0.05,
        marginTop: 10,
        alignItems: 'center'
    },

    scrollSelectContainer: {
        width: Dimensions.get('screen').width * 0.75,
        padding: 10,
        borderWidth: 1.5,
        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        marginHorizontal: -15,
        marginVertical: 15
    },

    scrollSelect: {
        width: Dimensions.get('screen').width * 0.65,
        height: Dimensions.get('screen').height * 0.15,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center'
    },

    scrollSelectContent: {
        width: Dimensions.get('screen').width * 0.7,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },

    modalFooter: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        paddingVertical: 5
    },

    choosenWidget: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalDropdownArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        width: Dimensions.get('screen').width * 0.75,
        gap: 15,
        marginHorizontal: -20,
        alignSelf: 'center'
    },

    modalDropdownAreaText: {
        fontSize: 22,
        color: ColorEnum.ClassicBrown,
        fontWeight: 'bold',
        paddingBottom: 8,
        borderBottomWidth: 0.4,
        borderBottomColor: ColorEnum.ClassicBrown,
        width: Dimensions.get('screen').width * 0.75,
        marginHorizontal: -Dimensions.get('screen').width * 0.05,
        textAlign: 'center',
        marginBottom: 10
    }
});

export default WidgetPageStyle;

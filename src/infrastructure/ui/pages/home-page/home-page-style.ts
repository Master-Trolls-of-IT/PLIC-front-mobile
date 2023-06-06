import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const HomePageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        height: Dimensions.get('screen').height - 90 * (Dimensions.get('screen').height / 900),
        gap: 7
    },

    header: {
        marginTop: -55
    },

    headerContainer: {
        marginTop: '30%',
        marginLeft: '10%'
    },

    headerButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 30
    },

    widgetContainer: {
        width: '85%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 0.1 * Dimensions.get('screen').height
    },

    widgetContainerFirstRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    widgetContainerTwoWidgetRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    headerSecondText: {
        fontSize: 27 * (Dimensions.get('screen').height / 725)
    },

    basketImage: {
        marginBottom: Dimensions.get('screen').height / 40,
        alignSelf: 'center'
    }
});

export default HomePageStyle;

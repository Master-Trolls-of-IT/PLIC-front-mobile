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
        height: '100%',
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
    },

    settingsPage: {
        display: 'flex',
        position: 'absolute',
        width: '102%',
        alignSelf: 'center',
        backgroundColor: ColorEnum.ClassicBeige,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 4,
        borderColor: ColorEnum.ClassicBrown,
        borderBottomWidth: 0,
        height: '94%'
    },
    settingsPageLoading: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: ColorEnum.ExtraOpaqueGrey,
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomePageStyle;

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
        display: 'flex',
        flexDirection: 'column',
        width: Dimensions.get('screen').width
    },

    widgetContainerFirstRow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: Dimensions.get('screen').width * 0.07,
        gap: Dimensions.get('screen').width * 0.06
    },

    headerSecondText: {
        fontSize: 27 * (Dimensions.get('screen').height / 725)
    },

    basketImage: {
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

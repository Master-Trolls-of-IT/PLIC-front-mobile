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

    headerButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 30
    },

    widgetContainer: {
        width: '85%',
        height: 0.85 * Dimensions.get('screen').width,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    widgetContainerFirstRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    widgetContainerSecondRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
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

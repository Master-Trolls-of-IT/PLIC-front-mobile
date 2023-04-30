import { Dimensions, StyleSheet } from 'react-native';

const HomePageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between'
    },
    header: {
        marginTop: -55
    },

    widgetContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    anecdoteBox: {
        marginLeft: Dimensions.get('screen').width * 0.05
    },
    ecoScoreBox: {
        marginRight: Dimensions.get('screen').width * 0.05
    },
    headerButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 30
    },

    headerSecondText: {
        fontSize: 27 * (Dimensions.get('screen').height / 725)
    }
});

export default HomePageStyle;

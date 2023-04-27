import { Dimensions, StyleSheet } from 'react-native';

const HomePageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        justifyContent: 'flex-start'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center'
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
    }
});

export default HomePageStyle;

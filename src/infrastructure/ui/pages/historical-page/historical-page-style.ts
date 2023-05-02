import { Dimensions, StyleSheet } from 'react-native';

const HistoricalPageStyle = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        paddingBottom: 90 * (Dimensions.get('screen').height / 900),
        display: 'flex',
        flexDirection: 'column'
    },

    background: {
        position: 'absolute',
        backgroundColor: '#EFECCA',
        height: '100%',
        width: Dimensions.get('screen').width
    }
});

export default HistoricalPageStyle;

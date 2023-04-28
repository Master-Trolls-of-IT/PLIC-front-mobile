import { Dimensions, StyleSheet } from 'react-native';

const HistoricalPageStyle = StyleSheet.create({
    container: {
        height: '100%',
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

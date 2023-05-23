import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const HistoricalPageStyle = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: '100%',
        width: Dimensions.get('screen').width
    },

    headerContainer: {
        marginTop: '28%',
        marginLeft: '10%'
    }
});

export default HistoricalPageStyle;

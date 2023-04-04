import { StyleSheet } from 'react-native';

const GenericTooltipStyle = StyleSheet.create({
    box: {
        padding: 10,
        backgroundColor: '#6D4C41',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: '#EFECCA',
        lineHeight: 20
    },

    triangle: {
        width: 10,
        height: 10,
        marginTop: 0,
        left: 15,
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderBottomWidth: 10,
        borderBottomColor: '#6D4C41',
        transform: [{ rotate: '180deg' }]
    }
});

export default GenericTooltipStyle;

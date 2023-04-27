import { Dimensions, StyleSheet } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const anecdoteWidgetStyle = StyleSheet.create({
    anecdoteContainer: {
        height: Dimensions.get('screen').width * 0.4,
        width: Dimensions.get('screen').width * 0.4,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#6D4C412C',
        borderRadius: 20,
        padding: 10
    },

    title: {
        flex: 3,
        alignSelf: 'auto',
        color: '#2E2E2EBF',
        fontSize: 10 * (Dimensions.get('screen').height / 500)
    },

    textContainer: {
        flex: 11,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0
    },
    text: {
        color: '#2E2E2EBF',

        fontSize: 7 * (Dimensions.get('screen').height / 500)
    },
    icon: {
        flex: 3,
        alignSelf: 'flex-end',
        left: Dimensions.get('screen').width / 100,
        bottom: Dimensions.get('screen').width / 60
    }
});

export default anecdoteWidgetStyle;

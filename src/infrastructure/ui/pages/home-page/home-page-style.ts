import { Dimensions, StyleSheet } from 'react-native';

const HomePageStyle = StyleSheet.create({
    background: {
        backgroundColor: '#EFECCA',
        height: '100%',
        width: Dimensions.get('screen').width,
        justifyContent: 'flex-start'
    }
});

export default HomePageStyle;

import { Dimensions, StyleSheet } from 'react-native';

const HomePageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: '#EFECCA',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        justifyContent: 'flex-start'
    }
});

export default HomePageStyle;

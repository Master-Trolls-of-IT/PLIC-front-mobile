import { Dimensions, StyleSheet } from 'react-native';

const GenericBackArrowIconStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '15%',
        marginTop: Dimensions.get('screen').height / 22
    },

    iconContainer: {
        alignSelf: 'center'
    }
});

export default GenericBackArrowIconStyle;

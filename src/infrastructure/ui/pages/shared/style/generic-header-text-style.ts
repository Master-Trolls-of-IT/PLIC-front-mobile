import { Dimensions, StyleSheet } from 'react-native';

const GenericHeaderTextStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        top: Dimensions.get('screen').height / 8,
        left: Dimensions.get('screen').width / 9.5
    },

    firstText: {
        fontSize: 35 * (Dimensions.get('screen').height / 725)
    },

    secondText: {
        fontSize: 14 * (Dimensions.get('screen').height / 725),
        marginTop: 5
    }
});

export default GenericHeaderTextStyle;

import { Dimensions, StyleSheet } from 'react-native';

const GenericHeaderTextStyle = StyleSheet.create({
    container: {
        marginTop: Dimensions.get('screen').height / 8,
        marginLeft: Dimensions.get('screen').width / 9.5
    },

    firstText: {
        fontSize: 29 * (Dimensions.get('screen').height / 725)
    },

    secondText: {
        fontSize: 14 * (Dimensions.get('screen').height / 725),
        marginTop: 5
    }
});

export default GenericHeaderTextStyle;
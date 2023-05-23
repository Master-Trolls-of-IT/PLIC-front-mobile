import { Dimensions, StyleSheet } from 'react-native';

const GenericHeaderTextStyle = StyleSheet.create({
    firstText: {
        fontSize: 29 * (Dimensions.get('screen').height / 725)
    },

    secondText: {
        fontSize: 14 * (Dimensions.get('screen').height / 725),
        marginTop: 5
    },

    textOnlyContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default GenericHeaderTextStyle;

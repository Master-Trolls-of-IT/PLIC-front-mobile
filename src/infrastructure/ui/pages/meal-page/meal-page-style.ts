import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const MealPageStyle = StyleSheet.create({
    background: {
        backgroundColor: ColorEnum.ClassicBeige,
        height: '100%',
        width: Dimensions.get('screen').width,
        justifyContent: 'center'
    },

    text: {
        alignSelf: 'center',
        fontSize: 30
    },
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
});

export default MealPageStyle;

import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const MealPageStyle = StyleSheet.create({
    background: {
        backgroundColor: ColorEnum.ClassicBeige,
        height: '100%',
        width: Dimensions.get('screen').width,
        position: 'absolute'
    },

    text: {
        alignSelf: 'center',
        fontSize: 30
    },

    headerContainer: {
        marginTop: '28%',
        marginLeft: '10%'
    },
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    addButton: {
        height: '10%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: ColorEnum.ClassicBeige,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusImage: {
        margin: 5
    }
});

export default MealPageStyle;

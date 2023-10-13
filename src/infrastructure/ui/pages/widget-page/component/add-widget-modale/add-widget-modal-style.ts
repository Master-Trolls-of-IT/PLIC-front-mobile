import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const AddWidgetModalStyle = StyleSheet.create({
    addModalContent: {
        display: 'flex',
        flexDirection: 'column',
        borderTopWidth: 0.4,
        borderTopColor: ColorEnum.ClassicBrown,
        width: Dimensions.get('screen').width * 0.8,
        marginHorizontal: -Dimensions.get('screen').width * 0.05,
        marginTop: 10,
        alignItems: 'center'
    },

    scrollSelectContainer: {
        width: Dimensions.get('screen').width * 0.71,
        padding: 5,
        borderWidth: 1.5,
        borderColor: ColorEnum.ClassicBrown,
        borderRadius: 20,
        marginHorizontal: -15,
        marginVertical: 15
    },

    scrollSelect: {
        width: Dimensions.get('screen').width * 0.63,
        height: Dimensions.get('screen').height * 0.15,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center'
    },

    scrollSelectContent: {
        width: Dimensions.get('screen').width * 0.6,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 11
    },

    chosenWidget: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalDropdownArea: {
        borderTopColor: ColorEnum.ClassicBrown,
        borderTopWidth: StyleSheet.hairlineWidth,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: Dimensions.get('screen').width * 0.82,
        marginHorizontal: -20,
        alignSelf: 'center',
        paddingTop: 10
    },

    modalDropdownAreaText: {
        fontSize: 22,
        color: ColorEnum.ClassicBrown,
        fontWeight: 'bold',
        borderBottomWidth: 0.4,
        borderBottomColor: ColorEnum.ClassicBrown,
        width: Dimensions.get('screen').width * 0.75,
        marginHorizontal: -Dimensions.get('screen').width * 0.05,
        textAlign: 'center',
        marginBottom: 6,
        marginTop: -5
    },

    confirmButtonStyleContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        borderRadius: 20,
        width: 129,
        height: 45
    },

    confirmButtonText: {
        color: ColorEnum.ClassicGrey,
        fontSize: 18
    },

    modalFooter: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        paddingVertical: 5
    }
});

export default AddWidgetModalStyle;

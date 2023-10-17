import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const MealTagsStyle = StyleSheet.create({
    tagsContainer: {
        paddingTop: 11,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5
    },

    tags: {
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 6,
        borderRadius: 10
    },

    tagsModalContainer: {
        width: 0.82 * Dimensions.get('screen').width
    },

    tagsModalText: {
        marginTop: 15,
        textAlign: 'justify',
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    },

    inputContainer: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 5
    },

    plusContainer: {
        justifyContent: 'center'
    },

    plus: {
        alignSelf: 'center'
    },

    modalTagsScrollViewContainer: {
        marginTop: 8,
        height: 0.15 * Dimensions.get('screen').height
    },

    modalTagsContainer: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },

    validateButtonTagsModalContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        width: 95 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400)
    },

    validateButtonTextTagsModal: {
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicGrey
    },

    footerTagsModalContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    footerTagsModalText: {
        marginTop: 5,
        textAlign: 'justify',
        fontSize: 15 * (Dimensions.get('screen').height / 725),
        color: ColorEnum.ClassicBrown
    }
});

export default MealTagsStyle;

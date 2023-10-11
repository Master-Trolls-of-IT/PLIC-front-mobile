import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const MealPageActiveItemStyle = StyleSheet.create({
    scanModal: {
        position: 'absolute',
        width: '102%',
        alignSelf: 'center',
        backgroundColor: ColorEnum.ClassicBeige,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 4,
        borderColor: ColorEnum.ClassicBrown,
        borderBottomWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 30
    },
    MainContainer: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center'
    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: ColorEnum.ClassicBrown,
        width: 'auto',
        marginLeft: 10
    },
    OkButton: {
        fontSize: 30,
        fontWeight: 'bold',
        color: ColorEnum.ClassicBrown,
        width: 'auto',
        marginRight: 10
    },

    TitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    favourite: {
        position: 'absolute',
        right: 20,
        top: 10
    },

    scrollLine: {
        alignSelf: 'center'
    },

    MealDescriptionContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: ColorEnum.VeryOpaqueBrown,
        borderTopWidth: 1
    },

    MealName: {
        width: '45%'
    },
    MealTags: {
        width: '45%'
    },

    columnTitle: {
        fontSize: 18,
        color: ColorEnum.ClassicBrown,
        paddingBottom: 5,
        width: '100%'
    },
    columnLeft: {
        fontSize: 18,
        color: ColorEnum.ClassicBrown,
        paddingBottom: 8,
        width: '100%'
    },
    columnRight: {
        fontSize: 18,
        color: ColorEnum.ClassicBrown,
        paddingBottom: 8,
        width: '100%'
    },

    brownButtonContainer: {
        backgroundColor: ColorEnum.ClassicBrown,
        width: 329 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400),
        alignSelf: 'center',
        marginTop: 8
    },

    greenButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        width: 329 * (Dimensions.get('screen').width / 400),
        height: 43 * (Dimensions.get('screen').width / 400),
        alignSelf: 'center',
        marginTop: 6
    },

    brownButtonText: {
        color: ColorEnum.ClassicBeige,
        fontSize: 15,
        alignSelf: 'center'
    },
    greenButtonText: {
        fontSize: 15,
        alignSelf: 'center'
    },

    buttonTextModal: {
        fontSize: 18
    },

    customModalChildren: {
        paddingTop: 10
    },
    AddProductsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    ProductListContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    Content: {
        borderTopColor: ColorEnum.VeryOpaqueBrown,
        borderTopWidth: 1,
        display: 'flex',
        flexDirection: 'column'
    }
});

export default MealPageActiveItemStyle;

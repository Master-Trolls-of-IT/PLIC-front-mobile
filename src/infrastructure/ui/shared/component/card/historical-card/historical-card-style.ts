import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const HistoricalCardStyle = (isExpanded: boolean, scoreColor: ColorEnum) =>
    StyleSheet.create({
        card: {
            width: 0.9 * Dimensions.get('screen').width,
            height: 0.1 * Dimensions.get('screen').height,
            minHeight: 100,
            backgroundColor: ColorEnum.ExtraOpaqueBrown,
            borderRadius: 20,
            alignSelf: 'center'
        },

        container: {
            height: '100%',
            width: 0.9 * Dimensions.get('screen').width
        },

        header: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            zIndex: 1000
        },

        image: {
            width: 100,
            height: 65,
            margin: 13,
            marginRight: 0,
            borderStyle: 'solid',
            borderColor: ColorEnum.ClassicBrown,
            borderRadius: 20,
            borderWidth: 1
        },

        titleField: {
            display: 'flex',
            flexDirection: 'column',
            width: '36%'
        },

        title: {
            fontSize: 21,
            textAlign: 'center',
            color: ColorEnum.ClassicBrown,
            marginTop: 10
        },

        description: {
            fontSize: 16,
            textAlign: 'center',
            flexWrap: 'wrap',
            color: ColorEnum.ClassicBrown
        },

        scoreField: {
            display: 'flex',
            flexDirection: 'row'
        },

        bar: {
            position: 'relative',
            transform: [{ rotateZ: '-90deg' }],
            top: 40,
            borderWidth: 0,
            borderLeftWidth: 3,
            borderLeftColor: scoreColor,
            marginLeft: -10
        },

        score: {
            fontSize: 30,
            fontWeight: 'bold',
            color: ColorEnum.VeryOpaqueGrey,
            alignSelf: 'center',
            marginLeft: -10
        },

        favourite: {
            position: 'absolute',
            right: 10,
            top: 10
        },

        content: {
            width: '90%',
            marginHorizontal: 10,
            alignItems: 'center',
            overflow: 'hidden'
        },

        contentTitle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: ColorEnum.ClassicBrown,
            borderBottomWidth: 0.8,
            borderBottomColor: ColorEnum.ExtraOpaqueBrown,
            paddingBottom: 10,
            width: '100%'
        },

        contentInfo: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },

        contentLine: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        lineContent: {
            fontSize: 16,
            margin: 3,
            color: ColorEnum.ClassicBrown
        },

        addButtonContainer: {
            backgroundColor: ColorEnum.ClassicGreen,
            marginTop: 15,
            marginLeft: 5,
            padding: 10,
            alignSelf: 'center'
        },
        addButtonText: {
            fontSize: 20
        }
    });

export default HistoricalCardStyle;

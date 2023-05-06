import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const SmallBasicIntakesStyle = (color: string) =>
    StyleSheet.create({
        content: {
            backgroundColor: ColorEnum.ClassicDarkBeige,
            borderRadius: 20,
            width: 0.4 * Dimensions.get('screen').width,
            height: 0.4 * Dimensions.get('screen').width,
            alignItems: 'center',
            padding: 3
        },

        title: {
            fontSize: 24 * (Dimensions.get('screen').height / 900),
            color: ColorEnum.SlightlyOpaqueGrey
        },

        circularView: {
            marginTop: 10,
            gap: -5
        },

        circle: {
            position: 'absolute',
            alignSelf: 'center'
        },

        innerTitle: {
            marginTop: 18,
            fontSize: 21 * (Dimensions.get('screen').height / 900),
            color: color
        },

        earned: {
            fontSize: 38 * (Dimensions.get('screen').height / 900),
            alignSelf: 'center',
            color: color
        },

        goal: {
            fontSize: 21 * (Dimensions.get('screen').height / 900),
            alignSelf: 'center',
            color: color
        }
    });

export default SmallBasicIntakesStyle;

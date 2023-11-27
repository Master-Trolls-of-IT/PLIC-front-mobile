import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GamePageWrapperStyle = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
    },

    title: {
        color: ColorEnum.ClassicBrown,
        fontSize: 20
    },

    text: {
        color: ColorEnum.ClassicBrown,
        fontSize: 19,
        textAlign: 'justify',
        letterSpacing: 0.8
    },

    questionCard: {
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        width: Dimensions.get('screen').width * 0.85,
        borderRadius: 20,
        padding: 20
    },

    questionCardHeader: {
        color: ColorEnum.ClassicGrey,
        fontSize: 19,
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    questionCardText: {
        color: ColorEnum.ClassicGrey,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    content: {
        paddingHorizontal: 20
    },

    rowContainer: {
        marginTop: 8,
        gap: 20
    },

    contentRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    answerCardContainer: {
        display: 'flex',
        justifyContent: 'center'
    },

    answerCard: {
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        width: Dimensions.get('screen').width * 0.42,
        height: Dimensions.get('screen').width * 0.3,
        borderRadius: 20,
        padding: 10,
        display: 'flex',
        justifyContent: 'center'
    },

    answerCardRow: {
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        width: '100%',
        height: Dimensions.get('screen').width * 0.32,
        borderRadius: 20,
        padding: 10,
        display: 'flex',
        justifyContent: 'center'
    },

    contentFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    contentFooterButtonContainer: {
        backgroundColor: ColorEnum.ClassicGreen,
        paddingHorizontal: 18,
        paddingVertical: 7,
        alignSelf: 'flex-end'
    },

    contentFooterButtonText: {
        color: ColorEnum.ClassicGrey,
        fontSize: 18
    },

    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        borderTopWidth: 0.5,
        borderTopColor: ColorEnum.ClassicBrown,
        borderStyle: 'solid',
        padding: 20
    },

    footerQuestions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center'
    },

    footerResult: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 15,
        paddingHorizontal: 20,
        marginBottom: 10
    },

    footerText: {
        color: ColorEnum.ClassicBrown,
        fontSize: 22
    },

    chosenIcon: {
        position: 'absolute',
        alignSelf: 'center'
    },

    chosenIconBig: {
        alignSelf: 'center'
    },

    rightResult: {
        color: ColorEnum.ClassicGreen,
        fontSize: 30,
        alignSelf: 'center'
    },

    wrongResult: {
        color: ColorEnum.ClassicRedIcon,
        fontSize: 30,
        alignSelf: 'center'
    },

    goodAnswers: {
        marginLeft: 20
    }
});

export default GamePageWrapperStyle;

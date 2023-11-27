import { Dimensions, StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GamePageStyle = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: ColorEnum.ClassicBeige,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },

    blobstop: {
        alignSelf: 'flex-end'
    },

    text: {
        alignSelf: 'center',
        color: ColorEnum.ClassicBrown,
        fontSize: 22
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: 7
    },

    header: {
        marginTop: -55
    },

    headerContainer: {
        marginTop: '30%',
        marginLeft: '10%'
    },

    startGameCard: {
        backgroundColor: ColorEnum.ExtraOpaqueBrown,
        width: Dimensions.get('screen').width * 0.85,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20,
        gap: 20,
        marginTop: -50
    },

    startGameCardTitle: {
        color: ColorEnum.ClassicGrey,
        fontSize: 22
    },

    startGameCardButtonContainer: {
        borderRadius: 20,
        backgroundColor: ColorEnum.ClassicBrown,
        padding: 9
    },

    startGameCardButtonText: {
        color: ColorEnum.ClassicBeige,
        fontSize: 18
    },

    content: {
        flex: 1,
        justifyContent: 'center'
    },

    endGame: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
});

export default GamePageStyle;

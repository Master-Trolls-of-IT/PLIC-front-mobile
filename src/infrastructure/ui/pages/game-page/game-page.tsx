import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import GamePageStyle from '~/infrastructure/ui/pages/game-page/game-page-style';
import GamePageBlobsTop from '~/infrastructure/ui/pages/game-page/background/game-page-blobs-top';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import useGamePageData from '~/infrastructure/ui/pages/game-page/hooks';
import GamePageWrapper from '~/infrastructure/ui/pages/game-page/component/wrapper/game-page-wrapper';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import { GameStatusEnum } from '~/domain/interfaces/enum/game-status-enum';
import Chosen from '~/infrastructure/ui/pages/game-page/component/wrapper/icons/chosen';
import ResetButton from '~/infrastructure/ui/pages/game-page/admin/reset-button';

const GamePage = () => {
    const { gameStatus, lastScore, customFontInterBold, onPressStartGame } = useGamePageData();
    return (
        <View>
            <View style={GamePageStyle.background}>
                <GamePageBlobsTop />
            </View>
            <View style={GamePageStyle.container}>
                <View style={GamePageStyle.header}>
                    <GenericHeaderText
                        firstText={'Quiz'}
                        secondText={`Apprenez en vous amusant !`}
                        containerStyle={GamePageStyle.headerContainer}
                    />
                </View>
                <View style={GamePageStyle.content}>
                    {gameStatus === GameStatusEnum.NOT_STARTED ? (
                        <View style={GamePageStyle.startGameCard}>
                            <Text style={{ ...GamePageStyle.startGameCardTitle, ...customFontInterBold.text }}>
                                Votre quiz vous attend !
                            </Text>
                            <GenericButton
                                style={{
                                    container: GamePageStyle.startGameCardButtonContainer,
                                    text: { ...GamePageStyle.startGameCardButtonText, ...customFontInterBold.text }
                                }}
                                title={'Commencer le quiz journalier'}
                                onPress={onPressStartGame}
                            />
                        </View>
                    ) : gameStatus === GameStatusEnum.STARTED ? (
                        <GamePageWrapper />
                    ) : (
                        <View style={GamePageStyle.endGame}>
                            <ResetButton />
                            <Chosen big />
                            <Text style={{ ...GamePageStyle.text, ...customFontInterBold.text }}>
                                Vous avez terminé le quiz journalier
                            </Text>
                            <Text style={{ ...GamePageStyle.text, ...customFontInterBold.text }}>
                                Votre score : {lastScore?.toString()}/10
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

export default observer(GamePage);

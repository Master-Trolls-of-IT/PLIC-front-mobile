import React from 'react';
import { observer } from 'mobx-react';
import { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import { useStore } from '~/infrastructure/controllers/store';
import HomePageBlobsTop from '~/infrastructure/ui/pages/home-page/component/background/home-page-blobs-top';
import GenericHeaderText from '../../shared/component/texts/generic-header-text/generic-header-text';
import HomePageBasket from './component/background/home-page-basket';
import HomePageAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import EcoScore from '../../shared/component/widgets/ecoscore/widget-ecoscore';
import HomePageTemporaryIntake from '../../shared/component/widgets/anecdote/widget-temporary-intake';
import useHomePageData from './hooks';

const HomePage: FunctionComponent<any> = ({ navigation }) => {
    const {
        NavigationStore: { setNavigate }
    } = useStore();
    const { username } = useHomePageData();

    useEffect(() => {
        setNavigate(navigation.navigate);
    }, []);

    return (
        <View>
            <View style={HomePageStyle.background}>
                <HomePageBlobsTop />
            </View>
            <View style={HomePageStyle.container}>
                <View style={HomePageStyle.header}>
                    <GenericHeaderText
                        firstText={'Votre Résumé'}
                        secondText={`Bonjour ${username}`}
                        showHomePageHeader={true}
                    />
                </View>
                <View>
                    <HomePageBasket />
                </View>
                <View style={HomePageStyle.anecdoteBox}>
                    <HomePageTemporaryIntake title={''} anecdote={'Mes Apports'} />
                </View>
                <View style={HomePageStyle.widgetContainer}>
                    <View style={HomePageStyle.anecdoteBox}>
                        <HomePageAnecdote
                            title={'Anecdote'}
                            anecdote={
                                'Un mégot peut polluer jusqu’à 500 litres d’eau. Environ 1000 sont jetés par terre chaque seconde en France.'
                            }
                        />
                    </View>
                    <View style={HomePageStyle.ecoScoreBox}>
                        <EcoScore percentage={80} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default observer(HomePage);

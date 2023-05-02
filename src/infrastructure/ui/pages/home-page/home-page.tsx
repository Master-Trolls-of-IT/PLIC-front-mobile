import { observer } from 'mobx-react';

import React, { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import { useStore } from '~/infrastructure/controllers/store';

import HomePageBlobsTop from '~/infrastructure/ui/pages/home-page/component/background/home-page-blobs-top';
import GenericHeaderText from '../../shared/component/texts/generic-header-text/generic-header-text';
import HomePageBasket from './component/background/home-page-basket';
import HomePageAnecdote from '~/infrastructure/ui/shared/component/widgets/widget-anecdote';
import SmallBasicIntakes from '../../shared/component/widgets/my-intakes/small-basic/small-basic-intakes';
import EcoScoreStyle from '../../shared/component/widgets/EcoScore/widget-ecoscore-style';
import EcoScore from '../../shared/component/widgets/EcoScore/widget-ecoscore';

const HomePage: FunctionComponent<any> = ({ navigation }) => {
    const {
        NavigationStore: { setNavigate }
    } = useStore();

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
                        secondText={'Bonjour Alexandre,'}
                        showHomePageHeader={true}
                    />
                </View>
                <View>
                    <HomePageBasket />
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
                        <EcoScore earned={82} goal={100} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default observer(HomePage);

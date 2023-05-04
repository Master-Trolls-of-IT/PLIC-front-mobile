import React from 'react';
import { observer } from 'mobx-react';
import { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import EcoScore from '~/infrastructure/ui/shared/component/widgets/ecoscore/widget-ecoscore';
import HomePageAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HomePageBasket from '~/infrastructure/ui/pages/home-page/component/background/home-page-basket';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import { useStore } from '~/infrastructure/controllers/store';
import HomePageBlobsTop from '~/infrastructure/ui/pages/home-page/component/background/home-page-blobs-top';
import HomePageTemporaryIntake from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-temporary-intake';
import useHomePageData from '~/infrastructure/ui/pages/home-page/hooks';

const HomePage: FunctionComponent<any> = ({ navigation }) => {
    const {
        NavigationStore: { setNavigate }
    } = useStore();

    const { username, basketAsset, anecdote, ecoscore } = useHomePageData();

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
                        secondText={`Bonjour ${username},`}
                        showHomePageHeader={true}
                    />
                </View>

                <HomePageBasket asset={basketAsset} />

                <View style={HomePageStyle.widgetContainer}>
                    <View style={HomePageStyle.widgetContainerFirstRow}>
                        <HomePageTemporaryIntake title={''} anecdote={'Mes Apports'} />
                    </View>
                    <View style={HomePageStyle.widgetContainerSecondRow}>
                        <HomePageAnecdote title={'Anecdote'} anecdote={anecdote} />

                        <EcoScore percentage={ecoscore} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default observer(HomePage);

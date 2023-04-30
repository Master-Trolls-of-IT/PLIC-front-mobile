import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import HistoricalPageStyle from '~/infrastructure/ui/pages/historical-page/historical-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HistoricalPageBlobsTop from '~/infrastructure/ui/pages/historical-page/component/background/historical-page-blosb-top';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import { useStore } from '~/infrastructure/controllers/store';

const HistoricalPage = () => {
    const {
        NavigationStore: { goBack }
    } = useStore();
    return (
        <View style={HistoricalPageStyle.container}>
            <View style={HistoricalPageStyle.background}>
                <HistoricalPageBlobsTop />
                <GenericBackArrowIcon goBack={goBack} />
            </View>

            <GenericHeaderText
                firstText={'Votre Historique'}
                secondText={'Recherchez un produit précedemment enregistré'}
            />
        </View>
    );
};

export default observer(HistoricalPage);

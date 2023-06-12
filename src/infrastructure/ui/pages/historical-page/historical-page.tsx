import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import HistoricalPageStyle from '~/infrastructure/ui/pages/historical-page/historical-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HistoricalPageBlobsTop from '~/infrastructure/ui/pages/historical-page/component/background/historical-page-blosb-top';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import { useStore } from '~/infrastructure/controllers/store';
import SearchList from '~/infrastructure/ui/shared/component/card/search-list/search-list';
import { CardEnum } from '~/domain/interfaces/enum/card-enum';

const HistoricalPage = () => {
    const {
        NavigationStore: { goBack }
    } = useStore();

    const [isFavourite, setIsFavourite] = useState(false);

    const toggleFavourite = useCallback(() => {
        setIsFavourite((prevState) => !prevState);
    }, [setIsFavourite]);

    const dataTest = {
        energy: 2000,
        sugar: 500,
        lipid: 500,
        carbohydrate: 500,
        fattyAcide: 500,
        fiber: 500,
        salt: 500,
        protein: 500
    };

    return (
        <View style={HistoricalPageStyle.container}>
            <View style={HistoricalPageStyle.background}>
                <HistoricalPageBlobsTop />
                <GenericBackArrowIcon goBack={goBack} />
            </View>

            <GenericHeaderText
                firstText={'Votre Historique'}
                secondText={'Recherchez un produit précedemment enregistré'}
                containerStyle={HistoricalPageStyle.headerContainer}
            />

            <SearchList />
        </View>
    );
};

export default observer(HistoricalPage);

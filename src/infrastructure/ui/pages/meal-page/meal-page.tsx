import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import MealPageStyle from '~/infrastructure/ui/pages/meal-page/meal-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HistoricalPageStyle from '~/infrastructure/ui/pages/historical-page/historical-page-style';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import HistoricalPageBlobsTop from '~/infrastructure/ui/pages/historical-page/component/background/historical-page-blobs-top';

const MealPage = () => {
    const mockdata: MealItemProps[] = [{ title: 'REPAS 1' }, { title: 'REPAS 3' }, { title: 'REPAS 3' }];
    return (
        <View style={MealPageStyle.container}>
            <View style={HistoricalPageStyle.background}>
                <HistoricalPageBlobsTop />
            </View>
            <GenericHeaderText
                firstText={'Vos Repas'}
                secondText={'Créer un repas ou visualisez un repas enregistré·'}
                containerStyle={HistoricalPageStyle.headerContainer}
            />
            <SearchList itemType={ItemEnum.Meal} data={mockdata} />
        </View>
    );
};

export default observer(MealPage);

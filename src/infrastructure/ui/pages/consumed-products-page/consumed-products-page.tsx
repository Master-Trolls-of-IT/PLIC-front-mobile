import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HistoricalPageBlobsTop from '~/infrastructure/ui/pages/historical-page/component/background/historical-page-blobs-top';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import useConsumedProductsData from '~/infrastructure/ui/pages/consumed-products-page/hooks';
import ConsumedProductsPageStyle from '~/infrastructure/ui/pages/consumed-products-page/consumed-products-page-style';

const ConsumedProductsPage = () => {
    const { goBack, consumedProducts } = useConsumedProductsData();

    return (
        <View style={ConsumedProductsPageStyle.container}>
            <View style={ConsumedProductsPageStyle.background}>
                <HistoricalPageBlobsTop />
                <GenericBackArrowIcon goBack={goBack} />
            </View>

            <GenericHeaderText
                firstText={'Vos Produits'}
                secondText={'Recherchez un produit précedemment consommé'}
                containerStyle={ConsumedProductsPageStyle.headerContainer}
            />

            <SearchList itemType={ItemEnum.ConsumedProducts} data={consumedProducts} />
        </View>
    );
};

export default observer(ConsumedProductsPage);

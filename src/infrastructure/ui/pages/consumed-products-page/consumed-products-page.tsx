import React, { useEffect } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HistoricalPageBlobsTop from '~/infrastructure/ui/pages/historical-page/component/background/historical-page-blobs-top';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import useConsumedProductsData from '~/infrastructure/ui/pages/consumed-products-page/hooks';
import ConsumedProductsPageStyle from '~/infrastructure/ui/pages/consumed-products-page/consumed-products-page-style';
import ConsumedProductItem from '~/infrastructure/ui/shared/component/item/consumed-product-item/consumed-product-item';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-products-props';
import { ProductNutrients } from '~/domain/interfaces/services/product-nutrients';

const ConsumedProductsPage = () => {
    const { goBack } = useConsumedProductsData();
    const consumedProductItems: ConsumedProductItemProps[] = [
        {
            id: '1',
            name: 'Marque',
            description: 'Evian',
            score: NaN,
            image: 'https://images.openfoodfacts.org/images/products/306/832/008/4602/front_fr.47.400.jpg',
            isFavourite: false,
            toggleFavourite: () => {},
            data: {
                carbohydrates: 0,
                energyKcal: 0,
                energyKj: 0,
                fat: 0,
                fiber: 0,
                proteins: 0,
                salt: 0,
                saturatedFat: 0,
                sugar: 0
            },
            style: {}
        }
    ];

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

            <SearchList itemType={ItemEnum.ConsumedProducts} data={consumedProductItems} />
        </View>
    );
};

export default observer(ConsumedProductsPage);

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
        },
        {
            id: '1',
            name: 'Coca Zero',
            description: 'Boisson gazifiée',
            score: NaN,
            image: 'https://images.openfoodfacts.org/images/products/544/900/021/4911/front_fr.200.400.jpg',
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
        },
        {
            id: '1',
            name: 'Nutella biscuit',
            description: 'Biscuits au chocolat',
            score: 2,
            image: 'https://images.openfoodfacts.org/images/products/800/050/031/0427/front_fr.245.400.jpg',
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
        },
        {
            id: '1',
            name: 'Chocapic',
            description: 'Céréales au chocolat',
            score: 6,
            image: 'https://images.openfoodfacts.org/images/products/761/303/462/6844/front_fr.334.400.jpg',
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
        },
        {
            id: '1',
            name: 'Harrys',
            description: 'Pain de mie complet',
            score: 63,
            image: 'https://images.openfoodfacts.org/images/products/322/885/700/0166/front_fr.1772.400.jpg',
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
        },
        {
            id: '1',
            name: 'TUC',
            description: 'Biscuits appéritifs',
            score: 15,
            image: 'https://images.openfoodfacts.org/images/products/541/004/100/1204/front_fr.97.400.jpg',
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
        },
        {
            id: '1',
            name: 'Wasa',
            description: 'Craquottes de blé complet',
            score: 86,
            image: 'https://images.openfoodfacts.org/images/products/730/040/048/1588/front_fr.218.400.jpg',
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
        },
        {
            id: '1',
            name: 'Quaker Oats',
            description: "Flocon d'avoine",
            score: 73,
            image: 'https://images.openfoodfacts.org/images/products/316/893/000/9078/front_fr.197.400.jpg',
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
        },
        {
            id: '1',
            name: 'Bjorg',
            description: 'Gallettes de riz',
            score: 93,
            image: 'https://images.openfoodfacts.org/images/products/322/982/079/4624/front_fr.118.400.jpg',
            isFavourite: false,
            toggleFavourite: () => {},
            data: {
                carbohydrates: 80,
                energyKcal: 390,
                energyKj: 1652,
                fat: 3.5,
                fiber: 3.3,
                proteins: 8,
                salt: 0.25,
                saturatedFat: 0.5,
                sugar: 0.5
            },
            style: {}
        },
        {
            id: '1',
            name: 'Siggis',
            description: 'Yaourt à la vanille',
            score: 34,
            image: 'https://images.openfoodfacts.org/images/products/302/329/003/0608/front_fr.88.400.jpg',
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
        },
        {
            id: '1',
            name: 'Danette',
            description: 'Crème dessert au chocolat',
            score: 21,
            image: 'https://images.openfoodfacts.org/images/products/303/349/127/9713/front_fr.22.400.jpg',
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
        },
        {
            id: '1',
            name: 'Mikado',
            description: 'Batonnets au chocolat',
            score: 13,
            image: 'https://images.openfoodfacts.org/images/products/301/776/068/6792/front_fr.184.400.jpg',
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

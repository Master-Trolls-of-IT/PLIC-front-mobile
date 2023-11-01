import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import useSearchListData from '~/infrastructure/ui/shared/component/item/search-list/hooks';
import SearchListStyle from '~/infrastructure/ui/shared/component/item/search-list/search-list-style';
import HistoricalItem from '~/infrastructure/ui/shared/component/item/historical-item/historical-item';
import { SearchListProps } from '~/domain/interfaces/props/search-list/search-list-props';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/item/historical-item/historical-item-props';
import ConsumedProductItem from '~/infrastructure/ui/shared/component/item/consumed-product-item/consumed-product-item';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import MealItem from '~/infrastructure/ui/shared/component/item/meal-item/meal-item';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';
import MealProductsItem from '~/infrastructure/ui/shared/component/item/meal-products-item/meal-products-item';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { MealProductsItemProps } from '~/domain/interfaces/props/search-list/item/meal-products-item/meal-products-item-props';
import RecipeItem from '~/infrastructure/ui/shared/component/item/recipe-item/recipe-item';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';

const SearchList = ({ itemType, data }: SearchListProps) => {
    const { containerHeight, displayData, onSearch, searchedText, onSelectedFilter, filterOptions, customFontBold } =
        useSearchListData(itemType, data);

    return (
        <View style={{ ...SearchListStyle.container, ...containerHeight }}>
            {itemType != ItemEnum.MealProducts && (
                <View style={SearchListStyle.searchContainer}>
                    <GenericInput
                        placeHolder="Rechercher un produit"
                        type={InputEnum.Search}
                        input={searchedText}
                        dispatch={onSearch}
                        onSelectFilter={onSelectedFilter}
                        filterOptions={filterOptions}
                    />
                </View>
            )}

            <ScrollView style={SearchListStyle.listContainer}>
                {displayData.length > 0 ? (
                    displayData.map((item, idx) => {
                        switch (itemType) {
                            case ItemEnum.Historical:
                                return (
                                    <HistoricalItem
                                        key={idx}
                                        {...(item as HistoricalItemProps)}
                                        style={idx === 0 ? { marginTop: 0 } : {}}
                                    />
                                );
                            case ItemEnum.ConsumedProducts:
                                return (
                                    <ConsumedProductItem
                                        key={idx}
                                        {...(item as ConsumedProductItemProps)}
                                        style={idx === 0 ? { marginTop: 0 } : {}}
                                    />
                                );
                            case ItemEnum.Meal:
                                return (
                                    <MealItem
                                        key={idx}
                                        {...(item as MealItemProps)}
                                        style={idx === 0 ? { marginTop: 0 } : {}}
                                    />
                                );
                            case ItemEnum.MealProducts:
                                return (
                                    <MealProductsItem
                                        key={idx}
                                        {...(item as MealProductsItemProps)}
                                        style={idx === 0 ? { marginTop: 0 } : {}}
                                    />
                                );
                            case ItemEnum.Recipe:
                                console.log(item);
                                return (
                                    <RecipeItem
                                        key={idx}
                                        {...(item as RecipeItemProps)}
                                        style={idx === 0 ? { marginTop: 0 } : {}}
                                    />
                                );
                        }
                    })
                ) : (
                    <Text style={{ ...SearchListStyle.noData, ...customFontBold.text }}>
                        {'Aucun produit enregistré'}
                    </Text>
                )}
            </ScrollView>
        </View>
    );
};

export default observer(SearchList);

import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import useSearchListData from '~/infrastructure/ui/shared/component/item/search-list/hooks';
import SearchListStyle from '~/infrastructure/ui/shared/component/item/search-list/search-list-style';
import HistoricalItem from '~/infrastructure/ui/shared/component/item/historical-item/historical-item';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { SearchListProps } from '~/domain/interfaces/props/search-list/search-list-props';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import ConsumedProductItem from '~/infrastructure/ui/shared/component/item/consumed-product-item/consumed-product-item';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';
import MealItem from '~/infrastructure/ui/shared/component/item/meal-item/meal-item';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';

const SearchList = ({ itemType, data }: SearchListProps) => {
    const {
        displayData,
        onSearch,
        searchedText,
        onSelectedFilter,
        filterOptions,
        customFontBold,
        searchListContainerStyle
    } = useSearchListData(itemType, data);

    return (
        <View style={searchListContainerStyle}>
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

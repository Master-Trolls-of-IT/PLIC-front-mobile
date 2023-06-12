import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import useSearchListData from '~/infrastructure/ui/shared/component/card/search-list/hooks';
import SearchListStyle from '~/infrastructure/ui/shared/component/card/search-list/search-list-style';
import HistoricalCard from '~/infrastructure/ui/shared/component/card/historical-card/historical-card';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { SearchListProps } from '~/domain/interfaces/props/search-list/search-list-props';
import { CardEnum } from '~/domain/interfaces/enum/card-enum';
import { HistoricalCardProps } from '~/domain/interfaces/props/search-list/historical-card-props';

const SearchList = ({ itemType, data }: SearchListProps) => {
    const { displayData, onSearch, searchedText, onSelectedFilter, filterOptions, customFontBold } = useSearchListData(
        itemType,
        data
    );
    return (
        <View style={SearchListStyle.container}>
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
                            case CardEnum.Historical:
                                return (
                                    <HistoricalCard
                                        key={idx}
                                        {...(item as HistoricalCardProps)}
                                        style={idx === 0 ? { marginTop: 0 } : {}}
                                    />
                                );
                        }
                    })
                ) : (
                    <Text style={{ ...SearchListStyle.noData, ...customFontBold.text }}>
                        {"Désolé nous n'avons rien à afficher \u{1F605}"}
                    </Text>
                )}
            </ScrollView>
        </View>
    );
};

export default SearchList;

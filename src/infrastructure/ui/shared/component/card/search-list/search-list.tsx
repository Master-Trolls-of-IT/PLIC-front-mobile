import React from 'react';
import { ScrollView, View } from 'react-native';
import useSearchListData from '~/infrastructure/ui/shared/component/card/search-list/hooks';
import SearchListStyle from '~/infrastructure/ui/shared/component/card/search-list/search-list-style';
import HistoricalCard from '~/infrastructure/ui/shared/component/card/historical-card/historical-card';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';

const SearchList = () => {
    const { displayData, onSearch, searchedText } = useSearchListData();
    return (
        <View style={SearchListStyle.container}>
            <View style={SearchListStyle.searchContainer}>
                <GenericInput
                    placeHolder="Rechercher un produit"
                    type={InputEnum.Search}
                    input={searchedText}
                    dispatch={onSearch}
                />
            </View>
            <ScrollView style={SearchListStyle.listContainer}>
                {displayData.map((item, idx) => (
                    <HistoricalCard key={idx} {...item} style={idx === 0 ? { marginTop: 0 } : {}} />
                ))}
            </ScrollView>
        </View>
    );
};

export default SearchList;

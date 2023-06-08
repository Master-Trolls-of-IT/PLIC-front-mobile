import React from 'react';
import { ScrollView, View } from 'react-native';
import { SearchListProps } from '~/domain/interfaces/props/search-list-props';
import useSearchListData from '~/infrastructure/ui/shared/component/card/search-list/hooks';
import SearchListStyle from '~/infrastructure/ui/shared/component/card/search-list/search-list-style';
import HistoricalCard from '~/infrastructure/ui/shared/component/card/historical-card/historical-card';

const SearchList = ({ itemType }: SearchListProps) => {
    const { mockedData } = useSearchListData();
    return (
        <View style={SearchListStyle.container}>
            <View></View>
            <ScrollView style={SearchListStyle.listContainer}>
                {mockedData.map((item, idx) => (
                    <HistoricalCard key={idx} {...item} />
                ))}
            </ScrollView>
        </View>
    );
};

export default SearchList;

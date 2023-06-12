import { useCallback, useState } from 'react';
import { HistoricalCardProps } from '~/domain/interfaces/props/search-list/historical-card-props';
import { CardEnum } from '~/domain/interfaces/enum/card-enum';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { SearchListData, SearchListInputType } from '~/domain/interfaces/props/search-list/search-list-data-props';
import { MealCardProps } from '~/domain/interfaces/props/search-list/meal-card-props';

const useSearchListData = (inputType: SearchListInputType, data: SearchListData) => {
    const [searchedText, setSearchedText] = useState('');

    const mockedData = (() => {
        switch (inputType) {
            case CardEnum.Meal:
                return data as MealCardProps[];
            case CardEnum.Historical:
                return data as HistoricalCardProps[];
        }
    })();

    const [displayData, setDisplayData] = useState<HistoricalCardProps[] | MealCardProps[]>(mockedData);

    const onSearch = (search: string) => {
        setSearchedText(search);
        setDisplayData((prevState) => {
            switch (inputType) {
                case CardEnum.Historical:
                    return (mockedData as HistoricalCardProps[]).filter(
                        (card) => card.name.includes(search) || card.description.includes(search)
                    );
                default:
                    return prevState;
            }
        });
    };

    const onSelectedFilter = useCallback(
        (item: { label: string; value: string }) => {
            switch (inputType) {
                case CardEnum.Historical:
                    return (() => {
                        switch (item.value) {
                            case 'aphaasc':
                                setDisplayData(
                                    [...(mockedData as HistoricalCardProps[])].sort((a, b) =>
                                        a.name.localeCompare(b.name)
                                    )
                                );
                                break;
                            case 'aphades':
                                setDisplayData(
                                    [...(mockedData as HistoricalCardProps[])]
                                        .sort((a, b) => a.name.localeCompare(b.name))
                                        .reverse()
                                );
                                break;
                            case 'scoreasc':
                                setDisplayData(
                                    [...(mockedData as HistoricalCardProps[])].sort((a, b) => a.score - b.score)
                                );
                                break;
                            case 'scoredes':
                                setDisplayData(
                                    [...(mockedData as HistoricalCardProps[])].sort((a, b) => b.score - a.score)
                                );
                                break;
                            case 'favasc':
                                setDisplayData(
                                    [...(mockedData as HistoricalCardProps[])].filter((elem) => elem.isFavourite)
                                );
                                break;
                            case 'favdes':
                                setDisplayData(
                                    [...(mockedData as HistoricalCardProps[])].filter((elem) => !elem.isFavourite)
                                );
                                break;
                            default:
                                setDisplayData(mockedData);
                        }
                    })();
                default:
            }
        },
        [inputType, mockedData]
    );

    const filterOptions: { label: string; value: string }[] = (() => {
        const baseFilters = [{ label: 'Aucun', value: 'none' }];
        switch (inputType) {
            case CardEnum.Historical:
                return baseFilters.concat([
                    { label: 'Nom par ordre alphabétique \u{25B2}', value: 'aphaasc' },
                    { label: 'Nom par ordre alphabétique \u{25BC}', value: 'aphades' },
                    { label: 'Eco-Score \u{25B2}', value: 'scoreasc' },
                    { label: 'Eco-Score \u{25BC}', value: 'scoredes' },
                    { label: 'Favoris', value: 'favasc' },
                    { label: 'Non Favoris', value: 'favdes' }
                ]);
            default:
                return baseFilters;
        }
    })();

    const customFontBold = CustomFontInterBold();

    return {
        displayData,
        searchedText,
        onSearch,
        onSelectedFilter,
        filterOptions,
        customFontBold
    };
};

export default useSearchListData;

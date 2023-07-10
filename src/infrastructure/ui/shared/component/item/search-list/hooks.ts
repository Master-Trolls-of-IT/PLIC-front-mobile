import { useCallback, useMemo, useState } from 'react';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { SearchListData, SearchListInputType } from '~/domain/interfaces/props/search-list/search-list-data-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-products-props';

const useSearchListData = (inputType: SearchListInputType, data: SearchListData) => {
    const [searchedText, setSearchedText] = useState('');

    const mockedData = useMemo(() => {
        console.log('test', data);
        switch (inputType) {
            case ItemEnum.Meal:
                return data as MealItemProps[];
            case ItemEnum.Historical:
                return data as HistoricalItemProps[];
            case ItemEnum.ConsumedProducts:
                return data as ConsumedProductItemProps[];
        }
    }, [data]);

    const [displayData, setDisplayData] = useState<
        HistoricalItemProps[] | MealItemProps[] | ConsumedProductItemProps[]
    >(mockedData);

    const onSearch = (search: string) => {
        setSearchedText(search);
        setDisplayData((prevState) => {
            switch (inputType) {
                case ItemEnum.Historical:
                    return (mockedData as HistoricalItemProps[]).filter(
                        (Item) => Item.name.includes(search) || Item.description.includes(search)
                    );
                case ItemEnum.ConsumedProducts:
                    return (mockedData as ConsumedProductItemProps[]).filter(
                        (Item) => Item.name.includes(search) || Item.description.includes(search)
                    );
                default:
                    return prevState;
            }
        });
    };

    const onSelectedFilter = useCallback(
        (item: { label: string; value: string }) => {
            switch (inputType) {
                case ItemEnum.Historical:
                    return (() => {
                        switch (item.value) {
                            case 'aphaasc':
                                setDisplayData(
                                    [...(mockedData as HistoricalItemProps[])].sort((a, b) =>
                                        a.name.localeCompare(b.name)
                                    )
                                );
                                break;
                            case 'aphades':
                                setDisplayData(
                                    [...(mockedData as HistoricalItemProps[])]
                                        .sort((a, b) => a.name.localeCompare(b.name))
                                        .reverse()
                                );
                                break;
                            case 'scoreasc':
                                setDisplayData(
                                    [...(mockedData as HistoricalItemProps[])].sort((a, b) => a.score - b.score)
                                );
                                break;
                            case 'scoredes':
                                setDisplayData(
                                    [...(mockedData as HistoricalItemProps[])].sort((a, b) => b.score - a.score)
                                );
                                break;
                            case 'favasc':
                                setDisplayData(
                                    [...(mockedData as HistoricalItemProps[])].filter((elem) => elem.isFavourite)
                                );
                                break;
                            case 'favdes':
                                setDisplayData(
                                    [...(mockedData as HistoricalItemProps[])].filter((elem) => !elem.isFavourite)
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
            case ItemEnum.Historical:
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

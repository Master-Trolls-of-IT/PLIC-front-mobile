import { useCallback, useEffect, useMemo, useState } from 'react';
import { Dimensions } from 'react-native';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { SearchListData, SearchListInputType } from '~/domain/interfaces/props/search-list/search-list-data-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';
import SearchListStyle from '~/infrastructure/ui/shared/component/item/search-list/search-list-style';

const useSearchListData = (inputType: SearchListInputType, data: SearchListData) => {
    const [searchedText, setSearchedText] = useState('');

    const mockedData = useMemo(() => {
        switch (inputType) {
            case ItemEnum.Meal:
                return data as MealItemProps[];
            case ItemEnum.Historical:
                return data as HistoricalItemProps[];
            case ItemEnum.ConsumedProducts:
                return data as ConsumedProductItemProps[];
        }
    }, [data, inputType]);

    const [displayData, setDisplayData] = useState<
        HistoricalItemProps[] | MealItemProps[] | ConsumedProductItemProps[]
    >(mockedData);

    useEffect(() => {
        setDisplayData(data);
    }, [data]);
    const onSearch = (search: string) => {
        setSearchedText(search);
        setDisplayData((prevState) => {
            switch (inputType) {
                case ItemEnum.Historical:
                    return (mockedData as HistoricalItemProps[]).filter(
                        (Item) => Item.name.includes(search) || Item.name.includes(search)
                    );
                case ItemEnum.ConsumedProducts:
                    return (mockedData as ConsumedProductItemProps[]).filter(
                        (Item) => Item.name.includes(search) || Item.name.includes(search)
                    );
                case ItemEnum.Meal:
                    return (mockedData as MealItemProps[]).filter(
                        (Item) => Item.title.includes(search) || Item.title.includes(search)
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
                                    [...(mockedData as HistoricalItemProps[])].filter((elem) => elem.isFavorite)
                                );
                                break;
                            case 'favdes':
                                setDisplayData(
                                    [...(mockedData as HistoricalItemProps[])].filter((elem) => !elem.isFavorite)
                                );
                                break;
                            default:
                                setDisplayData(mockedData);
                        }
                    })();
                case ItemEnum.ConsumedProducts:
                    return (() => {
                        switch (item.value) {
                            case 'aphaasc':
                                setDisplayData(
                                    [...(mockedData as ConsumedProductItemProps[])].sort((a, b) =>
                                        a.name.localeCompare(b.name)
                                    )
                                );
                                break;
                            case 'aphades':
                                setDisplayData(
                                    [...(mockedData as ConsumedProductItemProps[])]
                                        .sort((a, b) => a.name.localeCompare(b.name))
                                        .reverse()
                                );
                                break;
                            case 'scoreasc':
                                setDisplayData(
                                    [...(mockedData as ConsumedProductItemProps[])].sort((a, b) => a.score - b.score)
                                );
                                break;
                            case 'scoredes':
                                setDisplayData(
                                    [...(mockedData as ConsumedProductItemProps[])].sort((a, b) => b.score - a.score)
                                );
                                break;
                            case 'favasc':
                                setDisplayData(
                                    [...(mockedData as ConsumedProductItemProps[])].filter((elem) => elem.isFavourite)
                                );
                                break;
                            case 'favdes':
                                setDisplayData(
                                    [...(mockedData as ConsumedProductItemProps[])].filter((elem) => !elem.isFavourite)
                                );
                                break;
                            default:
                                setDisplayData(mockedData);
                        }
                    })();
                case ItemEnum.Meal:
                    return (() => {
                        switch (item.value) {
                            case 'aphaasc':
                                setDisplayData(
                                    [...(mockedData as MealItemProps[])].sort((a, b) => a.title.localeCompare(b.title))
                                );
                                break;
                            case 'aphades':
                                setDisplayData(
                                    [...(mockedData as MealItemProps[])]
                                        .sort((a, b) => a.title.localeCompare(b.title))
                                        .reverse()
                                );
                                break;
                            case 'scoreasc':
                                setDisplayData([...(mockedData as MealItemProps[])].sort((a, b) => a.score - b.score));
                                break;
                            case 'scoredes':
                                setDisplayData([...(mockedData as MealItemProps[])].sort((a, b) => b.score - a.score));
                                break;
                            case 'favasc':
                                setDisplayData([...(mockedData as MealItemProps[])].filter((elem) => elem.isFavorite));
                                break;
                            case 'favdes':
                                setDisplayData(
                                    [...(mockedData as MealItemProps[])].filter((elem) => !elem.isFavorite)
                                );
                                break;
                            case 'prodasc':
                                setDisplayData(
                                    [...(mockedData as MealItemProps[])].sort(
                                        (a, b) => a.numberOfProducts - b.numberOfProducts
                                    )
                                );
                                break;
                            case 'proddes':
                                setDisplayData(
                                    [...(mockedData as MealItemProps[])].sort(
                                        (a, b) => b.numberOfProducts - a.numberOfProducts
                                    )
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
            case ItemEnum.ConsumedProducts:
                return baseFilters.concat([
                    { label: 'Nom par ordre alphabétique \u{25B2}', value: 'aphaasc' },
                    { label: 'Nom par ordre alphabétique \u{25BC}', value: 'aphades' },
                    { label: 'Eco-Score \u{25B2}', value: 'scoreasc' },
                    { label: 'Eco-Score \u{25BC}', value: 'scoredes' },
                    { label: 'Favoris', value: 'favasc' },
                    { label: 'Non Favoris', value: 'favdes' }
                ]);
            case ItemEnum.Meal:
                return baseFilters.concat([
                    { label: 'Nom par ordre alphabétique \u{25B2}', value: 'aphaasc' },
                    { label: 'Nom par ordre alphabétique \u{25BC}', value: 'aphades' },
                    { label: 'Eco-Score \u{25B2}', value: 'scoreasc' },
                    { label: 'Eco-Score \u{25BC}', value: 'scoredes' },
                    { label: 'Favoris', value: 'favasc' },
                    { label: 'Non Favoris', value: 'favdes' },
                    { label: 'Nombre de Produits \u{25B2}', value: 'prodasc' },
                    { label: 'Nombre de Produits \u{25BC}', value: 'proddec' }
                ]);
            default:
                return baseFilters;
        }
    })();

    const searchListContainerStyle = useMemo(() => {
        switch (inputType) {
            case ItemEnum.Meal:
                return { ...SearchListStyle.container, height: 0.57 * Dimensions.get('screen').height };
            default:
                return { ...SearchListStyle.container, height: 0.68 * Dimensions.get('screen').height };
        }
    }, [inputType]);
    const customFontBold = CustomFontInterBold();

    return {
        displayData,
        searchedText,
        onSearch,
        onSelectedFilter,
        filterOptions,
        customFontBold,
        searchListContainerStyle
    };
};

export default useSearchListData;

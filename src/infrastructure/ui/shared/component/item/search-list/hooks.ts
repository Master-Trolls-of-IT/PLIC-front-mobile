import { useCallback, useEffect, useMemo, useState } from 'react';
import { Dimensions } from 'react-native';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/item/historical-item/historical-item-props';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { SearchListData, SearchListInputType } from '~/domain/interfaces/props/search-list/search-list-data-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import { MealProductsItemProps } from '~/domain/interfaces/props/search-list/item/meal-products-item/meal-products-item-props';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';
import { compareStrings } from '~/infrastructure/ui/shared/helper/compare-strings';

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
            case ItemEnum.MealProducts:
                return data as MealProductsItemProps[];
            case ItemEnum.Recipe:
                return data as RecipeItemProps[];
        }
    }, [data, inputType]);

    const [displayData, setDisplayData] = useState<
        | HistoricalItemProps[]
        | MealItemProps[]
        | ConsumedProductItemProps[]
        | MealProductsItemProps[]
        | RecipeItemProps[]
    >(mockedData);

    useEffect(() => {
        setDisplayData(data ?? []);
    }, [data]);

    const onSearch = (search: string) => {
        setSearchedText(search);
        setDisplayData((prevState) => {
            switch (inputType) {
                case ItemEnum.Historical:
                    return (mockedData as HistoricalItemProps[]).filter(
                        (item) => compareStrings(item.name, search) || compareStrings(item.name, search)
                    );
                case ItemEnum.ConsumedProducts:
                    return (mockedData as ConsumedProductItemProps[]).filter(
                        (item) => compareStrings(item.name, search) || compareStrings(item.name, search)
                    );
                case ItemEnum.Meal:
                    return (mockedData as MealItemProps[]).filter(
                        (item) => compareStrings(item.title, search) || compareStrings(item.title, search)
                    );
                case ItemEnum.Recipe:
                    return (mockedData as RecipeItemProps[]).filter(
                        (item) =>
                            compareStrings(item.recipeItem.title, search) ||
                            compareStrings(item.recipeItem.title, search)
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
                                setDisplayData([...(mockedData as MealItemProps[])].filter((elem) => elem.isFavourite));
                                break;
                            case 'favdes':
                                setDisplayData(
                                    [...(mockedData as MealItemProps[])].filter((elem) => !elem.isFavourite)
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
                case ItemEnum.Recipe:
                    return (() => {
                        switch (item.value) {
                            case 'aphaasc':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])].sort((a, b) =>
                                        a.recipeItem.title.localeCompare(b.recipeItem.title)
                                    )
                                );
                                break;
                            case 'aphades':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])]
                                        .sort((a, b) => a.recipeItem.title.localeCompare(b.recipeItem.title))
                                        .reverse()
                                );
                                break;
                            case 'scoreasc':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])].sort(
                                        (a, b) => a.recipeItem.score - b.recipeItem.score
                                    )
                                );
                                break;
                            case 'scoredes':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])].sort(
                                        (a, b) => b.recipeItem.score - a.recipeItem.score
                                    )
                                );
                                break;
                            case 'favasc':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])].filter((elem) => elem.recipeItem.isFavourite)
                                );
                                break;
                            case 'favdes':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])].filter(
                                        (elem) => !elem.recipeItem.isFavourite
                                    )
                                );
                                break;
                            case 'ratasc':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])].sort(
                                        (a, b) => a.recipeItem.rating - b.recipeItem.rating
                                    )
                                );
                                break;
                            case 'ratdes':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])].sort(
                                        (a, b) => b.recipeItem.rating - a.recipeItem.rating
                                    )
                                );
                                break;
                            case 'numbratasc':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])].sort(
                                        (a, b) => a.recipeItem.numberOfRatings - b.recipeItem.numberOfRatings
                                    )
                                );
                                break;
                            case 'numbratdes':
                                setDisplayData(
                                    [...(mockedData as RecipeItemProps[])].sort(
                                        (a, b) => b.recipeItem.numberOfRatings - a.recipeItem.numberOfRatings
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
            case ItemEnum.Recipe:
                return baseFilters.concat([
                    { label: 'Nom par ordre alphabétique \u{25B2}', value: 'aphaasc' },
                    { label: 'Nom par ordre alphabétique \u{25BC}', value: 'aphades' },
                    { label: 'Eco-Score \u{25B2}', value: 'scoreasc' },
                    { label: 'Eco-Score \u{25BC}', value: 'scoredes' },
                    { label: 'Favoris', value: 'favasc' },
                    { label: 'Non Favoris', value: 'favdes' },
                    { label: 'Les mieux notées \u{25B2}', value: 'ratasc' },
                    { label: 'Les moins bien notées \u{25BC}', value: 'ratdec' },
                    { label: "Le plus d'avis \u{25B2}", value: 'numbratasc' },
                    { label: "Le moins d'avis \u{25BC}", value: 'numbratdes' }
                ]);
            default:
                return baseFilters;
        }
    })();

    const customFontBold = CustomFontInterBold();

    const containerHeight =
        inputType == ItemEnum.MealProducts
            ? { height: 0.42 * Dimensions.get('screen').height }
            : { height: 0.67 * Dimensions.get('screen').height };

    return {
        containerHeight,
        displayData,
        searchedText,
        onSearch,
        onSelectedFilter,
        filterOptions,
        customFontBold
    };
};

export default useSearchListData;

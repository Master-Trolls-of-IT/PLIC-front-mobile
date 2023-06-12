import { useState } from 'react';
import { HistoricalCardProps } from '~/domain/interfaces/props/historical-card-props';

const useSearchListData = () => {
    const [searchedText, setSearchedText] = useState('');

    const mockedData: HistoricalCardProps[] = [
        {
            name: 'Bonsoir',
            description: 'Mélange de fruits secs et pétales chocolat',
            score: 26,
            data: {
                energy: 2000,
                sugar: 500,
                lipid: 500,
                carbohydrate: 500,
                fattyAcide: 500,
                fiber: 500,
                salt: 500,
                protein: 500
            },
            isFavourite: true,
            toggleFavourite: () => {}
        },
        {
            name: 'Coucou',
            description: 'Mélange de fruits secs et pétales chocolat',
            score: 56,
            data: {
                energy: 2000,
                sugar: 500,
                lipid: 500,
                carbohydrate: 500,
                fattyAcide: 500,
                fiber: 500,
                salt: 500,
                protein: 500
            },
            isFavourite: true,
            toggleFavourite: () => {}
        },
        {
            name: 'Bonjour',
            description: 'Mélange de fruits secs et pétales chocolat',
            score: 76,
            data: {
                energy: 2000,
                sugar: 500,
                lipid: 500,
                carbohydrate: 500,
                fattyAcide: 500,
                fiber: 500,
                salt: 500,
                protein: 500
            },
            isFavourite: true,
            toggleFavourite: () => {}
        },
        {
            name: 'Granola',
            description: 'Mélange de fruits secs et pétales chocolat',
            score: 26,
            data: {
                energy: 2000,
                sugar: 500,
                lipid: 500,
                carbohydrate: 500,
                fattyAcide: 500,
                fiber: 500,
                salt: 500,
                protein: 500
            },
            isFavourite: true,
            toggleFavourite: () => {}
        },
        {
            name: 'Alesta',
            description: 'Mélange de fruits secs et pétales chocolat',
            score: 56,
            data: {
                energy: 2000,
                sugar: 500,
                lipid: 500,
                carbohydrate: 500,
                fattyAcide: 500,
                fiber: 500,
                salt: 500,
                protein: 500
            },
            isFavourite: true,
            toggleFavourite: () => {}
        }
    ];

    // TODO: Lors que l'endpoint API sera faite il faudra remplacer le mockedData par un appel pour récupérer la liste des éléments

    const [displayData, setDisplayData] = useState<HistoricalCardProps[]>(mockedData);

    const onSearch = (search: string) => {
        setSearchedText(search);
        setDisplayData(() => {
            return mockedData.filter((card) => card.name.includes(search) || card.description.includes(search));
        });
    };

    return {
        displayData,
        searchedText,
        onSearch
    };
};

export default useSearchListData;

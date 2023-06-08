import { HistoricalCardProps } from '~/domain/interfaces/props/historical-card-props';

const useSearchListData = () => {
    const mockedData: HistoricalCardProps[] = [
        {
            name: 'Alesto',
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
            name: 'Alesto',
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
            name: 'Alesto',
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
        }
    ];
    return {
        mockedData
    };
};

export default useSearchListData;

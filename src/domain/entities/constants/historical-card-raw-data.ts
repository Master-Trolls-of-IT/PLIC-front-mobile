import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';

export const historicalItemRawData: HistoricalItemProps[] = [
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
        isFavourite: false,
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
        image: 'https://images.openfoodfacts.org/images/products/500/011/255/4359/front_fr.28.400.jpg',
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
        isFavourite: false,
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

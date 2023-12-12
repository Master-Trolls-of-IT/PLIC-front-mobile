import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';

export const MockedMeal: MealItemProps[] = [
    {
        id: '1',
        title: 'Riz au poisson',
        email: 'exemple@email.com',
        score: 79,
        numberOfProducts: 2,
        products: [
            {
                id: 'p1',
                brand: 'Marque1',
                name: 'Riz',
                barcode: '123456789',
                nutrients: {
                    energyKj: 120,
                    energyKcal: 50,
                    fat: 0.5,
                    saturatedFat: 0.1,
                    carbohydrates: 25,
                    sugar: 0.5,
                    fiber: 1.5,
                    proteins: 2,
                    salt: 0.01
                },
                image_url: 'url_image_riz',
                nutriscore: { score: 2, grade: 'B' },
                ecoscore: 'A',
                isWater: false,
                serving: 100
            },
            {
                id: 'p2',
                brand: 'Marque2',
                name: 'Poisson',
                barcode: '987654321',
                nutrients: {
                    energyKj: 150,
                    energyKcal: 80,
                    fat: 1.5,
                    saturatedFat: 0.3,
                    carbohydrates: 0,
                    sugar: 0,
                    fiber: 0,
                    proteins: 18,
                    salt: 0.02
                },
                image_url: 'url_image_poisson',
                nutriscore: { score: 3, grade: 'C' },
                ecoscore: 'B',
                isWater: false,
                serving: 150
            }
        ],
        tags: [{ label: 'Équilibré', color: '#4CAF50' }],
        isFavourite: false
    },
    {
        id: '2',
        title: 'Steak Frites',
        email: 'exemple@email.com',
        score: 56,
        numberOfProducts: 2,
        products: [
            {
                id: 'p3',
                brand: 'Marque3',
                name: 'Steak',
                barcode: '987654321',
                nutrients: {
                    energyKj: 200,
                    energyKcal: 120,
                    fat: 5,
                    saturatedFat: 2,
                    carbohydrates: 0,
                    sugar: 0,
                    fiber: 0,
                    proteins: 20,
                    salt: 0.03
                },
                image_url: 'url_image_steak',
                nutriscore: { score: 4, grade: 'D' },
                ecoscore: 'C',
                isWater: false,
                serving: 150
            },
            {
                id: 'p4',
                brand: 'Marque4',
                name: 'Frites',
                barcode: '123456789',
                nutrients: {
                    energyKj: 300,
                    energyKcal: 150,
                    fat: 8,
                    saturatedFat: 1,
                    carbohydrates: 30,
                    sugar: 0,
                    fiber: 3,
                    proteins: 2,
                    salt: 0.02
                },
                image_url: 'url_image_frites',
                nutriscore: { score: 2, grade: 'B' },
                ecoscore: 'A',
                isWater: false,
                serving: 100
            }
        ],
        tags: [{ label: 'Proteiné', color: '#2196F3' }],
        isFavourite: true
    },
    {
        id: '3',
        title: 'Salade César',
        email: 'exemple@email.com',
        score: 72,
        numberOfProducts: 3,
        products: [
            {
                id: 'p5',
                brand: 'Marque5',
                name: 'Laitue',
                barcode: '135792468',
                nutrients: {
                    energyKj: 50,
                    energyKcal: 20,
                    fat: 0.2,
                    saturatedFat: 0.1,
                    carbohydrates: 3,
                    sugar: 1,
                    fiber: 2,
                    proteins: 1,
                    salt: 0.01
                },
                image_url: 'url_image_laitue',
                nutriscore: { score: 1, grade: 'A' },
                ecoscore: 'A',
                isWater: true,
                serving: 100
            },
            {
                id: 'p6',
                brand: 'Marque6',
                name: 'Poulet Grillé',
                barcode: '246813579',
                nutrients: {
                    energyKj: 250,
                    energyKcal: 120,
                    fat: 3,
                    saturatedFat: 0.5,
                    carbohydrates: 0,
                    sugar: 0,
                    fiber: 0,
                    proteins: 25,
                    salt: 0.02
                },
                image_url: 'url_image_poulet',
                nutriscore: { score: 3, grade: 'C' },
                ecoscore: 'B',
                isWater: false,
                serving: 150
            },
            {
                id: 'p7',
                brand: 'Marque7',
                name: 'Croûtons',
                barcode: '987654321',
                nutrients: {
                    energyKj: 100,
                    energyKcal: 50,
                    fat: 2,
                    saturatedFat: 0.3,
                    carbohydrates: 8,
                    sugar: 0,
                    fiber: 1,
                    proteins: 1,
                    salt: 0.01
                },
                image_url: 'url_image_croûtons',
                nutriscore: { score: 2, grade: 'B' },
                ecoscore: 'A',
                isWater: false,
                serving: 50
            }
        ],
        tags: [{ label: 'Léger', color: '#8BC34A' }],
        isFavourite: false
    }
];

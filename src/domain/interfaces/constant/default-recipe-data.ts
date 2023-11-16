import { RecipeItemInfo } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-info';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';

export const defaultRecipeData: RecipeItemProps[] = [
    {
        style: {},
        recipeItem: {
            id: '1',
            title: 'DELICIOUS PASTA',
            score: 4.5,
            rating: 4.5,
            numberOfRatings: 45,
            duration: 4,
            difficulty: 'tres dur',
            ingredients: [
                'Pasta',
                'Tomato Sauce',
                'Cheese',
                'test',
                'estt',
                'klfmd',
                'Pasta',
                'Tomato Sauce',
                'Cheese',
                'test',
                'estt',
                'klfmd'
            ],
            steps: ['Boil pasta', 'Add tomato sauce', 'Sprinkle cheese', 'Enjoy!', 'test'],
            kcal: 350,
            image: 'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/dossier-de-la-redac/plat-familial-en-sauce/97666601-1-fre-FR/Un-plat-familial-en-sauce-comme-chez-mamie.jpg',
            author: 'Chef John',
            isFavourite: true,
            tags: [
                {
                    label: 'epicé',
                    color: 'red'
                },
                { label: 'sauce', color: 'green' }
            ]
        }
    }
];

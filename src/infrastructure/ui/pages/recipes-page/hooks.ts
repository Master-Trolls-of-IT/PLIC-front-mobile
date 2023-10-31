import { RecipeItemProps } from 'src/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';

const useRecipePageData = () => {
    const recipeList: RecipeItemProps[] = [
        {
            id: '1',
            image: 'https://images.openfoodfacts.org/images/products/885/205/213/5306/front_en.12.400.jpg',
            title: 'Lasagnes au four',
            rating: 4.5,
            numberOfRatings: 25,
            duration: 30,
            difficulty: 'Facile',
            score: 42,
            ingredients: ['Feuilles de lasagne', 'Viande hachée', 'Sauce tomate', 'Fromage', 'Oignon'],
            author: 'Chef Paolo',
            steps: [
                'Faites cuire les feuilles de lasagne.',
                'Préparez la sauce à la viande en faisant sauter la viande hachée et les oignons, puis ajoutez la sauce tomate.',
                'Montez les lasagnes en alternant les couches de pâtes, de sauce à la viande et de fromage.',
                'Enfournez jusquà ce que le fromage soit doré.'
            ],
            tags: [
                { label: 'Lasagnes', color: 'red' },
                { label: 'Italien', color: 'green' },
                { label: 'Plat principal', color: 'blue' }
            ],
            isFavourite: true,
            kcal: 480
        },
        {
            id: '2',
            image: 'https://images.openfoodfacts.org/images/products/885/205/213/5306/front_en.12.400.jpg',
            title: 'Salade César',
            rating: 4.0,
            numberOfRatings: 30,
            duration: 20,
            difficulty: 'Facile',
            score: 38,
            ingredients: ['Laitue romaine', 'Poulet grillé', 'Croûtons', 'Parmesan', 'Sauce César'],
            author: 'Chef Julia',
            steps: [
                'Lavez et coupez la laitue romaine en morceaux.',
                'Ajoutez le poulet grillé, les croûtons et le parmesan.',
                'Arrosez de sauce César et mélangez.'
            ],
            tags: [
                { label: 'Salade', color: 'green' },
                { label: 'Poulet', color: 'orange' },
                { label: 'Entrée', color: 'yellow' }
            ],
            isFavourite: false,
            kcal: 350
        },
        {
            id: '3',
            image: 'https://images.openfoodfacts.org/images/products/885/205/213/5306/front_en.12.400.jpg',
            title: 'Pâtes Carbonara',
            rating: 4.7,
            numberOfRatings: 28,
            duration: 20,
            difficulty: 'Facile',
            score: 90,
            ingredients: ['Spaghetti', 'Guanciale', 'Œufs', 'Parmesan', 'Poivre noir'],
            author: 'Chef Giuseppe',
            steps: [
                'Faites cuire les spaghetti al dente.',
                'Faites sauter le guanciale dans une poêle jusquà ce quil soit croustillant.',
                'Mélangez les œufs et le parmesan dans un bol pour former une sauce.',
                'Égouttez les spaghetti et mélangez-les avec le guanciale croustillant et la sauce aux œufs.'
            ],
            tags: [
                { label: 'Pâtes', color: 'yellow' },
                { label: 'Italien', color: 'green' },
                { label: 'Plat principal', color: 'red' }
            ],
            isFavourite: true,
            kcal: 450
        },
        {
            id: '4',
            image: 'https://images.openfoodfacts.org/images/products/885/205/213/5306/front_en.12.400.jpg',
            title: 'Tarte aux pommes',
            rating: 4.2,
            numberOfRatings: 22,
            duration: 50,
            difficulty: 'Moyen',
            score: 38,
            ingredients: ['Pâte brisée', 'Pommes', 'Sucre', 'Cannelle', 'Œuf'],
            author: 'Chef Sophie',
            steps: [
                'Étalez la pâte brisée dans un moule à tarte.',
                'Épluchez et coupez les pommes en fines tranches.',
                'Disposez les tranches de pommes sur la pâte, saupoudrez de sucre et de cannelle.',
                'Repliez les bords de la pâte et badigeonnez dœuf battu.',
                'Faites cuire au four à 180°C jusquà ce que la tarte soit dorée.'
            ],
            tags: [
                { label: 'Dessert', color: 'orange' },
                { label: 'Pommes', color: 'red' },
                { label: 'Pâtisserie', color: 'brown' }
            ],
            isFavourite: false,
            kcal: 320
        },
        {
            id: '5',
            image: 'https://images.openfoodfacts.org/images/products/885/205/213/5306/front_en.12.400.jpg',
            title: 'Sushi au saumon',
            rating: 4.9,
            numberOfRatings: 39,
            duration: 40,
            difficulty: 'Difficile',
            score: 75,
            ingredients: ['Riz à sushi', 'Saumon frais', 'Nori', 'Wasabi', 'Soyu'],
            author: 'Chef Hiroshi',
            steps: [
                'Préparez le riz à sushi et le laissez refroidir.',
                'Coupez le saumon en fines tranches.',
                'Placez une feuille de nori sur une natte de bambou, étalez le riz, ajoutez le saumon, le wasabi et le soyu.',
                'Roulez le tout et coupez en tranches.'
            ],
            tags: [
                { label: 'Sushi', color: 'blue' },
                { label: 'Saumon', color: 'pink' },
                { label: 'Japonais', color: 'red' }
            ],
            isFavourite: true,
            kcal: 380
        },
        {
            id: '6',
            image: 'https://images.openfoodfacts.org/images/products/885/205/213/5306/front_en.12.400.jpg',
            title: 'Salade de quinoa aux légumes',
            rating: 4.3,
            numberOfRatings: 33,
            duration: 25,
            difficulty: 'Facile',
            score: 99,
            ingredients: ['Quinoa', 'Tomates', 'Concombres', 'Poivrons', 'Vinaigrette'],
            author: 'Chef Marie',
            steps: [
                'Faites cuire le quinoa selon les instructions.',
                'Coupez les tomates, les concombres et les poivrons en dés.',
                'Mélangez le quinoa cuit avec les légumes et la vinaigrette.'
            ],
            tags: [
                { label: 'Salade', color: 'green' },
                { label: 'Quinoa', color: 'yellow' },
                { label: 'Végétarien', color: 'orange' }
            ],
            isFavourite: false,
            kcal: 300
        }
    ];

    const onPressCreateRecipe = () => {}; // TODO

    const onPressShowRecipePage = () => {}; //TODO

    return {
        recipeList,
        onPressCreateRecipe,
        onPressShowRecipePage
    };
};

export default useRecipePageData;

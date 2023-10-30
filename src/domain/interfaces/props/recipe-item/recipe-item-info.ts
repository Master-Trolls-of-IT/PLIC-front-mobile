export type RecipeInfo = {
    id: string;
    name: string;
    score: number;
    ingredients: string[];
    recipe: string[];
    kcal: number;
    image?: string;
    author: string;
    style?: object;
    isFavourite: boolean;
    ecoScore: string;
    nutriscore: NutriScore;
};

type NutriScore = {
    score: number;
    grade: string;
};

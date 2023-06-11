export type ProductInfo = {
    name: string;
    nutrients: ProductNutrients;
    image_url: string;
    nutriscore: NutriScore;
};

type ProductNutrients = {
    energyKj: number;
    energyKcal: number;
    fat: number;
    saturatedFat: number;
    carbohydrates: number;
    sugar: number;
    fiber: number;
    proteins: number;
    salt: number;
};

type NutriScore = {
    score: number;
    grade: string;
};

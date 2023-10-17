export type ProductInfo = {
    id: string;
    brand: string;
    name: string;
    barcode: string;
    nutrients: ProductNutrients;
    image_url: string;
    nutriscore: NutriScore;
    ecoscore: string;
    consumedQuantity?: number;
    iswater: boolean;
    serving: number;
};

export type ProductNutrients = {
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

import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';

const GetDailyNutrientEarned = (consumedProducts: ConsumedProductItemProps[]): [DailyNutrientsType, number] => {
    let newDailyNutrientEarned: DailyNutrientsType = {
        energy: 0,
        carbohydrate: 0,
        lipid: 0,
        protein: 0,
        sugar: 0,
        salt: 0,
        fattyAcid: 0,
        fiber: 0
    };

    let ecoscore = 0;

    consumedProducts.forEach((consumedProduct) => {
        newDailyNutrientEarned = {
            energy:
                newDailyNutrientEarned.energy +
                (consumedProduct.data.energyKcal * consumedProduct.consumedQuantity) / 100,
            carbohydrate:
                newDailyNutrientEarned.carbohydrate +
                (consumedProduct.data.carbohydrates * consumedProduct.consumedQuantity) / 100,
            lipid: newDailyNutrientEarned.lipid + (consumedProduct.data.fat * consumedProduct.consumedQuantity) / 100,
            protein:
                newDailyNutrientEarned.protein +
                (consumedProduct.data.proteins * consumedProduct.consumedQuantity) / 100,
            sugar: newDailyNutrientEarned.sugar + (consumedProduct.data.sugar * consumedProduct.consumedQuantity) / 100,
            salt: newDailyNutrientEarned.salt + (consumedProduct.data.salt * consumedProduct.consumedQuantity) / 100,
            fattyAcid:
                newDailyNutrientEarned.fattyAcid +
                (consumedProduct.data.saturatedFat * consumedProduct.consumedQuantity) / 100,
            fiber: newDailyNutrientEarned.fiber + (consumedProduct.data.fiber * consumedProduct.consumedQuantity) / 100
        };
        ecoscore = ecoscore + (isNaN(consumedProduct.score) ? 0 : consumedProduct.score);
    });

    return [
        {
            energy: Math.round(newDailyNutrientEarned.energy),
            carbohydrate: Math.round(newDailyNutrientEarned.carbohydrate),
            lipid: Math.round(newDailyNutrientEarned.lipid),
            protein: Math.round(newDailyNutrientEarned.protein),
            sugar: Math.round(newDailyNutrientEarned.sugar),
            salt: Math.round(newDailyNutrientEarned.salt),
            fattyAcid: Math.round(newDailyNutrientEarned.fattyAcid),
            fiber: Math.round(newDailyNutrientEarned.fiber)
        },
        Math.round(ecoscore)
    ];
};

export default GetDailyNutrientEarned;

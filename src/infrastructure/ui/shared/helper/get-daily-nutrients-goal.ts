import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';

const GetDailyNutrientsGoal = (basalMetabolism: number): DailyNutrientsType => {
    const energy = basalMetabolism;
    const protein = Math.round((basalMetabolism * 0.15) / 4);
    const carbohydrate = Math.round((basalMetabolism * 0.5) / 4);
    const lipid = Math.round((basalMetabolism * 0.35) / 9);

    return { energy, protein, carbohydrate, lipid };
};

export default GetDailyNutrientsGoal;

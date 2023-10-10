import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';
import { UserData } from '~/domain/interfaces/services/user-data';

const GetDailyNutrientsGoal = (userData: UserData): DailyNutrientsType => {
    const { BasalMetabolism, Sportiveness, Gender } = userData;
    const energy = BasalMetabolism;
    let protein = 0;
    let carbohydrate = 0;
    let lipid = 0;
    switch (Sportiveness) {
        case 0:
            protein = 0.8 * userData.Weight;
            carbohydrate = Math.round((BasalMetabolism * 0.45) / 4);
            lipid = Math.round((BasalMetabolism * 0.2) / 9);
            break;
        case 1:
            protein = 1.2 * userData.Weight;
            carbohydrate = Math.round((BasalMetabolism * 0.5) / 4);
            lipid = Math.round((BasalMetabolism * 0.24) / 9);
            break;
        case 2:
            protein = 1.4 * userData.Weight;
            carbohydrate = Math.round((BasalMetabolism * 0.55) / 4);
            lipid = Math.round((BasalMetabolism * 0.27) / 9);
            break;
        case 3:
            protein = 1.8 * userData.Weight;
            carbohydrate = Math.round((BasalMetabolism * 0.6) / 4);
            lipid = Math.round((BasalMetabolism * 0.31) / 9);
            break;
        default:
            protein = 2.2 * userData.Weight;
            carbohydrate = Math.round((BasalMetabolism * 0.65) / 4);
            lipid = Math.round((BasalMetabolism * 0.35) / 9);
            break;
    }
    const sugar = Math.round((BasalMetabolism * 0.5) / 4);
    const fattyAcid = Math.round((BasalMetabolism * 0.1) / 9);
    const fiber = Gender === 0 ? 35 : 28;
    const salt = 2.3;

    return { energy, protein, carbohydrate, lipid, fattyAcid, fiber, salt, sugar };
};

export default GetDailyNutrientsGoal;

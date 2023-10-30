import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';
import { UserData } from '~/domain/interfaces/services/user-data';

const GetDailyNutrientsGoal = (userData: UserData): DailyNutrientsType => {
    const { basalMetabolism, sportiveness, gender } = userData;
    const energy = basalMetabolism;
    let protein = 0;
    let carbohydrate = 0;
    let lipid = 0;
    switch (sportiveness) {
        case 0:
            protein = Math.round(0.8 * userData.weight);
            carbohydrate = Math.round((basalMetabolism * 0.45) / 4);
            lipid = Math.round((basalMetabolism * 0.2) / 9);
            break;
        case 1:
            protein = Math.round(1.2 * userData.weight);
            carbohydrate = Math.round((basalMetabolism * 0.5) / 4);
            lipid = Math.round((basalMetabolism * 0.24) / 9);
            break;
        case 2:
            protein = Math.round(1.4 * userData.weight);
            carbohydrate = Math.round((basalMetabolism * 0.55) / 4);
            lipid = Math.round((basalMetabolism * 0.27) / 9);
            break;
        case 3:
            protein = Math.round(1.8 * userData.weight);
            carbohydrate = Math.round((basalMetabolism * 0.6) / 4);
            lipid = Math.round((basalMetabolism * 0.31) / 9);
            break;
        default:
            protein = Math.round(2.2 * userData.weight);
            carbohydrate = Math.round((basalMetabolism * 0.65) / 4);
            lipid = Math.round((basalMetabolism * 0.35) / 9);
            break;
    }
    const sugar = Math.round((basalMetabolism * 0.5) / 4);
    const fattyAcid = Math.round((basalMetabolism * 0.1) / 9);
    const fiber = gender === 0 ? 35 : 28;
    const salt = 2.3;

    return { energy, protein, carbohydrate, lipid, fattyAcid, fiber, salt, sugar };
};

export default GetDailyNutrientsGoal;

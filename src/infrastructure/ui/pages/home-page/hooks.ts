import { useStore } from '~/infrastructure/controllers/store';
import GetDailyNutrientsGoal from '~/infrastructure/ui/shared/helper/get-daily-nutrients-goal';
import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';
import { anecdotesObject } from '~/domain/entities/constants/anecdote-constants';

const useHomePageData = () => {
    const {
        LoginStore: { userData }
    } = useStore();

    // TODO : calculate eco-score from daily products eaten
    const ecoScore = 82;

    const username = userData.Pseudo;

    // TODO : retrieve the right nutrients earned from daily products eaten for all nutrients type
    const dailyNutrientsGoal = GetDailyNutrientsGoal(userData.BasalMetabolism);
    const dailyNutrientsEarned = {
        energy: Math.round(userData.BasalMetabolism * 0.82),
        protein: Math.round(dailyNutrientsGoal.protein * 0.6),
        carbohydrate: Math.round(dailyNutrientsGoal.carbohydrate * 0.4),
        lipid: Math.round(dailyNutrientsGoal.lipid * 0.8)
    } as DailyNutrientsType;

    const chooseRightDynamicImage = () => {
        switch (true) {
            case ecoScore < 5:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-01.svg');
            case ecoScore < 10:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-02.svg');
            case ecoScore < 20:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-03.svg');
            case ecoScore < 30:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-04.svg');
            case ecoScore < 40:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-05.svg');
            case ecoScore < 50:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-06.svg');
            case ecoScore < 60:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-07.svg');
            case ecoScore < 70:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-08.svg');
            case ecoScore < 80:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-09.svg');
            case ecoScore < 90:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-10.svg');
            case ecoScore <= 100:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-11.svg');
        }
    };

    const getRandomNumberInArrayLength = (arrayLength: number): number => {
        return Math.round(Math.random() * arrayLength);
    };

    const anecdoteObject = anecdotesObject[getRandomNumberInArrayLength(anecdotesObject.length)];

    return {
        anecdoteObject,
        dailyNutrientsGoal,
        dailyNutrientsEarned,
        username,
        chooseRightDynamicImage,
        ecoScore
    };
};

export default useHomePageData;

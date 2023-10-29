import { action, makeObservable, observable } from 'mobx';
import { WidgetsParams } from '~/domain/interfaces/props/widgets/widgets-params';
import RootStore from '~/infrastructure/controllers/store/root-store/index';
import GetDailyNutrientsGoal from '~/infrastructure/ui/shared/helper/nutrient/get-daily-nutrients-goal';
import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import { defaultDailyNutrientsEarnedData } from '~/domain/interfaces/constant/default-daily-nutrients-earned-data';

class DataStore {
    rootStore: RootStore;

    dailyNutrientsGoal: DailyNutrientsType;
    dailyNutrientsEarned: DailyNutrientsType;
    dayEnergy: number;
    ecoScore: number;
    widgetsParams: WidgetsParams;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        this.dailyNutrientsGoal = GetDailyNutrientsGoal(rootStore.UserStore.userData);
        this.dailyNutrientsEarned = defaultDailyNutrientsEarnedData;
        this.ecoScore = 42;
        this.dayEnergy = 0;
        this.widgetsParams = {
            line1: [{ type: WidgetEnum.Large }],
            line2: [{ type: WidgetEnum.Anecdote }, { type: WidgetEnum.EcoScore }]
        };

        makeObservable(
            this,
            {
                widgetsParams: observable,
                ecoScore: observable,
                dailyNutrientsGoal: observable,
                dailyNutrientsEarned: observable,

                setWidgetParams: action,
                setEcoScore: action,
                updateDailyNutrientsGoal: action,
                resetStore: action
            },
            { autoBind: true }
        );
    }

    setWidgetParams = (newParams: WidgetsParams) => {
        this.widgetsParams = newParams;
    };

    setEcoScore = (newEcoScore: number) => {
        this.ecoScore = newEcoScore;
    };

    updateDailyNutrientsGoal = () => {
        this.dailyNutrientsGoal = GetDailyNutrientsGoal(this.rootStore.UserStore.userData);
    };

    resetStore = () => {
        this.dailyNutrientsGoal = GetDailyNutrientsGoal(this.rootStore.UserStore.userData);
        this.dailyNutrientsEarned = defaultDailyNutrientsEarnedData;
        this.ecoScore = 42;
        this.dayEnergy = 0;
        this.widgetsParams = {
            line1: [{ type: WidgetEnum.Large }],
            line2: [{ type: WidgetEnum.Anecdote }, { type: WidgetEnum.EcoScore }]
        };
    };
}

export default DataStore;

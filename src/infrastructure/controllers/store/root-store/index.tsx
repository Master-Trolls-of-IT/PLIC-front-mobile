import { stopPersisting } from 'mobx-persist-store';
import NavigationStore from '~/infrastructure/controllers/store/root-store/navigation-store';
import UserStore from '~/infrastructure/controllers/store/root-store/user-store';
import LogsStore from '~/infrastructure/controllers/store/root-store/logs-store';
import DataStore from '~/infrastructure/controllers/store/root-store/data-store';
import MealStore from '~/infrastructure/controllers/store/root-store/meal-store';
import GameStore from '~/infrastructure/controllers/store/root-store/game-store';
import HistoryStore from '~/infrastructure/controllers/store/root-store/history-store';
import ConsumedProductStore from '~/infrastructure/controllers/store/root-store/consumed-product-store';
import RecipeStore from '~/infrastructure/controllers/store/root-store/recipe-store';
class RootStore {
    NavigationStore: NavigationStore;
    UserStore: UserStore;
    LogsStore: LogsStore;
    DataStore: DataStore;
    MealStore: MealStore;
    HistoryStore: HistoryStore;
    ConsumedProductStore: ConsumedProductStore;
    RecipeStore: RecipeStore;
    GameStore: GameStore;

    static instance: RootStore;

    public static getInstance(): RootStore {
        if (!this.instance) {
            this.instance = new this();
        }

        return this.instance;
    }

    public constructor() {
        this.NavigationStore = new NavigationStore(this);
        this.UserStore = new UserStore('UserStore', this);
        this.DataStore = new DataStore(this);
        this.HistoryStore = new HistoryStore('HistoryStore');
        this.ConsumedProductStore = new ConsumedProductStore('ConsumedProductStore', this);
        this.MealStore = new MealStore('MealStore');
        this.LogsStore = new LogsStore('LogsStore');
        this.RecipeStore = new RecipeStore();
        this.GameStore = new GameStore(this, 'GameStore');
    }

    resetAllObservables = () => {
        this.UserStore.resetStore();
        this.DataStore.resetStore();
        this.HistoryStore.resetStore();
        this.ConsumedProductStore.resetStore();
        this.MealStore.resetStore();
        this.LogsStore.resetStore();
        this.RecipeStore.resetStore();
    };

    clearAllDomainStores = () => {
        stopPersisting(this.UserStore);
        stopPersisting(this.HistoryStore);
        stopPersisting(this.ConsumedProductStore);
        stopPersisting(this.MealStore);
        stopPersisting(this.LogsStore);
    };
}

export default RootStore;

import { stopPersisting } from 'mobx-persist-store';
import NavigationStore from '~/infrastructure/controllers/store/root-store/navigation-store';
import LoginStore from '~/infrastructure/controllers/store/root-store/login-store';
import LogStore from '~/infrastructure/controllers/store/root-store/log-store';
import DataStore from '~/infrastructure/controllers/store/root-store/data-store';
import MealStore from '~/infrastructure/controllers/store/root-store/meal-store';

class RootStore {
    NavigationStore: NavigationStore;
    LoginStore: LoginStore;
    LogStore: LogStore;
    DataStore: DataStore;
    MealStore: MealStore;

    static instance: RootStore;

    public static getInstance(): RootStore {
        if (!this.instance) {
            this.instance = new this();
        }

        return this.instance;
    }

    public constructor() {
        this.NavigationStore = new NavigationStore();
        this.LoginStore = new LoginStore('LoginStore', this);
        this.LogStore = new LogStore('LogStore');
        this.MealStore = new MealStore('MealStore');
        this.DataStore = new DataStore('DataStore', this);
    }

    resetAllObservables = () => {
        this.LoginStore.resetStore();
        this.LogStore.resetStore();
    };

    clearAllDomainStores = () => {
        stopPersisting(this.LoginStore);
        stopPersisting(this.LogStore);
    };
}

export default RootStore;

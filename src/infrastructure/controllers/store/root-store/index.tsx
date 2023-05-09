import { stopPersisting } from 'mobx-persist-store';
import NavigationStore from '~/infrastructure/controllers/store/root-store/navigation-store';
import LoginStore from '~/infrastructure/controllers/store/root-store/login-store';
import LogStore from '~/infrastructure/controllers/store/root-store/log-store';

class RootStore {
    NavigationStore: NavigationStore;
    LoginStore: LoginStore;
    LogStore: LogStore;

    constructor() {
        this.NavigationStore = new NavigationStore();
        this.LoginStore = new LoginStore('LoginStore');
        this.LogStore = new LogStore('LoggingStore');
    }

    resetAllObservables = () => {
        this.LoginStore.resetStore();
    };

    clearAllDomainStores = () => {
        stopPersisting(this.LoginStore);
    };
}

export default RootStore;

import { stopPersisting } from 'mobx-persist-store';
import NavigationStore from '~/infrastructure/controllers/store/root-store/navigation-store';
import LoginStore from '~/infrastructure/controllers/store/root-store/login-store';

class RootStore {
    NavigationStore: NavigationStore;
    LoginStore: LoginStore;

    constructor() {
        this.NavigationStore = new NavigationStore();
        this.LoginStore = new LoginStore('LoginStore');
    }

    resetAllObservables = () => {
        this.LoginStore.resetStore();
    };

    clearAllDomainStores = () => {
        stopPersisting(this.LoginStore);
    };
}

export default RootStore;

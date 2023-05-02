import NavigationStore from '~/infrastructure/controllers/store/root-store/navigation-store';

class RootStore {
    NavigationStore: NavigationStore;

    constructor() {
        this.NavigationStore = new NavigationStore();
    }
}

export default RootStore;

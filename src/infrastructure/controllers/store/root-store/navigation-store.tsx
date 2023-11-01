import { action, makeAutoObservable } from 'mobx';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { navigationRef } from '~/infrastructure/ui/shared/helper/navigation-ref';
import RootStore from '~/infrastructure/controllers/store/root-store/index';

class NavigationStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(
            this,
            {
                navigate: action,
                goBack: action,
                resetNavigation: action
            },
            { autoBind: true }
        );
    }

    navigate = action((routeTo: PagesEnum) => {
        if (navigationRef.isReady()) {
            navigationRef.navigate(routeTo as never);
        }
    });

    goBack = () => {
        if (navigationRef.isReady()) {
            navigationRef.goBack();
        }
    };

    resetNavigation = () => {
        if (navigationRef.isReady()) {
            navigationRef.reset({
                index: 0,
                routes: [{ name: PagesEnum.StartUpPage }]
            });
            this.rootStore.resetAllObservables();
            this.rootStore.clearAllDomainStores();
        }
    };
}

export default NavigationStore;

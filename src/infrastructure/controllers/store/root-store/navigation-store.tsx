import { action, makeAutoObservable } from 'mobx';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { navigationRef } from '~/infrastructure/ui/shared/helper/navigation-ref';

class NavigationStore {
    constructor() {
        makeAutoObservable(
            this,
            {
                navigate: action,
                goBack: action
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
}

export default NavigationStore;

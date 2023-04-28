import { action, makeAutoObservable, observable } from 'mobx';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

class NavigationStore {
    navigate: (route: string) => void;
    activeScreen: PagesEnum;

    constructor() {
        this.activeScreen = PagesEnum.HomePage;
        this.navigate = () => {};

        makeAutoObservable(
            this,
            {
                navigate: observable,
                activeScreen: observable,
                setNavigate: action,
                setActiveScreen: action
            },
            { autoBind: true }
        );
    }

    setNavigate = (navigate: (route: string) => void) => {
        this.navigate = navigate;
    };

    setActiveScreen = (activeScreen: PagesEnum) => {
        this.activeScreen = activeScreen;
    };
}

export default NavigationStore;

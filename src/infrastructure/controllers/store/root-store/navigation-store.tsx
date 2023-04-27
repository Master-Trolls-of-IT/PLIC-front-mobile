import { action, makeAutoObservable, observable } from 'mobx';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

class NavigationStore {
    navigate: any = () => {};
    activeScreen: PagesEnum;

    constructor() {
        this.activeScreen = PagesEnum.HomePage;

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

    setNavigate = (navigate: any) => {
        this.navigate = navigate;
    };

    setActiveScreen = (activeScreen: PagesEnum) => {
        this.activeScreen = activeScreen;
    };
}

export default NavigationStore;

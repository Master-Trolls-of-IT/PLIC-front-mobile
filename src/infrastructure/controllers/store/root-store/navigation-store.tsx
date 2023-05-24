import { action, makeAutoObservable, observable } from 'mobx';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';

class NavigationStore {
    navigate: NavigateProps;
    activeScreen: PagesEnum;
    previousScreen: PagesEnum;

    constructor() {
        this.activeScreen = PagesEnum.StartUpPage;
        this.previousScreen = PagesEnum.StartUpPage;
        this.navigate = () => {};

        makeAutoObservable(
            this,
            {
                navigate: observable,
                activeScreen: observable,
                previousScreen: observable,

                setNavigate: action,
                setActiveScreen: action,
                setPreviousScreen: action,
                goBack: action
            },
            { autoBind: true }
        );
    }

    setNavigate = (navigate: NavigateProps) => {
        this.navigate = (routeName: PagesEnum) => {
            this.setPreviousScreen(this.activeScreen);
            this.setActiveScreen(routeName);
            navigate(routeName);
        };
    };

    setActiveScreen = (activeScreen: PagesEnum) => {
        this.activeScreen = activeScreen;
    };

    setPreviousScreen = (previousScreen: PagesEnum) => {
        this.previousScreen = previousScreen;
    };

    goBack = () => {
        this.navigate(this.previousScreen);
    };
}

export default NavigationStore;
